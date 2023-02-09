// display the list of items

import './button.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const ItemDisplay= (props) => {
    // const {items, userID, type} =props;
    const items =props.items;
    const userID = props.userID;
    const type = props.type;
   
    
    const navigate = useNavigate ();
    

      
    
    return (  
        <div className="item-list">
            {/* <h2>{name}</h2> */}
            
            {items.map((item)=>( 
                // <h1>Hello</h1>
                <div className="item-preview" key={item.id}>
                    <Link to={`/Home/`+type +`/`+userID+`/BuyItems/${item.itemID}`}>
                    <button className='button'>
                    <h2>{item.name}</h2>
                    <p>Price is Rs. {item.unitprice}</p>
                    <p>Available quantity is {item.stockavailability}</p>
                    </button>
                    </Link>    
                </div>
            ))}
        </div>
    );
}
 
export default ItemDisplay;