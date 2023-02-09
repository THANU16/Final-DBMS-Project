import './seerailwaytraversal.css'

const SeeDriversTraversal= ({drivers, filter}) => {
    // const {drivers}=props;
    // const {filter} =props.filter;
    // console.log(drivers);
    // console.log(filter);

    // const rows = drivers
    //   .filter(driver => driver.location.includes(filter))
    //   .map(driver => (
    //     <tr key={driver.id}>
    //         <td>{driver.firstName}</td>
    //         <td>{driver.contactNumber}</td>
    //         <td>{driver.weeklyHours}</td>
    //         <td>{driver.consecutiveDrives}</td>
    //         <td>{driver.isAvailable}</td>
    //         <td>{driver.district}</td>
    //     </tr>
                
    //   ));



    // back end sql query 
    // select name from item where itemID in( select itemID from orders inner join ordered_items where itemID="IT001");
    return (  
        <div className="order-list">
            <table class="zigzag">
                <thead>
                    <tr>
                    <th class="header">First Name</th>
                    <th class="header">Contact Number</th>
                    <th class="header">Weekly Hours</th>
                    <th class="header">Consecutive Drives</th>
                    <th class="header">District</th>

                    </tr>
                </thead>
                <tbody>
                {/* {rows} */}
            {drivers.map((driver)=>(
                <div className="order-preview" key={driver.id}>
                    
                        <tr>
                        <td>{driver.firstName}</td>
                        <td>{driver.contactNumber}</td>
                        <td>{driver.weeklyHours}</td>
                        <td>{driver.consecutiveDrives}</td>
                        <td>{driver.isAvailable}</td>
                        <td>{driver.district}</td>
                        </tr>
                
                </div>
            ))}
            </tbody>
            </table>
        </div>
    );
}
 
export default SeeDriversTraversal;




