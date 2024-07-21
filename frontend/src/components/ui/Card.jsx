import React from 'react';

const Card = ({ children }) => (
    <div className="bg-white rounded-lg border-2 shadow-sm overflow-hidden h-fit">
        {children}
    </div>
);

const CardHeader = ({ children }) => (
    <div className="p-4 border-b">
        {children}
    </div>
);

const CardTitle = ({ children }) => (
    <h2 className="text-lg font-semibold text-gray-900 text-center">
        {children}
    </h2>
);

const CardContent = ({ children, className }) => (
    <div className={`p-4 ${className}`}>
        {children}
    </div>
);

const CardFooter = ({ children }) => (
    <div className="p-4 border-t">
        {children}
    </div>
);

export {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
};
