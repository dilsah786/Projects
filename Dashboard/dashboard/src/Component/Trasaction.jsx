import React from "react";
import Title from "./Title";
import { RiProgress3Line } from "react-icons/ri";
import { TiWarning } from "react-icons/ti";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const data = [
  {
    date: "2024-01-05",
    name: "Online Store",
    contact: "+1234567890",
    status: "Completed",
    source: "Credit Card",
    amount: 150,
  },
  {
    date: "2024-01-12",
    name: "Grocery Store",
    contact: "+1987654321",
    status: "Rejected",
    source: "Debit Card",
    amount: 75,
  },
  {
    date: "2024-01-20",
    name: "Utility Bill",
    contact: "+1122334455",
    status: "Pending",
    source: "Bank Transfer",
    amount: 100,
  },
  {
    date: "2024-02-03",
    name: "Restaurant",
    contact: "+1555666777",
    status: "Completed",
    source: "Cash",
    amount: 50,
  },
  {
    date: "2024-02-10",
    name: "Online Subscription",
    contact: "+1444333222",
    status: "Completed",
    source: "Credit Card",
    amount: 25,
  },
  {
    date: "2024-02-18",
    name: "Gas Station",
    contact: "+1777888999",
    status: "Completed",
    source: "Debit Card",
    amount: 40,
  },
  {
    date: "2024-03-07",
    name: "Electronics Store",
    contact: "+1987654321",
    status: "Completed",
    source: "Credit Card",
    amount: 200,
  },
  {
    date: "2024-03-15",
    name: "Online Service",
    contact: "+1122334455",
    status: "Pending",
    source: "Bank Transfer",
    amount: 120,
  },
  {
    date: "2024-03-22",
    name: "Coffee Shop",
    contact: "+1234567890",
    status: "Rejected",
    source: "Cash",
    amount: 10,
  },
  {
    date: "2024-04-01",
    name: "Grocery Store",
    contact: "+1555666777",
    status: "Completed",
    source: "Debit Card",
    amount: 90,
  },
  {
    date: "2024-04-08",
    name: "Online Shopping",
    contact: "+1444333222",
    status: "Completed",
    source: "Credit Card",
    amount: 180,
  },
  {
    date: "2024-04-15",
    name: "Car Maintenance",
    contact: "+1777888999",
    status: "Completed",
    source: "Cash",
    amount: 300,
  },
];

const Trasaction = () => {
  return (
    <div className="py-20 w-full md:w-2/3">
      <Title title={"Latest Transaction"} />
      <div className="overflow-x-auto mt-5">
        <table className="w-full">
          <thead className="w-full border-b border-gray-300 dark:border-gray-700">
            <tr className="w-full text-black dark:text-gray-400 text-left">
              <th className="py-2">Date</th>
              <th className="py-2">Name</th>
              <th className="py-2">Status</th>
              <th className="py-2">Source</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((el, index) => {
              return (
                <tr
                  key={index}
                  className="border-b border-gray-200 
                dark:border-gray-700 text-gray-600  dark:text-gray-500 dark:hover:bg-slate-400/10 hover:bg-gray-800/10 "
                >
                  <td className="py-2 px-2"> {el.date} </td>
                  <td className="py-2 px-2">
                    <div className="">
                      <p className="font-medium text-lg text-black dark:text-gray-400">
                        {el.name}
                      </p>
                      <span className="text-sm text-gray-600">
                        {el.contact}
                      </span>
                    </div>
                  </td>

                  <td className="py-2 px-2 flex items-center gap-2">
                    {el.status === "Pending" && (
                      <RiProgress3Line
                        className="text-amber-600   rounded-lg"
                        size={24}
                      />
                    )}
                    {el.status === "Completed" && (
                      <IoCheckmarkDoneCircle
                        className="text-emerald-600 rounded-lg"
                        size={24}
                      />
                    )}
                    {el.status === "Rejected" && (
                      <TiWarning
                        className="text-red-600  rounded-lg"
                        size={24}
                      />
                    )}
                    <span> {el.status} </span>
                  </td>

                  <td className="py-2 px-2"> {el.source} </td>
                  <td className="py-2 px-2 text-black dark:text-gray-400 text-base md:text-lg font-medium "> ${el.amount}.00 </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trasaction;

// <td className='py-2 px-2'>
//   <p
//     className={`w-fit flex items-center gap-2 px-2 py-1 rounded-full text-base ${
//       item.status === "Completed"
//         ? "bg-emerald-200 text-emerald-800"
//         : item.status === "Pending"
//         ? "bg-yellow-200 text-yellow-800"
//         : "bg-red-200 text-red-800"
//     }`}
//   >
//     {item.status === "Pending" && <RiProgress3Line />}
//     {item.status === "Completed" && <IoCheckmarkDoneCircle />}
//     {item.status === "Rejected" && <TiWarning />}
//     <span> {item.status}</span>
//   </p>
// </td>;
