import React from "react";
import { SearchProduct } from "../../Services/Redux/Purchase";
import DateTimePicker from "../DateTimePicker/Index";
import { useSelector, useDispatch } from "react-redux/es/exports";
const Index = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product.input);
  return (
    <>
      <div className="inline-flex justify-between w-full border shadow-lg h-60 lg:h-32 bg-slate-600">
        <div className="p-5 text-3xl font-extrabold text-white">
          Purchase Management System
        </div>
        <div className="p-4 ">
          <DateTimePicker />
          <div className="">
            <button
              onClick={() => dispatch(SearchProduct(state.date1, state.date2))}
              className="float-right px-4 py-2 mx-2 mt-3 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
