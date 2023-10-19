import styled from "styled-components";

export default function SecondContainer() {
  return (
    <div className="flex justify-evenly text-xl font-mono font-medium p-10">
      <div className="w-[40%] bg-StylesBackground p-10 rounded-xl space-y-3">
        <p className="text-identified">
          <span className="text-StylesImport">import</span> React{" "}
          <span className="text-StylesImport">from</span>
          <span className="text-string">'react'</span>
        </p>
        <div>
          <p className="text-functions">
            functions <span className="text-string">HelloWorld</span>
            <span className="text-parameter">()</span>
            <span className="text-parameter">{" { "}</span>
          </p>
          <p className="text-StylesImport">
            return <span className="text-StylesImport">{"("}</span>
          </p>
          <p className="text-StylesImport">
            {"<div>"} <span className="text-white">Hello World!</span>{" "}
            {"</div>"}
          </p>
          <p className="text-StylesImport mx-3">{")"}</p>
          <p className="text-parameter">{"}"}</p>
          <p className="text-StylesImport">
            export default <span className="text-identified">HelloWorld;</span>
          </p>
        </div>
      </div>
      <div className="w-[50%] font-poppins text-slate400 space-y-7">
        <p>
          Import React: The code imports the necessary React library, which is
          the core of React applications and provides tools for creating user
          interfaces.
        </p>
        <p>
          Define HelloWorld Component: It defines a component called HelloWorld
          using a JavaScript function. Components are the building blocks of
          React applications and define how the UI should appear.
        </p>
        <p>
          Return JSX: Inside the HelloWorld function, it returns a block of JSX,
          representing a {"<div>"} element containing the text "Hello World!".
          JSX is a syntax in React that allows you to write HTML-like code in
          JavaScript, describing the structure of the user interface.
        </p>
      </div>
    </div>
  );
}

const StylesCenter = styled.div`
  height: calc(100vh - 100px);
  justify-content: center;
  display: flex;
  align-items: center;
`;
