import './App.css';
import ResidentInfo from './components/ResidentInfo';
import SearchBox from './components/SearchBox';
import LocationContainer from './components/LocationContainer';
import React,{useState, useEffect} from 'react'

function App() {

  const [ id, setId ] = useState();
  const [ value, setValue] = useState();

  
  useEffect(() => {
    const RandomId = Math.floor(Math.random() * 108)
    RandomId.toString()
      setId(RandomId)
  },[])


  const Search = (e) => {
    e.preventDefault()
    setValue(e.target.elements[0].value)
  }



  useEffect(() => {
      setId(value)
  }, [value])





  return (
    <>
    <SearchBox Onsubmit={Search}/>
    <LocationContainer id={id}/>
    </>
  );
}

export default App;
