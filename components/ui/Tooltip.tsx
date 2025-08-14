
import React from 'react';
import { ACRONYMS } from '../../types';

interface TooltipProps {
  term: string;
}

export const Acronym: React.FC<TooltipProps> = ({ term }) => {
  const definition = ACRONYMS[term.toUpperCase()];

  if (!definition) {
    return <span>{term}</span>;
  }

  return (
    <span className="relative group">
      <span className="underline decoration-dotted cursor-help text-primary-700 font-semibold">{term}</span>
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs p-2 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {definition}
        <svg className="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
        </svg>
      </span>
    </span>
  );
};