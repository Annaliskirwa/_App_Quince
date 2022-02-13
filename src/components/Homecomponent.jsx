import React, {useState, useEffect} from "react";

const Homepage = ()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(()=>{
        fetch("https://swapi.dev/api/people/",{})
        .then((res)=>res.json())
        .then((response)=>{
            setData(response.results);
            console.log(response.results)
            setIsLoading(false);
        })
        .catch((error)=>console.log(error));
    },[]);
    
    return (
        <div>
            <h1>This is the Homepage</h1>
        </div>
    )
};
export default Homepage;

