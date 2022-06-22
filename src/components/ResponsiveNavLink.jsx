import React from "react";

export default function ResponsiveNavLink({href,children}){
  return(
    <a href={href}
    className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block">
      {children}
    </a>
  );
}