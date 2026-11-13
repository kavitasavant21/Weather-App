import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css'

const SearchBox = ({updateinfo}) => {
  let [city, setcity] = useState("");
  let [error,seterror]=useState(false);

  const API_URL="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY="8cec9289ecdb27d4e1f3281e58e9f9c2";


  let getweatherInfo=async()=>{
    try{
      let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!res.ok) {
        throw new Error("City not found");
       }
    let jsonResponse=await res.json();
    console.log(jsonResponse);
    
    let result={
      city:city,
      temp:jsonResponse.main.temp,
      tempMin:jsonResponse.main.temp_min,
       tempMax:jsonResponse.main.temp_max,
       humidity:jsonResponse.main.humidity,
       feels_like:jsonResponse.main.feels_like,
       weather:jsonResponse.weather[0].description,

    };
    console.log(result);
    return result;

    }catch(err){
     throw err;
      
    }
   
    
  }

  
  let  handlechange=(e)=>{
    setcity(e.target.value);
     seterror(false);

  }

  let handlesubmit=async(e)=>{
    try{
      e.preventDefault();
    console.log(city);
    setcity("");
    let newinfo=await getweatherInfo();
    updateinfo(newinfo);

    }catch(err){
       seterror(true);

    }
    
    

  }

 

  return (
    <div className='searchbox'>
      
        <form onSubmit={handlesubmit}>
              <TextField id="city-basic" label="city name" variant="outlined" required value={city} onChange={handlechange}/>
              <br/><br/><br/><br/>
              <Button variant="contained" type='submit'>Search</Button>
              {error && <p style={{color:"red"}}>No such place exist !</p>}

        </form>
      
    </div>
  )
}

export default SearchBox