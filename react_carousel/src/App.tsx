import { useEffect, useState } from 'react'
import './App.css'
import Carousel from './Carousel/Carousel';

function App() {
  const [restaurantList,setRestaurantList] = useState([]);
  useEffect(() => {
    const fetchRestaurants =  async () => {
      try{
        const res = await fetch("http://localhost:5000/restaurants");
        const data = await res.json();
        setRestaurantList(data);
      }
      catch (err) {
        console.error("Error fetching:", err);
      }
    }
    fetchRestaurants();
  }, []);

  return (
    <>
      <h1>Welcome to My Carousel</h1>
      <Carousel itemsList={restaurantList}/>
    </>
  )
}

export default App
