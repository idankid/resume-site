import { useEffect, useState } from 'react'
import idan from "./assets/idan-png.png"
import './App.css'
import { Carousel } from './components/Carousel/Carousel'
import { CarouselCard } from './components/CarouselCard/CarouselCard'
import { SubSection } from './components/subSection/SubSection'
import { setNumber } from './redux/carousel.Slice'
import { useDispatch } from 'react-redux'
import { NavMenu } from './components/navigation/NavMenu'

function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0)

  useEffect(()=>{
    dispatch(setNumber(count));
  },[count])
    

  return (
    <div className='main-container'>
      <div onClick={()=>setCount(prev=>prev+5)} className='main-Title'>
        Welcome to Kideckel.com
      </div>
      <NavMenu/>
      <Carousel spacing="28vw" items={[ 
        <CarouselCard title='title1' info={[<SubSection/>, <SubSection/>]}/>, 
        <CarouselCard title='title2' info={[<SubSection/>, <SubSection/>]}/>, 
        <CarouselCard title='title3' info={[<SubSection/>, <SubSection/>]}/>, 
        <CarouselCard title='title4' info={[<SubSection/>, <SubSection/>]}/>, 
        <CarouselCard title='title5' info={[<SubSection/>, <SubSection/>]}/>, 
        <CarouselCard title='title6' info={[<SubSection/>, <SubSection/>]}/>, 
        <CarouselCard title='title7' info={[<SubSection/>, <SubSection/>]}/>, 
        ]}/>
      <img className='main-image' src={idan}/>
    </div>
  )
}

export default App
