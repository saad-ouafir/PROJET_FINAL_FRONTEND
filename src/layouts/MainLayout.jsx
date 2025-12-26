import NavBar from "../components/Navbar";
import Home from "../pages/Home";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Home />
      {/* <Outlet /> */}
    </>
  );
}
