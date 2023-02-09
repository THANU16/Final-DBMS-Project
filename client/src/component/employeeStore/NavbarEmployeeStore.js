import {BrowserRouter as  Link} from 'react-router-dom';
// import './button.css';
// import './navbar.css';

function NavbarEmployeeStore(props){
  const userID = props.userID;
  const type = props.type;

    return ( 
      
       <nav>
        <ul>
          <li>
            <a href={`/Home/`+type+`/`+userID+`/ES`}>
            <button className='button'>
            <p>Home</p>
            </button>
            </a>  
          </li>  

          <li>
            <a href={`/Home/`+type+`/`+userID+`/AddNewItem`}>
            <button className='button'>
            <p>Add New Item</p>
            </button>
            </a> 
          </li>
             
          {/* <li>
            <a href={`/Home/BuyItems/:itemID`}>
            <button className='button'>
            <p>Buy New Item</p>
            </button>
            </a>  
          </li> */}
            
          {/* <li>
            <a href={`/Home/`+type+`/`+userID+`/FixMaxTransferWeight`}>
            <button className='button'>
            <p>Fix max Trasnfer Weight</p>
            </button>
            </a> 
          </li> */}
             
          <li>
            <a href={`/Home/`+type+`/`+userID+`/ManageOrdersStore`}>
            <button className='button'>
            <p>Manage Orders Store</p>
            </button>
            </a> 
          </li>
{/*           
          <li>
            <a href={'/Home/'+type +'/'+userID+'/SeeOrders'}>
            <button className='button'>
            <p>See Orders</p>
            </button>
            </a> 
          </li> */}
{/*           
          <li>
            <a href={`/Home/`+type+`/`+userID+`/ManageOrdersCompany`}>
            <button className='button'>
            <p>Manage Orders Company</p>
            </button>
            </a> 
          </li> */}

          

          <li>
            <a href={`/Home/`+type+`/`+userID+`/SeeRailway`}>
            <button className='button'>
            <p>See Railway</p>
            </button>
            </a> 
          </li>

          <li>
            <a href={`/Home/`+type+`/`+userID+`/AddRailway`}>
            <button className='button'>
            <p>Add Railway</p>
            </button>
            </a> 
          </li>

          <li>
            <a href={`/Home/`+type+`/`+userID+`/SeeDrivers`}>
            <button className='button'>
            <p>See drivers</p>
            </button>
            </a> 
          </li>

          <li>
            <a href={`/Home/`+type+`/`+userID+`/ManageSetDrivers`}>
            <button className='button'>
            <p>Manage Set Drivers</p>
            </button>
            </a> 
          </li>
{/* 
          <li>
            <a href={`/Home/`+type+`/`+userID+`/ManageDrives`}>
            <button className='button'>
            <p>Manage drivers</p>
            </button>
            </a> 
          </li> */}

          {/* <li>
            <a href={`/Home/`+type+`/`+userID+`/ManageOrdersDriver`}>
            <button className='button'>
            <p>Manage Orders driver</p>
            </button>
            </a> 
          </li> */}

          {/* <li>
            <a href={`/Home/`+type+`/`+userID+`/ManageSetDrivers`}>
            <button className='button'>
            <p>Manage Set Drivers</p>
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
export default NavbarEmployeeStore;