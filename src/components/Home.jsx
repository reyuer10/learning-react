import React from "react";
import { FaReact } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate()
  return (
    <div>
      <div className="m-3">
        <p className="text-4xl text-blue-300 font-bold flex items-center">
          React Js <FaReact className="mx-2" size={40} />
        </p>
        <p className="text-slate-400 text-xl">Intro to Advance</p>
        <button onClick={() =>navigate('/category')} className="bg-slate-600 px-4 py-2 rounded-lg text-white font-bold text-xl">
          Get started
        </button>
      </div>
    </div>
  );
}
