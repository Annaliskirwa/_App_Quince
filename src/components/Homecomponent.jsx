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
            })
            .catch((error) => console.log(error));
            var response = res.data.results
            setData(response)
            setIsLoading(false);
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
            <h1>Star wars actors names</h1>
            {!isLoading && data.map((person,index)=>{
                return <h5 key = {index}>{person.name}</h5>;
            })}
            {/* {!isLoading && data.map((actor,index)=>{
               return <h5 key = {index}>{actor.name}</h5>
            })} */}
        </div>
    )
};
export default Homepage;

