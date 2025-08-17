import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const PdfDownloadButton: React.FC<{
    isLoading: boolean;
    onClick: () => void;
    className?: string;
}> = ({ isLoading, onClick, className = '' }) => (
    <button
        type="button"
        onClick={onClick}
        disabled={isLoading}
        className={`inline-flex items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-50 ${className}`}
    >
        <svg className="-ml-0.5 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
        {isLoading ? 'Generating...' : 'Download as PDF'}
    </button>
);

export const generatePdf = async (elementId: string, fileName: string, setIsLoading: (loading: boolean) => void) => {
    const content = document.getElementById(elementId);
    if (!content) {
        console.error(`Element with id #${elementId} not found.`);
        return;
    }
    
    setIsLoading(true);

    const buttonsAndLinks = content.querySelectorAll('button, a[href]');
    const shadowedElements = content.querySelectorAll('.shadow, .shadow-sm, .shadow-lg');

    const originalShadowClasses = new Map<Element, string[]>();
    shadowedElements.forEach(el => {
        const classes = ['shadow', 'shadow-sm', 'shadow-lg'].filter(c => el.classList.contains(c));
        originalShadowClasses.set(el, classes);
        el.classList.remove(...classes);
    });
    buttonsAndLinks.forEach(el => (el as HTMLElement).style.visibility = 'hidden');

    try {
        const canvas = await html2canvas(content, {
            scale: 2,
            logging: false,
            useCORS: true,
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'px',
            format: 'a4'
        });

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = imgProps.width;
        const imgHeight = imgProps.height;
        
        const ratio = imgWidth / imgHeight;
        const scaledWidth = pdfWidth;
        const scaledHeight = pdfWidth / ratio;

        let heightLeft = scaledHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, scaledWidth, scaledHeight);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
            position -= pdfHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, scaledWidth, scaledHeight);
            heightLeft -= pdfHeight;
        }

        pdf.save(`${fileName.replace(/ /g, '_')}.pdf`);
    } catch (e) {
        console.error(e);
        alert('Failed to generate PDF. Please try again.');
    } finally {
        shadowedElements.forEach(el => {
            const classes = originalShadowClasses.get(el);
            if (classes) {
                el.classList.add(...classes);
            }
        });
        buttonsAndLinks.forEach(el => (el as HTMLElement).style.visibility = 'visible');
        setIsLoading(false);
    }
};