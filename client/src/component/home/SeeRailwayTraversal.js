import './seerailwaytraversal.css'

const SeeRailwayTraversal= (props) => {
    const {railwayList}=props;
    // back end sql query 
    // select name from item where itemID in( select itemID from orders inner join ordered_items where itemID="IT001");
    return (  
        <div className="order-list">
            <table class="zigzag">
                <thead>
                    <tr>
                    <th class="header">Rail Name</th>
                    <th class="header">Arrived Time</th>
                    <th class="header">Depature Time</th>
                    <th class="header">Difference</th>
                    </tr>
                </thead>
                <tbody>
            {railwayList.map((railway)=>(
                <div className="order-preview" key={railway.id}>
                    
                        <tr>
                        <td>{railway.name}</td>
                        <td>{railway.arrivaltime}</td>
                        <td>{railway.depaturetime}</td>
                        <td>{railway.difference}</td>
                        </tr>
                
                </div>
            ))}
            </tbody>
            </table>
        </div>
    );
}
 
export default SeeRailwayTraversal;