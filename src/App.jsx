import React, { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Component/Login/login";
import Header from "./Component/Header/header";
import Category from "./Component/CategoreyScreen/Categorey"; // Fixed spelling
import Footer from "./Component/Footer/Footer";

// Define categories with their respective training videos
const categories = {
  service: [
    { name: "New Joinee training", playlistId: "PL-T7RhTUNvkLZ0u8ieaS6ZHWWfFoW1ulu" },
    { name: "Team Leader training", playlistId: "PL-T7RhTUNvkIOp_NhtDMpq_exArBxq7P1" },
    { name: "Team Member training", playlistId: "PL-T7RhTUNvkKH0gSzQOQoTCD-AORD-9tO" },
    { name: "Runner training", playlistId: "PL-T7RhTUNvkJ6Uc-DHJAVtWGBp2iHcPWZ" },
    { name: "Shop 1 training", playlistId: "PL-T7RhTUNvkKjEqQjfw9BK3SUNF-7hDft" },
    { name: "Drinks Pickup training", playlistId: "PL-T7RhTUNvkIpThUm4mO5z5w3qPpWa9FZ" },
    { name: "Podium training", playlistId: "PL-T7RhTUNvkLOsRoY_FWMiQZNVoIhjRf4" },
    { name: "Hookah training", playlistId: "PL-T7RhTUNvkKCthU1fwkjTka3eQP62hJg" }
  ],
  guard: [
    { name: "Guard Opening Works training", playlistId: "PL-T7RhTUNvkL9iEiTBw5BPNcYlGhARHTr" },
    { name: "Guard Closing Works training", playlistId: "PL-T7RhTUNvkL5n9HMVJtIAPI9Ene5kje-" }
  ],
  recipe: [
    { name: "Recipe Indian training", playlistId: "PL-T7RhTUNvkK6dtQle3YV-eWOOid7C_bd" },
    { name: "Recipe Chinese training", playlistId: "PL-T7RhTUNvkJrLi3g4aJM_EE23aUC9zGE" },
    { name: "Recipe Tandoor training", playlistId: "PL-T7RhTUNvkJ8YMufSs81DiND55K6pmEF" },
    { name: "Recipe Conti training", playlistId: "PL-T7RhTUNvkJy7IrZMY5tMO3_higxn6UN" }
  ],
  townHall: [
    { name: "Town Hall Meeting 1", playlistId: "PL-T7RhTUNvkK6dtQle3YV-eWOOid7C_bd" },
    { name: "Town Hall Meeting 2", playlistId: "PL-T7RhTUNvkJrLi3g4aJM_EE23aUC9zGE" }
  ]
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  const exitApp = () => {
    setIsLoggedIn(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app">
      <Header />
      <ToastContainer />
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          {!selectedCategory ? (
            <div className="category-selection">
              <h2>Select Training Category</h2>
              <div className="category-buttons">
                <button onClick={() => handleCategorySelect('service')}>Service Training</button>
                <button onClick={() => handleCategorySelect('guard')}>Guard Training</button>
                <button onClick={() => handleCategorySelect('recipe')}>Recipe Training</button>
                <button onClick={() => handleCategorySelect('townHall')}>Town Hall</button>
                <button onClick={exitApp} className="logout-btn">Logout</button>
              </div>
            </div>
          ) : (
            <Category 
              categories={categories[selectedCategory]} 
              onExit={() => setSelectedCategory(null)}
              categoryName={selectedCategory}
            />
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;