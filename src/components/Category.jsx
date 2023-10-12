import React from "react";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();
  return (
    <div className="font-barlow">
      <div>
        <p className="text-4xl font-bold text-blue-300">React Basic</p>
        <button
          className="bg-blue-100 text-slate-400 text-xl font-semibold rounded-lg px-4 py-2"
          onClick={() => navigate("/hello-react")}
        >
          Hello world - React
        </button>
      </div>
    </div>
  );
}
