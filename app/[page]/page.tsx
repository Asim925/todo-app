"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Table, { Data } from "@/app/components/Table";

const Page = () => {
  const { page } = useParams();
  const currentPage = parseInt(typeof page === "string" ? page : "1", 10);

  const [todos, setTodos] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=10`
      );
      const data = await res.json();
      setTodos(data);
      setLoading(false);
    };

    fetchTodos();
  }, [currentPage]);

  if (loading)
    return (
      <>
        <div className="flex justify-center items-center w-full h-[100vh]">
          <div className="relative w-24 h-24 rounded-full animate-spin-slow bg-gradient-to-br from-purple-500 via-sky-300 to-teal-400">
            <span className="absolute w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-sky-300 to-teal-400 blur-sm"></span>
            <span className="absolute w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-sky-300 to-teal-400 blur-md"></span>
            <span className="absolute w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-sky-300 to-teal-400 blur-xl"></span>
            <span className="absolute w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-sky-300 to-teal-400 blur-3xl"></span>
            <div className="absolute inset-2 bg-white border-4 border-white rounded-full"></div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <Table todos={todos} currentPage={currentPage} />;
    </>
  );
};

export default Page;
