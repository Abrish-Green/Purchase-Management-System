import React from "react";

const Index = ({ Data }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <>
      <div className="flex-col w-4/5 h-auto m-4 border-l-4 rounded-md bg-slate-100 border-l-red-700">
        <div className="p-3 text-xl">{Data.name && Data.name}</div>
        <div className="p-3 px-5 border-t border-red-400 text-md">
          {Data.description && Data.description}
        </div>
        <div className="inline-flex gap-8 p-3 px-5 text-md">
          <div className="italic text-gray-400">
            {" "}
            Created At :{" "}
            {new Date(
              Data.registeredOn && Data.registeredOn
            ).toLocaleDateString(undefined, options)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
