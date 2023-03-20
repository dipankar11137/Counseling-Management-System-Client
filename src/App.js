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
import AddSlots from "./Components/Pages/Dashboard/AddSlots";
import MyProfile from "./Components/Pages/Dashboard/Profile/MyProfile";
import ManageCounselings from "./Components/Pages/Dashboard/ManageCounseling/ManageCounselings";
import MyApplieds from "./Components/Pages/Dashboard/My Applied/MyApplieds";

function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
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
          <Route index element={<MyProfile />} />
          <Route path="addSlot" element={<AddSlots />} />
          <Route path="manageCounseling" element={<ManageCounselings />} />
          <Route path="myApplied" element={<MyApplieds />} />
        </Route>
        {/* Dashboard End */}
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
