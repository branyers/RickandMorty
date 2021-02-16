import './App.css';
import SearchBox from './components/SearchBox';
import LocationContainer from './components/LocationContainer';
import React,{useState} from 'react'

function App() {

  const [ value, setValue] = useState();




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
