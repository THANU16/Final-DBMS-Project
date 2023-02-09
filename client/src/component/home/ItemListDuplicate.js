import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import './create.css';

const ItemListDuplicate= (props) => {
    const items=props.items;
    const userID = props.userID;
    const type = props.type;
    const[maxTransferWeight,setMaxTransferWeight]=useState('');
    const [itemId, setItemId] = useState('');

    const data = {itemId: itemId, maxTransferWeight: maxTransferWeight}


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(maxTransferWeight)
        console.log(data.itemId);
        axios.post('http://localhost:4000/home/insertMaxTransferWeight',data )
        .then(res => {
          console.log(res.data.message);
        //   Navigate('/Home/'+type+'/'+userID+'/FixMaxTransferWeight');
          
        })
        .catch(err => {
          console.error(err);
        });
        
    }; 

    


    return (  
        <div className="item-preview" >
            {/* <h2>{maxTrasferWeight}</h2> */}
            {items.map((item)=>(
            <div className="createnew" key={item.id}>
                <h2>{item.name}</h2>
                <p>Price is Rs. {item.unitprice}</p>
                <p>Available quantity is {item.stockavailability}</p>
                <form class='login-form' onSubmit={handleSubmit} >
                    <label><center>Fill Maximum Trasfer Weight: </center></label>
                    <input
                    type="number"
                    required
                    value={maxTransferWeight}
                    onChange={(e)=> setMaxTransferWeight(e.target.value)}
                    />
                    
                    {/* <input class='lf--submit' type='submit' value='Fix Value'/> */}
                    <button onClick={(e)=> setItemId(item.itemID)} >Fix Value</button>
                </form>
               
                
            </div>
        ))}
        </div>

        
    );
}
 
export default ItemListDuplicate;