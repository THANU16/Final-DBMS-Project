import './App.css';
import Login from './component/Login'
import Signup from './component/Signup';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import ForgotPassword from './component/ForgotPassword';
import Home from './component/Home';
import BuyItem from './component/home/BuyItem';
import AddNewItem from './component/home/AddNewItem';
import FixMaxTrasferWeight from './component/FixMaxTrasferWeight';
import SeeOrders from './component/SeeOrders';
import ManageOrdersCompany from './component/ManageOrdersCompany';
import ManageOrdersStore from './component/ManageOrdersStore';
import SeeRailway from './component/SeeRailway';
import AddRailway from './component/home/AddRailway';
import HomeCustomer from './component/customer/HomeCustomer';
import SeeDrivers from './component/SeeDrivers';
import ManageDrives from './component/home/ManageDrives';
import ManageOrdersDriver from './component/ManageOrdersDriver';
import ManageSetDrivers from './component/ManageSetDrivers';
import ShowQuarterlySales from './component/reports/ShowQuarterlySales';
import ShowTownOrders from './component/reports/ShowTownOrders';
import ShowRouteOrders from './component/reports/ShowRouteOrders';
import ShowTopFiveItems from './component/reports/ShowTopFiveItems';
import MainReports from './component/reports/MainReports';
import HomeDriver from './component/driver/HomeDriver';
import HomeEmployeeCompany from './component/employeeCompany/HomeEmployeeCompany';
import HomeEmployeeStore from './component/employeeStore/HomeEmployeeStore';

function ConnetComponent() {
  return (
    <div className="App"> 
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />}> */}
        <Route path="/" element={<Login />}/>
        <Route path='/Signup' element = {<Signup/>}/>
        <Route path='/ForgetPassword' element = {<ForgotPassword/>}/>

        {/* <Route path='/Home/:type/:userID' element = {<Home/>}/> */}

        <Route path='/Home/:type/:userID/C' element = {<HomeCustomer/>}/>
        <Route path='/Home/:type/:userID/D' element = {<HomeDriver/>}/>
        <Route path='/Home/:type/:userID/EC' element = { <HomeEmployeeCompany/> }/>
        <Route path='/Home/:type/:userID/ES' element = { <HomeEmployeeStore/>}/>

        

        <Route path='/Home/:type/:userID/BuyItems/:itemID' element = {<BuyItem/>}/>
        <Route path='/Home/:type/:userID/AddNewItem' element = {<AddNewItem/>}/>
        <Route path='/Home/:type/:userID/FixMaxTransferWeight' element = {<FixMaxTrasferWeight/>}/>
        <Route path='/Home/:type/:userID/SeeOrders' element = {<SeeOrders/>}/>
        <Route path='/Home/:type/:userID/ManageOrdersCompany' element = { <ManageOrdersCompany/> }/>
        <Route path='/Home/:type/:userID/ManageOrdersStore' element = { <ManageOrdersStore/> }/>
        <Route path='/Home/:type/:userID/SeeRailway' element = {<SeeRailway/> }/>
        <Route path='/Home/:type/:userID/AddRailway' element = {<AddRailway/>}/>

        <Route path='/Home/:type/:userID/SeeDrivers' element = {<SeeDrivers/> }/>
        <Route path='/Home/:type/:userID/ManageDrives' element = {<ManageDrives/> }/>
        <Route path='/Home/:type/:userID/ManageOrdersDriver' element = { <ManageOrdersDriver/> }/>
        <Route path= '/Home/:type/:userID/ManageSetDrivers' element ={ <ManageSetDrivers/> } />
        <Route path= '/Home/:type/:userID/Reports/ShowQuarterlySales' element ={ <ShowQuarterlySales/>} />
        <Route path= '/Home/:type/:userID/Reports/ShowTownOrders' element ={ <ShowTownOrders/> } />
        <Route path= '/Home/:type/:userID/Reports/ShowRouteOrders' element ={ <ShowRouteOrders/>} />
        <Route path= '/Home/:type/:userID/Reports/ShowTopFiveItems' element ={ <ShowTopFiveItems/>} />
        <Route path= '/Home/:type/:userID/Reports' element ={ <MainReports/>} />
        



        

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
         
    </div>
    
  );
}

export default ConnetComponent;

