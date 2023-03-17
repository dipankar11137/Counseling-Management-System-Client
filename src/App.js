import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Share/Footer";
import Navbar from "./Components/Share/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Components/Share/NotFound";
import Appointment from "./Components/Pages/Appointment/Appointment/Appointment";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import RequireAuth from "./Components/Login/RequireAUth";

function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {/* <Route index element={</>} />
          <Route path="manageItem" element={<ManageItem />} />
          <Route path="addJobs" element={<AddJobs />} /> */}
        </Route>
        {/* Dashboard End */}
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
