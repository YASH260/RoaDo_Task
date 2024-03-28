import React from "react";

const sizes = {
  xs: "text-[10px] font-normal",
  lg: "text-base font-medium",
  s: "text-xs font-normal",
  xl: "text-2xl font-medium md:text-[22px]",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
