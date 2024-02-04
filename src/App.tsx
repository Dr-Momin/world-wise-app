import "./App.css";
import Homepage from "./pages/Homepage";
import { Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product.tsx";
import Login from "./pages/Login.tsx";
import Pricing from "./pages/Pricing.tsx";
import AppLayout from "./pages/AppLayout.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import { CityList, CountryList } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"app"} element={<AppLayout />}>
          <Route index element={<Navigate to={"cities"} replace={true} />} />
          <Route path={"cities"} element={<CityList />} />
          <Route path={"countries"} element={<CountryList />} />
        </Route>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/product"} element={<Product />} />
        <Route path={"/pricing"} element={<Pricing />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
