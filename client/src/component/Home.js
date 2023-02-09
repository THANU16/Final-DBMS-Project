import ItemDisplay from "./home/ItemDisplay";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./home/Navbar";
import { useParams } from "react-router-dom";




function Home(){
    const    [items, setItems] = useState([]);
    let {userID,type } = useParams();
    
    
    useEffect(()=>{
     
        axios.get("http://localhost:4000/home/items")
        .then((response)=>{
          setItems(response.data);
        })
      },[]);
    

    return ( 
        <div className="App">
          <nav>
          <Navbar userID={userID} type = {type}/>
          </nav>
            <ItemDisplay items={items} userID = {userID} type = {type}/>
    </div>

        // <div className="MainPage">
        //     {/* <h1>hi</h1> */}
        //     {/* <h1>items.name</h1> */}
        //    <ItemDisplay items={items}></ItemDisplay>
           

        // </div>
    );
}


export default Home;