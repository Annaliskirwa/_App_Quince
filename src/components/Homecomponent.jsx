import React, {useState, useEffect} from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

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
                // return <h5 key = {index}>{person.name}</h5>;
                return(
                    <h5 key = {index}>
                        <Link to = {`/person/${index + 1}`}>{person.name}'s Page</Link>
                    </h5>
                )
            })}
            {/* {!isLoading && data.map((actor,index)=>{
               return <h5 key = {index}>{actor.name}</h5>
            })} */}
            <Link to = "/charts">Check out charts</Link>
        </div>
    )
};
export default Homepage;

