import {BrowserRouter as  Link} from 'react-router-dom';

// import './button.css';
// import './navbar.css';
function Reports(props){
  const userID = props.userID;
  const type = props.type;

    return ( 
    //   
       <nav>
        {/* <p>Hello! You Can See The Reports Here!</p> */}
        <ul>
          
          <li>
            <a href={`/Home/`+type+`/`+userID+`/Reports/ShowTopFiveItems`}>
            <button className='button'>
            <p>ShowTopFiveItems</p>
            </button>
            </a> 
          </li>
             
          <li>
            <a href={`/Home/`+type+`/`+userID+`/Reports/ShowQuarterlySales`}>
            <button className='button'>
            <p>ShowQuarterlySales</p>
            </button>
            </a>  
          </li>
            
          <li>
            <a href={`/Home/`+type+`/`+userID+`/Reports/ShowRouteOrders`}>
            <button className='button'>
            <p>ShowRouteOrders</p>
            </button>
            </a> 
          </li>
             
          <li>
            <a href={`/Home/`+type+`/`+userID+`/Reports/ShowTownOrders`}>
            <button className='button'>
            <p>ShowTownOrders</p>
            </button>
            </a> 
          </li>
          <li>
            <a href={`/Home/`+type+`/`+userID+`/EC`}>
            <button className='button'>
            <p>Back To Home</p>
            </button>
            </a>  
          </li>  

        </ul>
      </nav>
      
)};
export default Reports;