import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios  from "axios";

const AddRailway = () => {
    let {userID,type, itemID} = useParams();
    const[name,setName]=useState('');
    const[arrivalTime,setArrivalTime]=useState('');
    const[depatureTime,setDepatureTime]=useState('');
    const[destination,setDestination]=useState('');
    const data={name,destination, arrivalTime,depatureTime}
    const navigate=useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/home/addRailway", data)
        .then((response) => {
            // if (response.data.success){
            //     console.log("success");
            // }else {
            //     console.log("new item");
            // }
        })
        .catch((error) => {
            console.log(error);
          });
        navigate('/Home/'+type+'/'+userID);
    }
        
        
        
    
    return (  
        <section>
        <form class='login-form' onSubmit={handleSubmit}>

        <div class="flex-row">
          <label class="lf--label" for="name">
            name
          </label>
          <input id="name" class='lf--input' placeholder='Name' type='text' value={name} onChange={e => setName(e.target.value)}/>
        </div>

        <div class="flex-row">
          <label class="lf--label" for="destination">
          Destination
          </label>
          <select value={destination}
                    onChange={(e)=> setDestination(e.target.value)}>
                    <option value="Colombo">Colombo</option>
                    <option value="Negambo">Negambo</option>
                    <option value="Galle">Galle</option>
                    <option value="Matara">Matara</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Trincomalee">Trincomalee</option>
                </select>
        </div>
        
        <div class="flex-row">
          <label class="lf--label" for="arrivalTime">
          Arrival Time
          </label>
          <input id="arrivalTime" class='lf--input' placeholder='Arrival Time' type='datetime-local' value={arrivalTime} onChange={e => setArrivalTime(e.target.value)}/>
        </div>

        <div class="flex-row">
          <label class="lf--label" for="depatureTime">
          Depature Time
          </label>
          <input id="depatureTime" class='lf--input' placeholder='Depature Time' type='datetime-local' value={depatureTime} onChange={e => setDepatureTime(e.target.value)}/>
        </div>

        
        <input class='lf--submit' type='submit' value='Add New Railway'/>
    </form>
    </section>
    );
}

export default AddRailway;