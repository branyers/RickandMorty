import './App.css';
import SearchBox from './components/SearchBox';
import LocationContainer from './components/LocationContainer';
import React,{useState,useEffect} from 'react'

function App() {

  const [ value, setValue] = useState();

  const planet = [
  "Purge Planet,"
  ,"Venzenulon 7"
  ,"Bepis 9",
  "Cronenberg Earth"
  ,"Nuptia 4",
  "Giant's Town",
  "Bird World",
  "St. Gloopy Noops Hospital",
  "Earth (5-126",
  "Mr. Goldenfold's dream",
  "Gromflom Prime",
  "Earth (Replacement Dimension)",
  "Anatomy Park"
]

  useEffect(() => {
    const stringThis = Math.floor(Math.random() * planet.length)
  
    setTimeout(() => {
      setValue(planet[stringThis])
    }, 500)
  },[])



  const Search = (e) => {
    e.preventDefault()
    setValue(e.target.elements[0].value)
  }






  return (
    <>
    <SearchBox Onsubmit={Search}/>
    <LocationContainer value={value}/>
    </>
  );
}

export default App;
