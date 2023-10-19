import React from "react";
import { FaReact } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function FirstContainer() {
  const navigate = useNavigate();
  return (
    <StylesCenter>
      <div className="space-y-10 shadow-md rounded-xl p-10">
        <div className="space-y-7">
          <div>
            <p className="text-4xl text-blue-300 font-bold flex items-center">
              React Js <FaReact className="mx-2" size={40} />
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-xl">Simple Tutorial & Summary lesson</p>
            <p className="w-[60rem]">
              "Intro to Advanced React" is a course designed to enhance your
              React skills. It covers complex topics like efficient data
              management, faster loading web pages, and interactive features.
              The course teaches Hooks, enabling more efficient and readable
              code. It explains creating multi-page websites and seamless
              communication with the server using WebSockets. Security measures
              for protecting websites, debugging skills, and advanced styling
              techniques are also included. Additionally, the course guides in
              deploying websites online and optimizing loading speed for a
              smooth user experience. Ultimately, learners gain a comprehensive
              understanding of building secure, visually appealing, and
              interactive websites with React.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/category")}
            className="bg-slate-600 px-4 py-2 rounded-lg text-white font-bold text-xl hover:bg-slate-500 transition-colors delay-75"
          >
            Get started
          </button>
          <p className="text-slate-400">Own Version made by Reyuer(2023)</p>
        </div>
      </div>
    </StylesCenter>
  );
}

const StylesCenter = styled.div`
  height: calc(100vh - 100px);
  justify-content: center;
  display: flex;
  align-items: center;
`;
