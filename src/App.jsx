import { useState } from 'react'
import idan from "./assets/idan-png.png"
import './App.css'
import { Carousel } from './components/Carousel/Carousel'
import { CarouselCard } from './components/CarouselCard/CarouselCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-container'>
        Welcome to Kideckel.com
      </div>
      <div><div>scad</div><div>dsads</div></div>
      <Carousel spacing={350} items={[ 
        <CarouselCard/>, 
        <CarouselCard/>, 
        <CarouselCard/>, 
        <CarouselCard/>, 
        <CarouselCard/>, 
        <CarouselCard/>, 
        <CarouselCard/>, 
        <CarouselCard/>, 
        <CarouselCard/>
        ]}/>
      <img className='main-image' src={idan}/>
    </>
  )
}

export default App
