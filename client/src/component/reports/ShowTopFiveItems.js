import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Reports from './Reports';

const ShowTopFiveItems= () => {
    let {userID,type } = useParams();
    const [items, setItems] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:4000/home/reports/showTopFiveItems")
        .then((res) => {
            setItems(res.data);
        })
    })
    






    // back end sql query 
    // select name from item where itemID in( select itemID from orders inner join ordered_items where itemID="IT001");
    return ( 
       
        // <div >
        //     <table id="orders">
        //         <thead>
        //             <tr>
        //             <th>Customer Name</th>
        //             <th>Item</th>
        //             <th >quantity</th>
        //             <th >totalPrice</th>
        //             <th >District</th>
        //             <th >Ordered Date</th>
        //             <th >Order Status</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //     {orders.map((order)=>(
        //         <div  key={order.id}>
                    
        //                 <tr>
        //                 <td>{order.customerName}</td>
        //                 <td>{order.name}</td>
        //                 <td>{order.quantity}</td>
        //                 <td>{order.totalPrice}</td>
        //                 <td>{order.district}</td>
        //                 <td>{order.ordereddate}</td>
        //                 <td>{order.orderstatus}</td>
                        
        //                 </tr>
                
        //         </div>
        //     ))}
        //     </tbody>
        //     </table>
        // </div>







        <div className="order-list">
            <nav>
          <Reports userID={userID} type = {type}/>
          </nav>
            {items.map((item)=>( 
                // <h1>Hello</h1>
                <div className="item-preview" key={item.id}>
                    <Link to={`/Home/`+type +`/`+userID+`/BuyItems/${item.itemID}`}>
                    <button className='button'>
                    <h2>{item.name}</h2>
                    <h3> No Of Orders : {item.noOfOrders} </h3>
                    <p>Price is Rs. {item.unitprice}</p>
                    <p>Available quantity is {item.stockavailability}</p>
                    </button>
                    </Link>    
                </div>
            ))}
            </div>
    );
}
 
export default ShowTopFiveItems;