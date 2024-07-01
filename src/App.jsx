import { useEffect, useState } from 'react'
import idan from "./assets/idan-png.png"
import './App.css'
import { Carousel } from './components/Carousel/Carousel'
import { CarouselCard } from './components/CarouselCard/CarouselCard'
import { SubSection } from './components/subSection/SubSection'
import { NavMenu } from './components/navigation/NavMenu'
import { Experience } from './info/experience/Experience'
import { About } from './info/about/About'
import { useSelector } from 'react-redux'

function App() {
  const [spacing, setSpacing] = useState("23vw")

  const {cards} = useSelector((state)=>state.carousel)

  useEffect(()=>{
    console.log(window.innerWidth)
    window.innerWidth > 760 ? setSpacing("23vw") : setSpacing("80vw")
  },[window])
    

  return (
    <div className='main-container'>
      <div className='main-title'>
        Welcome to Idan Kideckel's Resume Site
      </div>
      <NavMenu/>
      <Carousel spacing={spacing} items={cards.map((item, ind)=><item.value key={`main-card-${ind}`}/>)}/>
      <img className='main-image' src={idan}/>
    </div>
  )
}

export default App
