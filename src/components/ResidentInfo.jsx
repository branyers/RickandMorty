import React from 'react'



const ResidentInfo = ({residents}) => {
    const {name, image, status, species , origin,type} = residents

    return (
            <div className="col s3">
                <div className="card" id='rick-and-morty'>
                    <h5>{name}</h5>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={image} />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4" >{type}</span>
                        <span className="card-title activator grey-text text-darken-4" ></span>
                        <p></p>
   
                             <p id="species">Species: {species}</p>
                             <p id="species">Status: {status}</p>
                            <p id="species">Episodios: {residents.episode.length}</p>
                            <p id="species">Origin: {origin.name}</p>
                           

                    </div>
                </div>
            </div>

    )
}

export default ResidentInfo
