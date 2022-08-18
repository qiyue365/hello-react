import React, { Fragment, useState } from "react";
import "./App.css";

export default function App() {
  const defaultMsg = "Hello world!";
  const [msg, setMsg] = useState(defaultMsg);
  return (
    <Fragment>
      <div className="w-full mx-auto mt-5 bg-white p-3 border rounded">
        <h1 className="text-3xl font-bold underline mb-3">{msg}</h1>
        <button
          className="px-4 py-2 bg-blue-400 hover:bg-blue-500 hover:outline-blue-600 text-gray-100"
          onClick={() =>
            setMsg((state) =>
              state === defaultMsg ? "你好，世界" : defaultMsg
            )
          }
        >
          点我
        </button>
      </div>
    </Fragment>
  );
}
