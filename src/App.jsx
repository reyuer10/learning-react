import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./components/Home";
import HelloWorld from "./pages/HelloWorld";
import Category from "./components/Category";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hello-react" element={<HelloWorld />} />
        <Route path="/category" element={<Category />} />
      </Route>
    </Routes>
  );
}
