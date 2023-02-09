import React, { useEffect } from 'react'
import { useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios  from "axios";
import Navbar from './Navbar';
function BuyItem() {
    let {userID,type, itemID} = useParams();
    const[quantity,setQuantity]=useState(0);
   
  //   const itemDetail = {
  //     "itemID": 50000,
  //     "name": "Sugar",
  //     "weight": 20,
  //     "unitprice": 50,
  //     "maxtransferweight": 20,
  //     "stockavailability": 449
  // }
    const [itemDetail, setItemDetail] = useState([]);

    const [houseNumber, setHouseNumber]= useState('');
    const[streetName, setStreetName] = useState('');
    const[town, setTown] = useState('');
    const[district, setdistrict] = useState('');
    const [isAvailable, setIsAvailable] = useState(true);
    const [totoalPrice,setTotalPrice]=useState(0);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [store,setStore]=useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // console.log(userID,type, itemID);
    const data = {userID,type,itemID, quantity,houseNumber,streetName,town,district,date,time,unitprice:itemDetail.unitprice,store};
 
   
 
    const navigate=useNavigate();

    useEffect(() => {
      
      // console.log(itemDetail.unitprice);
      if (isSubmitted) {
        const currentDate = new Date();
        setDate(currentDate.toDateString());
        setTime(currentDate.toTimeString().substring(0,8));

      }
    }, [isSubmitted]);
    

    useEffect (()=> {  
     
      setIsSubmitted(true);
        axios.post("http://localhost:4000/home/items/buyItem", data)

        .then((response) => {
          // console.log(response);
            setItemDetail(response.data[0]);
            // console.log(response);
            console.log(itemDetail);
        })
        .catch((error) => {
            console.log(error);
          });
    },[]);

    

   

    const handleSubmit=(e)=>{
        e.preventDefault();
       
        if(itemDetail.stockavailability>= quantity && itemDetail.stockavailability >0){
          setIsAvailable(true);
        }else{
          setIsAvailable(false);
        }

        axios.post("http://localhost:4000/home/items/buyItem/buyItemUpdate", data)
        .then((response) => {
            console.log('Check Updated');
        })
        .catch((error) => {
            console.log(error);
          });
    
        
        navigate('/Home/'+type+'/'+userID+'/SeeOrders');
        // Todo  change to see orders page
    }
   
        
  return (
      
      <section>
           <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       
        
        {/* <Navbar class='login-form' userID={userID} type = {type}/> */}
        <form class='login-form' onSubmit={handleSubmit}>
        <div>
           <br></br>
           <br></br>
            The Product is  {itemDetail.name}
            <br></br>
            <p> Stock Available {itemDetail.stockavailability}</p>
            
            Weight is <h2> {itemDetail.weight}</h2>
        </div>
        <div class="flex-row">
          <label class="lf--label" for="quantity">
            <svg x="0px" y="0px" width="15px" height="5px">
              <g>
                <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z" />
              </g>
            </svg>
          </label>
          <input id="quantity" class='lf--input' placeholder='Quantity Required' type='number' required= {isAvailable} value={quantity} onChange={e => setQuantity(e.target.value)} />
        </div>

        <div>
            {/* {setUnitPrice=200}; */}
            Unit Price is Rs. {itemDetail.unitprice}
            <br></br>
            Total Price is <h2>Rs. {itemDetail.unitprice*quantity}</h2>
        </div>

        <div>
          <h3> Enter Your Details</h3>

            <div class="flex-row">
            <label class="lf--label" for="houseNumber">
              <svg x="0px" y="0px" width="15px" height="5px">
                <g>
                  <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z" />
                </g>
              </svg>
            </label>
            <input id="houseNumber" class='lf--input' placeholder='House Number' type='text' required value={houseNumber} onChange={e => setHouseNumber(e.target.value)}/>
          </div>

          <div class="flex-row">
            <label class="lf--label" for="streetName">
              <svg x="0px" y="0px" width="15px" height="5px">
                <g>
                  <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z" />
                </g>
              </svg>
            </label>
            <input id="streetName" class='lf--input' placeholder='Street Name' type='text' required value={streetName} onChange={e => setStreetName(e.target.value)}/>
          </div>

          <div class="flex-row">
            <label class="lf--label" for="town">
              <svg x="0px" y="0px" width="15px" height="5px">
                <g>
                  <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z" />
                </g>
              </svg>
            </label>
            {/* <input id="town" class='lf--input' placeholder='Town' type='text' value={town} required onChange={e => setTown(e.target.value)}/> */}
            <select required value={town}
                    onChange={(e)=> setTown(e.target.value)}>
                    <option value="">None</option>       
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kokuvil">Kokuvil</option>
                    <option value="kondavil">kondavil</option>
                    <option value="kks">kks</option>
                    <option value="kopai">kopai</option>
                    <option value="Neerveli">Neerveli</option>
                    <option value="Parithurai">Parithurai</option>
                    <option value="Dehiwala">Dehiwala</option>
                    <option value="Moratuwa">Moratuwa</option>
                    <option value="Ratmalana">Ratmalana</option>
                    <option value="Bambalapitiya">Bambalapitiya</option>
                    <option value="Wellawatta">Wellawatta</option>
                    <option value="Ambalapitiya">Ambalapitiya</option>
                    <option value="Bentota">Bentota</option>
                    <option value="Voosa">Voosa</option>
                    <option value="Bethel Villa">Bethel Villa</option>
                    
            </select>
          </div>

          <div class="flex-row">
            <label class="lf--label" for="district">
              <svg x="0px" y="0px" width="15px" height="5px">
                <g>
                  <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z" />
                </g>
              </svg>
            </label>
            <input id="district" class='lf--input' placeholder='District' type='text' value={district} required onChange={e => setdistrict(e.target.value)}/>
          </div>
        </div>
        
        <div class="flex-row">
          <label class="lf--label" for="store">
            <svg x="0px" y="0px" width="15px" height="5px">
              <g>
                <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z" />
              </g>
            </svg>
          </label>
          <select value={store}
                    onChange={(e)=> setStore(e.target.value)}>
                       <option value="">None</option>
                       <option value="Kandy">Kandy</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Negambo">Negambo</option>
                    <option value="Galle">Galle</option>
                    <option value="Matara">Matara</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Trincomalee">Trincomalee</option>

                </select>
        </div>

        <div className="button">
        <input class='lf--submit' type='submit' value='Buy Item' onchange={e =>(setTotalPrice.target.value)}/></div>
        
    </form>
    </section>

  )
}

export default BuyItem;