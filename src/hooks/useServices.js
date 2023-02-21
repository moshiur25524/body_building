import { useEffect, useState } from "react"

const useServices = () =>{
    const [services, setServices] = useState([])

    useEffect(()=>{
<<<<<<< HEAD
        fetch('./FakeData/ServicesData.json')
=======
        fetch('./ServicesData.json')
>>>>>>> ee2848acf2739da389fbf93e1f3246768d3a0cb3
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])

    return [services, setServices]
}

export default useServices;