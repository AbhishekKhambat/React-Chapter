import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}

      <input
        type={type}
        id={id}
        ref={ref}
        className={`
        px-3 py-2 rounded-lg bg-white text-black outline-none
        focus:bg-gray-50 duration-200 border border-gray-200 w-full
        file:mr-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-50 file:text-blue-700
        hover:file:bg-blue-100
        ${className}
        `}
        {...props}
      />
    </div>
  );
});

export default Input;