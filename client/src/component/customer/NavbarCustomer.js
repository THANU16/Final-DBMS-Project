import {BrowserRouter as  Link} from 'react-router-dom';
import '../home/button.css';
import '../home/navbar.css';
function NavbarCustomer(props){
  const userID = props.userID;
  const type = props.type;

    return ( 
      
       <nav className='item-preview '>
        <ul>
          <li>
            <a href={`/Home/`+type+`/`+userID+`/C`}>
            <button className='button'>
            <p>Home</p>
            </button>
            </a>  
          </li>  
          {/* <li>
            <a href={`/Home/`+type+`/`+userID+`/AddNewItem`}>
            <button className='button'>
            <p>Add New Item</p>
            </button>
            </a> 
          </li> */}
             
          {/* <li>
            <a href={`/Home/BuyItems/:itemID`}>
            <button className='button'>
            <p>Buy New Item</p>
            </button>
            </a>  
          </li> */}
            
          {/* <li>
            <a href={`/Home/FixMaxTransferWeight`}>
            <button className='button'>
            <p>Fix max Trasnfer Item</p>
            </button>
            </a> 
          </li> */}
             
          {/* <li>
            <a href={`/Home/`+type+`/`+userID+`/ManageOrdersCompany`}>
            <button className='button'>
            <p>Manage Orders Company</p>
            </button>
            </a> 
          </li> */}
          
          <li>
            <a href={'/Home/'+type +'/'+userID+'/SeeOrders'}>
            <button className='button'>
            <p>See Orders</p>
            </button>
            </a> 
          </li>
          
          {/* <li>
            <a href={`/Home/`+type+`/`+userID+`/ManageOrdersStore`}>
            <button className='button'>
            <p>Manage Orders Store</p>
            </button>
            </a> 
          </li> */}

          {/* <li>
            <a href={`/Home/`+type+`/`+userID+`/SeeRailway`}>
            <button className='button'>
            <p>See Railway</p>
            </button>
            </a> 
          </li> */}

          {/* <li>
            <a href={`/Home/`+type+`/`+userID+`/AddRailway`}>
            <button className='button'>
            <p>Add Railway</p>
            </button>
            </a> 
          </li> */}

          {/* <li>
            <a href={`/Home/`+type+`/`+userID+`/Reports`}>
            <button className='button'>
            <p>View Reports</p>
            </button>
            </a> 
          </li> */}
          
        </ul>
      </nav>
      
)};
export default NavbarCustomer;