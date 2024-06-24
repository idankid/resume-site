import { useState } from 'react'
import idan from "./assets/idan-png.png"
import './App.css'
import { Carousel } from './components/Carousel/Carousel'
import { CarouselCard } from './components/CarouselCard/CarouselCard'
import { SubSection } from './components/subSection/SubSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <div className='main-Title'>
        Welcome to Kideckel.com
      </div>
      <Carousel spacing="28vw" items={[ 
        <CarouselCard title='title' info={[<SubSection/>, <SubSection/>]}/>, 
        <CarouselCard title='title' info={[<SubSection/>, <SubSection/>]}/>, 
        <CarouselCard title='title' info={[<SubSection/>, <SubSection/>]}/>, 
        <CarouselCard title='title' info={[<SubSection/>, <SubSection/>]}/>, 
        <CarouselCard title='title' info={[<SubSection/>, <SubSection/>]}/>, 
        <CarouselCard title='title' info={[<SubSection/>, <SubSection/>]}/>, 
        <CarouselCard title='title' info={[<SubSection/>, <SubSection/>]}/>, 
        ]}/>
      <img className='main-image' src={idan}/>
    </div>
  )
}

export default App
