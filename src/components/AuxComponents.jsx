import ResidentContainer from "./ResidentContainer"
import LocationInfo from "./LocationInfo"
const AuxComponet = ({ residents, name, dimension, type }) => {

    return (
        <>
            <LocationInfo name={name} dimesion={dimension} type={type} />
            <ResidentContainer Residents={residents} />
            
        </>
    )

}

export default AuxComponet