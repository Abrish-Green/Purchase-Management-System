import React from "react";

const Index = () => {
  return (
    <>
      <div className="mt-2">
        <label htmlFor="from"></label>
        <input
          type="datetime-local"
          className="px-4 py-2 border-none hover:border-cyan-500"
          id="from"
        />
        <label htmlFor="to"></label>
        <input
          type="datetime-local"
          className="px-4 py-2 border-none hover:border-cyan-500"
          id="to"
        />
      </div>
    </>
  );
};
export default Index;
