import React, {useState, useEffect} from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

const PersonPage = ({match})=>{
    // const {
    //     params: {personId},
    // } = match;
    const { personId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const[data, setData] = useState();

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${personId}`, {})
          .then((res) => res.json())
          .then((response) => {
            setData(response);
            setIsLoading(false);
            console.log(`https://swapi.dev/api/people/${personId}`)
          })
          .catch((error) => console.log(error));
      }, [personId]);
    return(
        <div>
            {!isLoading && (
        <>
          <h1>Name: {data.name}</h1>
          <h2>Height: {data.height}</h2>
          <h2>Mass: {data.mass}</h2>
          <h2>Hair Color: {data.hair_color}</h2>
          <h2>Skin Color: {data.skin_color}</h2>
          <h2>Eye Color: {data.eye_color}</h2>
          <h2>Birth Year: {data.birth_year}</h2>
          <h2>Gender: {data.gender}</h2>
          <Link to="/">Back to homepage</Link>
          </>
            )}
        </div>
    );
};
export default PersonPage;