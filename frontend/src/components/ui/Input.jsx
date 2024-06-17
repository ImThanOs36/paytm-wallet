import React from 'react';

const Input = ({ id, type = 'text', placeholder, ...props }) => (
    <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        {...props}
    />
);

export { Input };
