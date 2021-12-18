import { useEffect } from "react"
import React from 'react';

const Unmount = () => {
  useEffect(() => {
    console.log("Mount");
    return () => {
      console.log("Unmount");
    };
  });
  
  return (
    <div>
        <h2>Unmount</h2>
    </div>
  );
};

export default Unmount;
