import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";
import { useEffect } from "react";

function App() {
const foods = [
  {
    id: 1,
    name: "Pizza",
    price: 250,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    id: 2,
    name: "Burger",
    price: 150,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: 3,
    name: "Pasta",
    price: 200,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
  },
  {
    id: 4,
    name: "Sandwich",
    price: 100,
    image: "https://images.unsplash.com/photo-1528731708534-816fe59f90cb",
  },
  {
    id: 5,
    name: "French Fries",
    price: 120,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5",
  },
  {
    id: 6,
    name: "Cold Coffee",
    price: 180,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 7,
    name: "Momos",
    price: 130,
    image: "https://images.unsplash.com/photo-1604908176997-4310f7b9e3c6",
  },
  {
    id: 8,
    name: "Noodles",
    price: 160,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
  },
  {
    id: 9,
    name: "Ice Cream",
    price: 90,
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625",
  },
  {
    id: 10,
    name: "Chocolate Cake",
    price: 220,
    image: "https://images.unsplash.com/photo-1605478371317-3e8c8e7f6f16",
  },
];

  useEffect(() => {
    console.log("App loaded");
  }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<FoodList foods={foods} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;