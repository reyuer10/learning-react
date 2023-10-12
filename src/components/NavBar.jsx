import React from "react";
import { FaReact } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className="font-barlow flex justify-between p-5">
      <div onClick={handleHomeClick} className="cursor-pointer">
        <p className="text-[#61DAFB] font-bold flex items-center text-2xl">
          <FaReact className="mx-2" />
          Learning React
        </p>
      </div>
      <div className="space-x-10">
        <Link to="/" className="text-xl">
          Home
        </Link>
        <Link to="/category" className="text-xl">
          Category
        </Link>
      </div>
    </div>
  );
}
