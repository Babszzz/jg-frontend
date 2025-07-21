import React from "react";
import { MoonLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="w-full mt-5 flex justify-center">
      <MoonLoader color="#255A5A" size={75} />
    </div>
  );
};

export default Loader;
