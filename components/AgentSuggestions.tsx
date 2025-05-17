import React from 'react';

interface AgentSuggestionsProps {
  suggestions: string[];
  title?: string;
}

const AgentSuggestions: React.FC<AgentSuggestionsProps> = ({ suggestions, title }) => {
  if (!suggestions || suggestions.length === 0) {
    return null; // Don't render anything if there are no suggestions
  }

  return (
    <div className="p-4 my-4 border border-gray-200 rounded-lg shadow bg-slate-50">
      {title && <h3 className="text-md font-semibold mb-3 text-gray-800">{title}</h3>}
      <ul className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <li 
            key={index} 
            className="p-3 bg-white rounded-md border border-gray-100 text-gray-700 text-sm shadow-sm hover:bg-gray-50 transition-colors duration-150"
          >
            "{suggestion}"
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentSuggestions; 