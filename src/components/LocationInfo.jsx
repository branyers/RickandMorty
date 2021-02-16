import React from 'react'

const LocationInfo = ({name,dimesion,type}) => {
    return (
        <div className="info-container">
            <p>{name}</p>
            <p>{dimesion}</p>
            <p>{type}</p>
        </div>
    )
}

export default LocationInfo
