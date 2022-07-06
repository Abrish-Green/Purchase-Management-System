import React from "react";
import DateTimePicker from "../DateTimePicker/Index";
const Index = () => {
  return (
    <>
      <div className="inline-flex justify-between w-full h-32 border shadow-lg bg-slate-600">
        <div className="p-5 text-3xl font-extrabold text-white">
          Purchase Management System
        </div>
        <div className="p-4">
          <DateTimePicker />
        </div>
        <div className="p-5">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Create Product
          </button>
        </div>
      </div>
    </>
  );
};
export default Index;
