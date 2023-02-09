import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios  from "axios";

const ManageDrives = () => {
    let {userID,type } = useParams();
    const [detail, setDetail]= useState([]);
    const[isAvailable ,setIsAvailable]=useState('');
    // console.log(userID,type);
    
    const data={userID,type,isAvailable}
    const navigate=useNavigate();

    const handleChange = (event) => {
        setIsAvailable(event.target.checked);
      };

    useEffect(()=>{

        axios.post("http://localhost:4000/home/manageDrives", data)
        .then((response) => {
            // console.log(response.data)
            setDetail(response.data[0]);
            
        })
        .catch((error)=> {
            console.log(error);
        })

    },[]);

  
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        axios.post( "http://localhost:4000/home/manageDrivesUpdate", data)
        .then((response) => {
         console.log(response.data.message);
        })
        .catch((error) => {
            console.log(error);
          });
        // navigate('/Home')
    }
        
        
        
    
    return (  
        <section>
        <p> Welcome </p>
        <h2> Hello, {detail.lastName} {detail.firstName}</h2>
        <p> Consecutive Drives : {detail.consecutiveDrives}</p>
        <p> Weekly Hours Drive : {detail.weeklyHours}</p>

        <form class='login-form' onSubmit={handleSubmit}>

        <div class="flex-row">
          <label for="isAvailable">
            Is Available?
          </label>
          <select required value={isAvailable}
                    onChange={(e)=> setIsAvailable(e.target.value)}>
                        <option > none </option>
                        <option value="0">I'm not Available</option>
                        <option value="1">I'm Available</option>
                      
                     
                </select>
          {/* <input id="isAvailable" class='lf--input' placeholder='Is Available?' type='checkbox' required value={isAvailable} onChange={handleChange}/> */}
        </div>
      
        
        <input class='lf--submit' type='submit' value='Done'/>
    </form>
    </section>
    );
}

export default ManageDrives;