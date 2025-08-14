
import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; link: string; }> = ({ title, children, link }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col">
        <h3 className="text-lg font-semibold text-primary-800">{title}</h3>
        <p className="mt-2 text-gray-600 flex-grow">{children}</p>
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
            Visit {title}
            <svg className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>
    </div>
);


export function DeploymentGuide(): React.ReactNode {
    return (
        <div className="space-y-12">
            <div className="border-b border-gray-200 pb-5">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Free Deployment Guide</h1>
                <p className="mt-2 max-w-4xl text-lg text-gray-500">
                    How to get your AgriGrant SC application online for free.
                </p>
            </div>

            <div className="space-y-8">
                 <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-900">What is a Static App?</h2>
                    <p className="mt-3 text-gray-600">
                        This application is a "static single-page application". This means it consists only of HTML, CSS, and JavaScript files that can be sent directly to a user's browser. It doesn't need a complex backend server, which makes it very easy and cheap (usually free!) to host.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Free Hosting Platforms</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <InfoCard title="Vercel" link="https://vercel.com">
                            Excellent for React apps, offers zero-configuration deployment, a global CDN for speed, and a generous free tier. Made by the creators of Next.js.
                        </InfoCard>
                        <InfoCard title="Netlify" link="https://netlify.com">
                           A pioneer in modern static site hosting. Features an intuitive workflow, automated deploys from Git, and powerful features on its free tier.
                        </InfoCard>
                        <InfoCard title="Cloudflare Pages" link="https://pages.cloudflare.com">
                           Leverages Cloudflare's massive global network for unparalleled speed and security. Offers seamless Git integration and a robust free plan.
                        </InfoCard>
                        <InfoCard title="GitHub Pages" link="https://pages.github.com">
                            The simplest option if your code is already on GitHub. It's completely free and integrated directly into your repository's settings.
                        </InfoCard>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-900">General Deployment Steps (Using Git)</h2>
                    <p className="mt-3 text-gray-600 mb-4">
                        The process for most of these services is very similar:
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        <li>Push your application code to a Git repository (e.g., on <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">GitHub</a>, GitLab).</li>
                        <li>Sign up for one of the hosting providers above using your Git account.</li>
                        <li>Authorize the service to access your repositories.</li>
                        <li>Select the repository containing this application.</li>
                        <li>
                            Configure the project settings:
                            <ul className="list-disc list-inside pl-5 mt-2 space-y-1 bg-gray-50 p-4 rounded-md">
                                <li><strong>Build Command:</strong> Leave this empty. This project doesn't require a build step.</li>
                                <li><strong>Output/Publish Directory:</strong> Set this to the root directory (<code className="text-sm bg-gray-200 p-1 rounded">/</code>) or leave it as the default.</li>
                            </ul>
                        </li>
                        <li>Click "Deploy". Your application will be live in a few minutes and will automatically redeploy whenever you push new changes to your main branch.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
