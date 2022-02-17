import React,{useState, useEffect} from "react";
import { Chart as ChartJS, LineElement, CategoryScale,LinearScale, PointElement } from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

const LineChart = ()=>{

    const [chart, setChart] = useState([])

    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10"
    // var proxyUrl = 'http://localhost:3000/'
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    var apikey = "coinranking7ed4e1f315a27dc063016b2d29d4bcc12d2d17ce153f3add"

    // useEffect(()=>{
    //     const fetchCoins = async()=>{
    //         let res = await axios({
    //             method: "GET",
    //             url: `${proxyUrl}${baseUrl}`,
    //             headers:{
    //                 'Content-Type': 'application/json',
    //                 'x-access-token':'coinranking7ed4e1f315a27dc063016b2d29d4bcc12d2d17ce153f3add',
    //                 'Access-Control-Allow-Origin':'*'
    //             }

    //         });
    //         console.log(res)

    //     }
    //     fetchCoins()
    // },[])
    
    useEffect(()=>{
        const fetchCoins = async()=>{
            await fetch(`${proxyUrl}${baseUrl}`,{
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'x-access-token':`${apikey}`,
                    'Access-Control-Allow-Origin':'*'
                }
            }).then((response)=>{
                response.json().then((json)=>{
                    console.log(json)
                    setChart(json.data)
                })
            }).catch(error=>{
                console.log(error);
            })
        }
        fetchCoins()
    },[baseUrl,proxyUrl,apikey])
    
    var data = {
        labels: chart?.coins?.map(x => x.name),
        datasets: [{
            label:`${chart?.coins?.length} Coins available`,
            data: chart?.coins?.map(x => x.price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    var options= {
        maintainAspectRatio: false,
       legend:{
           labels:{
               fontSize: 26
           }
       }
    }
    return(
        <div>
            <Line
            data= {data}
            options={options}
            height={400}/>
        </div>
    )
}
export default LineChart;