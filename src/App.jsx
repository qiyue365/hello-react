import React, { Fragment, useState } from "react";
import "./App.css";

export default function App() {
  const [msg, setMsg] = useState("Hello world!");
  return (
    <Fragment>
      <div className="w-1/2 mx-auto mt-5">
        <h1 className="text-3xl font-bold underline mb-3">{msg}</h1>
        <button
          className="px-4 py-2 bg-blue-400 hover:bg-blue-500 hover:outline-blue-600 text-gray-100"
          onClick={() => setMsg("你好，世界")}
        >
          点我
        </button>
      </div>
    </Fragment>
  );
}
