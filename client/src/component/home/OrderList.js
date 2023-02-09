// import {Link} from 'react-router-dom';
const OrderList= (props) => {
    const {orders}=props;
    // back end sql query 
    // select name from item where itemID in( select itemID from orders inner join ordered_items where itemID="IT001");
    return (  
        <div className="order-list">
        {orders.map((order)=>(
            <div className="createnew" key={order.id}>
                <h2>Your Order Details is:</h2>
                <h2>Hello {order.customerName}</h2>
                <p>Ordered Item : {order.name}</p>
                <p>The stocks ordered is {order.quantity}</p>
                <p>Payment amount is Rs.{order.totalPrice}</p>
                {/* <p>Ordered Date {order.ordereddate}</p> */}
                <p>Delivery Address is:</p>
                <p>{order.houseNumber},</p>
                <p>{order.streetName},</p>
                <p>{order.town},</p>
                <p>{order.district}</p>
                <h5>OrderStatus is {order.orderstatus}</h5>
                

                
            </div>
        ))}
        </div>
    );
}
 
export default OrderList;