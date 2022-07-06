import React from "react";

const Index = () => {
  return (
    <>
      <div className="mt-2 lg:inline-flex">
        <div className="m-2 text-2xl font-extrabold text-white"></div>
        <label htmlFor="from" className="m-2 text-lg font-extrabold text-white">
          From
        </label>
        <input
          type="datetime-local"
          className="w-[60%] px-4 py-2 border-none hover:border-cyan-500"
          id="from"
        />
        <label htmlFor="to" className="m-2 text-lg font-extrabold text-white">
          To
        </label>
        <input
          type="datetime-local"
          className="w-[60%] px-4 py-2 border-none hover:border-cyan-500"
          id="to"
        />
      </div>
    </>
  );
};
export default Index;
