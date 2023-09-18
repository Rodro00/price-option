
import { LineChart } from 'recharts'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/DaisyNav/NavBar/NavBar'
import PriceOption from './components/Price-Option/PriceOption'
import LChart from './components/LineChart/LChart'
import Phones from './components/Phones/Phones'

function App() {


  return (
    <>
    <NavBar></NavBar>
    <PriceOption></PriceOption>
   <LChart></LChart>
   <Phones></Phones>
      
    </>
  )
}

export default App
