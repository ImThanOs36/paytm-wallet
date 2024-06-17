import React from 'react';

const Label = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
        {children}
    </label>
);

export { Label };
