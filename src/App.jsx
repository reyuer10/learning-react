import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

// Components
import Home from "./components/Home";
import HelloWorld from "./pages/SecondContainer";
import Category from "./components/Category";

// Pages
import SecondContainer from "./pages/SecondContainer";

export default function App() {
  return (
   <div className="font-poppins">
     <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hello-react" element={<HelloWorld />} />
        <Route path="/category" element={<Category />} />
      </Route>
    </Routes>
   </div>
  );
}
