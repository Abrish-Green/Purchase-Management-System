import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInput } from "../../Services/Redux/Purchase";
const Index = () => {
  const dispatch = useDispatch();
  const [date1, setDate1] = React.useState(null);
  const [date2, setDate2] = React.useState(null);
  React.useEffect(() => {
    dispatch(setInput({ date1: date1, date2: date2 }));
  }, [dispatch, date1, date2]);

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
          onChange={(e) => setDate1(e.target.value)}
        />
        <label htmlFor="to" className="m-2 text-lg font-extrabold text-white">
          To
        </label>
        <input
          type="datetime-local"
          className="w-[60%] px-4 py-2 border-none hover:border-cyan-500"
          id="to"
          onChange={(e) => setDate2(e.target.value)}
        />
      </div>
    </>
  );
};
export default Index;
