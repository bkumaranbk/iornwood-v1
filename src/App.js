import './App.css';
import AppBar from "./component/AppBar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "./component/Footer";
import Home from './page/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Restaurant from './page/Restaurant';
import Happy from './page/Happy';
import Food from './page/Food';
import Rentel from './page/Rentel';
import Spa from './page/Spa';
import Skilift from './page/Skilift';
import Card from './component/Card';
import CustomLanguageSwitcher from './CustomLanguageSwitcher';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [separatedData, setSeparatedData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/place/allPlace');

      // Separate the data by type
      const separated = response.data.reduce((acc, item) => {
        const type = item.Type;
        if (!acc[type]) {
          acc[type] = [];
        }
        acc[type].push(item);
        return acc;
      }, {});

      setData(response.data);
      setSeparatedData(separated);
      console.log(response.data);
      console.log(separated);

    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Default to empty array if the type is not present
  const restaurantData = separatedData.Restaurants || [];
  const happyData = separatedData['Happy-Hours'] || [];
  const foodData = separatedData['Food-Shops'] || [];
  const rentelData = separatedData.Rentals || [];
  const spaData = separatedData.Spa || [];
  const skiliftData = separatedData.SkiLifts || [];

  return (
    <Router>
        
        <AppBar />
        <CustomLanguageSwitcher />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Restaurants" element={<Card title="Restaurants" cards={restaurantData} />} />
          <Route path="/Happy-Hours" element={<Card title="Happy Hours" cards={happyData} />} />
          <Route path="/Food-Shops" element={<Card title="Food Shops" cards={foodData} />} />
          <Route path="/Rentals" element={<Card title="Rentals" cards={rentelData} />} />
          <Route path="/Spa" element={<Card title="Spa" cards={spaData} />} />
          <Route path="/SkiLifts" element={<Card title="Ski Lifts" cards={skiliftData} />} />
          <Route path="place/:_id" element={<Restaurant />} />
          <Route path="/Happy" element={<Happy/>} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Rentel" element={<Rentel />} />
          <Route path="/Spa-view" element={<Spa />} />
          <Route path="/Skilift" element={<Skilift />} />
        </Routes>
        
        <Footer />
    </Router>
  );
}

export default App;
