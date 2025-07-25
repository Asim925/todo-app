"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import TodoMaker from "./TodoMaker";

export interface Data {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

interface Props {
  todos: Data[];
  currentPage: number;
}

const Table = ({ todos, currentPage }: Props) => {
  const [data, setData] = useState<Data[]>(todos);

  const tableHead = ["ID", "User ID", "Title", "Completion", "Delete"];

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const router = useRouter();
  const goToPage = (page: number) => {
    router.push(`${page}`);
  };

  return (
    <div className="w-full">
      <div>
        <h1 className="text-center w-full px-5 mt-10 text-5xl font-extrabold">
          JSON Placeholder
        </h1>
        <p className="md:text-center px-10 lg:px-20 py-10 text-xl leading-8">
          🚀 In this project, I worked with the TODOS section of the
          JSONPlaceholder API to build a dynamic and interactive table. 🧹 I
          implemented client-side deletion of table items without modifying the
          original data source. 🎯 Used conditional rendering to control UI
          behavior based on item state (like completed/not completed). 🎨
          Applied custom color styling to buttons and rows for better visual
          feedback. 📄 Built pagination using dynamic route segments in Next.js
          (/todos/[page]) to navigate between pages. ⚡ Data fetching was
          handled on the server to improve performance and keep the logic clean.
          🔧 This project helped reinforce my understanding of server
          components, client interactions, and Next.js App Router fundamentals.
        </p>
      </div>

      <TodoMaker getTodo={(task) => setData([task, ...data])} />

      <div className="xl:mx-40 lg:mx-30 mx-5 my-10 border-gray-600 border-2 overflow-x-auto">
        <div className="min-w-[600px]">
          {" "}
          <table className="w-full">
            <thead className="text-left border-b-2 border-gray-700">
              <tr>
                {tableHead.map((item, index) => (
                  <th className="p-3" key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr className="border-b-2 border-gray-900" key={index}>
                  <td className="p-3 text-orange-400">{item.id}</td>
                  <td className="p-3 text-pink-400">{item.userId}</td>
                  <td className="p-3 text-green-400">{item.title}</td>
                  <td
                    className={`p-3 font-bold ${
                      item.completed === false
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {item.completed === true ? "Yes" : "No"}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(item.id)}
                      disabled={item.completed === false}
                      className={`px-4 py-3 bg-red-500 rounded-2xl text-white  transition   ${
                        item.completed === false
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-red-600 hover:scale-104"
                      }`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mb-10">
        <button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
          className="px-4 py-2 bg-violet-800 rounded hover:bg-violet-900 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-xl font-bold">Page {currentPage}</span>
        <button
          disabled={currentPage === 20} // JSONPlaceholder only has 200 todos
          onClick={() => goToPage(currentPage + 1)}
          className="px-4 py-2 bg-violet-800 rounded hover:bg-violet-900 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
