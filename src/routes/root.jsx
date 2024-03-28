import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Root() {
  const navigation = useNavigation();
  const loading = (
    <div className="pt-14 text-center text-3xl ">
      <p>Loading . . . </p>
    </div>
  );
  return (
    <>
      <Navbar />
      {navigation.state === "loading" ? loading : <Outlet />}
      <ToastContainer />
    </>
  );
}

export default Root;
