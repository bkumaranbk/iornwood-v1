import React, { useState, useEffect } from 'react';
import axios from 'axios';


import SimpleCarousel from "../component/Slide"

import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.mjs';
import HomeHeading from '../component/HomeHeading';


 
const Home = () => {


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

const restaurantSlidesData = separatedData.Restaurants || [];
const happySlidesData = separatedData['Happy-Hours'] || [];
const foodSlidesData = separatedData['Food-Shops'] || [];
const rentelSlidesData = separatedData.Rentals || [];
const spaSlidesData = separatedData.Spa || [];
const skiliftSlidesData =separatedData.SkiLifts || [];


  return (
    <div>
    <HomeHeading/>
    <div className='w-full flex-row justify-center bg-gray-100 p-4 mb-14'>
    <SimpleCarousel title="Restaurants" slides = {restaurantSlidesData}/>
    <SimpleCarousel title="Happy Hours" slides = {happySlidesData}/>
    <SimpleCarousel title="Food Shops" slides = {foodSlidesData}/>
    <SimpleCarousel title="Rentels" slides = {rentelSlidesData}/>
    <SimpleCarousel title="Spa" slides = {spaSlidesData}/>
    <SimpleCarousel title="Skilifts" slides = {skiliftSlidesData}/>

    </div>
    
    </div>
  );
}

export default Home;
