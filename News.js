import {useState}from "react";
import axios from "axios";
import Result from "./Result";


function News()
{
        const[info,setInfo]=useState([]);
        const[country,setCountry]=useState("US");

        const hCountry=(event)=>{setCountry(event.target.value);}
 
        const gn=(event)=>{
              event.preventDefault();
              let a1="https://newsapi.org/v2/top-headlines";
              let a2="?country="+country;
              let a3="&apiKey=cecacf50ab1745b1b9ce65d0390323f3";
              let url=a1+a2+a3;
              alert(url);
              axios.get(url)
              .then(res=>setInfo(res.data.articles))
              .catch(err=>console.log("issue"+err));
 }

return(
<>
<center>
       <h1> World News App by Manasvi</h1>
       <form onSubmit={gn}>

              <label htmlFor="co">Select Country</label>
              <select id="co"onChange={hCountry}>
                    <option value="US">US</option>
                    <option value="GB">UK</option>
                    <option value="in">INDIA</option>
              </select>
              <br/><br/>

             <input type="submit" value="Get News"/>
       </form>
       {
               info.map((e)=>(
                         <>
                             <Result title={e.title}  url={e.url}
                   publishedAt={e.publishedAt} author={e.author}/>
                         </>
            ))
     }
</center>
</>
);
}
export default News;