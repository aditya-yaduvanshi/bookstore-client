import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary" | "tertiary" | "quarternary";
  color?: "primary" | "secondary" | "tertiary" | "none";
}

const variantClass = {
  primary: "hover:-translate-y-0.5",
  secondary: "hover:bg-opacity-60",
  tertiary: "",
  quarternary: "hover:scale-105",
};

const colorClass = {
  primary: "bg-blue-500 text-white hover:bg-blue-700",
  secondary: "bg-orange-500 hover:bg-orange-700 text-white",
  tertiary: "bg-yellow-500 text-white hover:bg-yellow-700",
  none: "",
};

const Button = ({
  children,
  variant = "primary",
  color = "primary",
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`transition-all duration-50 active:scale-95 text-sm sm:text-base rounded-lg disabled:opacity-40 tracking-wide font-semibold flex justify-center items-center gap-2.5 py-2 px-2.5 ${variantClass[variant]} ${colorClass[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);