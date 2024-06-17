import React from 'react';

const DropdownMenu = ({ children }) => <div>{children}</div>;

const DropdownMenuTrigger = ({ asChild, children }) => {
    const child = React.Children.only(children);
    return React.cloneElement(child, { 'aria-haspopup': 'true' });
};

const DropdownMenuContent = ({ align, children }) => {
    const alignStyle = align === 'end' ? 'right-0' : 'left-0';
    return (
        <div className={`absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${alignStyle}`}>
            {children}
        </div>
    );
};

const DropdownMenuLabel = ({ children }) => (
    <div className="px-4 py-2 text-sm text-gray-900 font-semibold">
        {children}
    </div>
);

const DropdownMenuSeparator = () => (
    <div className="border-t border-gray-100"></div>
);

const DropdownMenuItem = ({ children, ...props }) => (
    <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100" {...props}>
        {children}
    </button>
);

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
};
