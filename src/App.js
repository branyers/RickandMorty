import './App.css';
import ResidentInfo from './components/ResidentInfo';
import SearchBox from './components/SearchBox';
import LocationContainer from './components/LocationContainer';
import React,{useState, useEffect} from 'react'

function App() {

  const [ id, setId ] = useState();
  const [ searchValue, setSearchValue] = useState();

  //Llamado random
  useEffect(() => {
    const stringThis = Math.floor(Math.random() * 108)
    stringThis.toString()
      setId(stringThis)
  },[])

  //Handlers para el SearchBox, así le asignamos el id a la URL
  const settingSearchValue = (e) => {
    e.preventDefault()
    setSearchValue(e.target.elements[0].value)
  }

  //Side Effect del ID
  useEffect(() => {
      setId(searchValue)
  }, [searchValue])





  return (
    <>
    <SearchBox Onsubmit={settingSearchValue}/>
    <LocationContainer id={id}/>
    </>
  );
}

export default App;
