// import ItemDisplay from "../home/ItemDisplay";
// import axios from "axios";
// import { useEffect, useState } from "react";
// // import Navbar from "../home/Navbar";
// import { useParams } from "react-router-dom";
// import NavbarCustomer from "./NavbarCustomer";




// function HomeCustomer(){
//     const    [items, setItems] = useState([]);
//     let {userID,type } = useParams();
    
    
//     useEffect(()=>{
     
//         axios.get("http://localhost:4000/home/items")
//         .then((response)=>{
//           setItems(response.data);
//         })
//       },[]);
    

//     return ( 
//         <div className="App">
//           <nav>
//             {/* <Navbar userID={userID} type = {type}/> */}
//             <NavbarCustomer userID={userID} type = {type}/>
//           </nav>
//             <ItemDisplay items={items} userID = {userID} type = {type}/>
//     </div>
//     );
// }


// export default HomeCustomer;

import ItemDisplay from "../home/ItemDisplay";
import axios from "axios";
import { useEffect, useState } from "react";
// import Navbar from "../home/Navbar";
import { useParams } from "react-router-dom";
import NavbarCustomer from "./NavbarCustomer";




function HomeCustomer(){
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
            {/* <Navbar userID={userID} type = {type}/> */}
            <NavbarCustomer userID={userID} type = {type}/>
          </nav>
            <ItemDisplay items={items} userID = {userID} type = {type}/>
    </div>
    );
}


export default HomeCustomer;