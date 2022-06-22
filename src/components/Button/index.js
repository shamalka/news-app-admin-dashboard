import React from "react";

const Button = ({icon, className, children, ...props}) => {
    return (
        <button {...props} className={`rounded-xl ${className}`}>
            <div className="flex flex-row items-center justify-center">
                {icon && icon}
                <p className="mx-2 mt-2 mb-2">
                    {children}
                </p>
            </div>
        </button>
    );
};

export default Button;
