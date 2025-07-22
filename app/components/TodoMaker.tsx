"use client";
import React, { useEffect, useRef, useState } from "react";
import { Data } from "./Table";

interface Props {
  getTodo: (task: Data) => void;
}

let length = 200;

const TodoMaker = ({ getTodo }: Props) => {
  let titleRef = useRef<HTMLInputElement>(null);

  let [completed, setCompleted] = useState(false);

  let [todo, setTodo] = useState({
    id: 0,
    userId: 0,
    title: "",
    completed: false,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (titleRef.current?.value) {
      let newTodo = {
        id: length + 1,
        userId: length + 11,
        title: titleRef.current?.value,
        completed: completed,
      };
      setTodo(newTodo);
      getTodo(newTodo);

      length += 1;
      titleRef.current.value = "";
      setCompleted(false);
    }
  };

  // useEffect(() => {}, [todo]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-5 flex-wrap md:mx-15 mx-5">
          <div className="flex grow flex-col ">
            <label className="text-2xl font-bold pb-2" htmlFor="title">
              Title
            </label>
            <input
              className="bg-gray-800 rounded px-4 py-2 border-gray-600 border-2"
              type="text"
              placeholder="Input Title..."
              id="title"
              ref={titleRef}
            />
          </div>

          <div className="flex grow flex-col">
            <label className="text-2xl font-bold  pb-2" htmlFor="completion">
              Completion
            </label>

            <select
              className="bg-gray-800 rounded px-4 py-2.5 border-gray-600 border-2"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                event.target.value === "yes"
                  ? setCompleted(true)
                  : setCompleted(false)
              }
              name="completion"
              id="completion"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
        </div>
        <button
          className="mx-15 my-5 py-3 px-4 bg-green-700 rounded active:bg-green-800 hover:bg-green-600"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default TodoMaker;
