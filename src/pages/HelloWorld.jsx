import React from "react";
import { data } from "../data/data";
import HelloWorldImg from "../../public/images/HelloWorld.png";

export default function HelloWorld() {
  return (
    <div>
      {data.map((d, index) => (
        <div key={index}>
          <div>
            <img
              className="rounded-xl"
              src={HelloWorldImg}
              alt={d.helloWorld.src}
            />
          </div>
          <div>
            <p className="bg-[#292524]">import React from 'react';</p>
            <p>{d.helloWorld.import}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
