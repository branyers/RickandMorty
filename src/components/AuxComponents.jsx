import ResidentContainer from "./ResidentContainer"
import LocationInfo from "./LocationInfo"
const AuxComponet = ({ residents, hasError, name, dimension, type }) => {

    return (
        <>
            <ResidentContainer Residents={residents} />
            <LocationInfo name={name} dimesion={dimension} type={type} />
        </>
    )

}

export default AuxComponet