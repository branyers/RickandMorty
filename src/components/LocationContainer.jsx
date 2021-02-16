import React, { useState, useEffect } from 'react'
import getAPI from "../Service/getAPI"
import AuxComponent from "./AuxComponents"

const LocationContainer = ({ value }) => {

    const [name, setName] = useState()
    const [type, setType] = useState()
    const [dimension, setDimension] = useState()
    const [residents, setResidents] = useState([])
    const [hasError, setHaserror] = useState(false)




    const poblateState = (data) => {
        if (data.error) {
            setHaserror(true)
        } else {
            setName(data.name)
            setType(data.type)
            setDimension(data.dimension)
            getUrlResidents(data)

        }

    }

    const getUrlResidents = (data) => {
        const AllResidents = [...data.residents]
        const arrResidents = AllResidents.slice(0, 10)
        setResidents(arrResidents)

    }


    
    useEffect(async () => {

        if(value){
            getAPI().then((data) => {
            for(let i = 0; i<data.results.length; i++){
                if(data.results[i].name == value){
                    poblateState(data.results[i])
                }

            }
               
    
            })
        }
       

    }, [value])




  






    return (
        <div>
            <AuxComponent hasError={hasError} name={name} dimension={dimension} type={type} residents={residents} />
        </div>
    )


}

export default LocationContainer
