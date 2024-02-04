import "./App.css";
import Homepage from "./pages/Homepage";
import {Route, Routes} from "react-router-dom";
import Product from "./pages/Product.tsx";
import Login from "./pages/Login.tsx";
import Pricing from "./pages/Pricing.tsx";
import AppLayout from "./pages/AppLayout.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/app"} element={<AppLayout />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/product"} element={<Product />} />
        <Route path={"/pricing"} element={<Pricing />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
