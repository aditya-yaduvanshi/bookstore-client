import React from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  inputClass?: string;
  labelClass?: string;
  error?: string | null;
}

const Input = ({
  label,
  name,
  placeholder,
  className,
  inputClass,
  labelClass,
  error,
  ...rest
}: InputProps) => {
  return (
    <>
      <div className={`relative ${className}`}>
        <input
          className={`z-10 placeholder:bg-transparent placeholder:tracking-wider border border-slate-300 outline-none w-full h-10 px-2 placeholder:text-transparent focus:shadow-md placeholder:font-normal font-medium rounded-lg hover:border-blue-500 text-blue-500 ${inputClass}`}
          id={`input-${name}`}
          placeholder={placeholder}
          {...rest}
        />
        <label
          className={`absolute top-2 left-2 transition-all cursor-text text-slate-400 ${labelClass}`}
          htmlFor={`input-${name}`}
        >
          {label ?? placeholder}
        </label>
      </div>
      <span className="text-red-500">{error}</span>
    </>
  );
};

export default React.memo(Input);
