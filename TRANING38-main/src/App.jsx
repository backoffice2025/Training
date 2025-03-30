import React, { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Component/Login/login";
import Header from "./Component/Header/header";
import Categorey from "./Component/CategoreyScreen/Categorey";
import Footer from "./Component/Footer/Footer";

const categories = [
  { name: "New Joinee traning", playlistId: "PL-T7RhTUNvkLZ0u8ieaS6ZHWWfFoW1ulu" },
  { name: "Team Leader traning ", playlistId: "PL-T7RhTUNvkIOp_NhtDMpq_exArBxq7P1" },
  { name: "Team Member traning", playlistId: "PL-T7RhTUNvkKH0gSzQOQoTCD-AORD-9tO" },
  { name: "Runner traning", playlistId: "PL-T7RhTUNvkJ6Uc-DHJAVtWGBp2iHcPWZ" },
  { name: "Shop 5 traning", playlistId: "PL-T7RhTUNvkKjEqQjfw9BK3SUNF-7hDft" },
  { name: "Drinks Pickup traning", playlistId: "PL-T7RhTUNvkIpThUm4mO5z5w3qPpWa9FZ" },
  { name: "Podium traning", playlistId: "PL-T7RhTUNvkLOsRoY_FWMiQZNVoIhjRf4" },
  { name: "Hookah traning", playlistId: "PL-T7RhTUNvkKCthU1fwkjTka3eQP62hJg" },
  { name: "Guard Opening Works traning", playlistId: "PL-T7RhTUNvkL9iEiTBw5BPNcYlGhARHTr" },
  { name: "Guard Closing Works traning", playlistId: "PL-T7RhTUNvkL5n9HMVJtIAPI9Ene5kje-" },
  { name: "Food Menu traning", playlistId: "PL-T7RhTUNvkItouLyVmoqUDHMog3aaw4R" },
  { name: "Bar Menu traning", playlistId: "PL-T7RhTUNvkIZfe-B_5mILV51oaoiERoH" },
  { name: "Party Related traning", playlistId: "PL-T7RhTUNvkIpdmyuw2Qx81v35W_WV_pc" },
  { name: "Sales & Marketing traning", playlistId: "PL-T7RhTUNvkJCbZ41A3VYPAmDGpXsBBph" },
  { name: "Breefing Videos traning", playlistId: "PL-T7RhTUNvkLGrK5-8KKBDSotW6XsX4uZ" },
  { name: "Recipe Indian traning", playlistId: "PL-T7RhTUNvkK6dtQle3YV-eWOOid7C_bd" },
  { name: "Recipe Chinese traning", playlistId: "PL-T7RhTUNvkJrLi3g4aJM_EE23aUC9zGE" },
  { name: "Recipe Tandoor traning", playlistId: "PL-T7RhTUNvkJ8YMufSs81DiND55K6pmEF" },
  { name: "Recipe Conti traning", playlistId: "PL-T7RhTUNvkJy7IrZMY5tMO3_higxn6UN" },
];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  const exitApp = () => {
    alert("Exiting the application.");
    window.close();
  };

  return (
    <div className="app">
      <Header />
      <ToastContainer /> {/* ToastContainer placed here for global toast notifications */}
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Categorey categories={categories} onExit={exitApp} />
      )}
      <Footer/>
    </div>
    
  );
};

export default App;