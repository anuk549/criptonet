import React, { useContext } from "react";

const Table = ({ children }) => {
  return (
    <div
      className="w-full h-full rounded-md relative p-8 border-2 "
    >
      {children}
    </div>
  );
};

export default Table;