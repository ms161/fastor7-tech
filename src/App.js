import "./App.css";
import StartingPage from "./Components/StartingPage";
import { Routes, Route } from "react-router-dom";
import OtpVerification from "./Components/OtpVerification";
import HomePage from "./Components/HomePage";
import RestaurantDetails from "./Components/RestaurantDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<StartingPage />} />
        <Route path="/verification" element={<OtpVerification />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
        {/* <Route path="/login" element={<LoginPage></LoginPage>}/> */}

      </Routes>
    </div>
  );
}

export default App;
