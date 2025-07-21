import React from "react";
import { MoonLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="w-full mt-5 flex justify-center">
      <MoonLoader color="#FFB347" size={75} />
    </div>
  );
};

export default Loader;
