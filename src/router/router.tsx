import { Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home/Home";


export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        {/* ... */}
      </Route>
    </Routes>
  );
}