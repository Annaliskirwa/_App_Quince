import React, {useState, useEffect} from "react";

const Homepage = ()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const axios = require('axios');

    useEffect(()=>{
        const fetchActors = async()=>{
            let res = await axios({
                method: "GET",
                url: "https://swapi.dev/api/people/"
            });
            var response = res.data.results
            setData(response)
            console.log(response)

        }
        fetchActors()
        // fetch("https://swapi.dev/api/people/",{})
        // .then((res)=>res.json())
        // .then((response)=>{
        //     setData(response.results);
        //     console.log(response.results)
        //     setIsLoading(false);
        // })
        // .catch((error)=>console.log(error));
    },[]);
    
    return (
        <div>
            <h1>This is the Homepage</h1>
        </div>
    )
};
export default Homepage;

