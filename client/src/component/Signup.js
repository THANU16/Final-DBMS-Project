import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();
  

  const data = { email: email, password: password, firstName: firstName, lastName:lastName, address: address, contactNumber: contactNumber, type: type, district: district}

  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log(data);
    axios.post('http://localhost:4000/signup',data )
      .then(res => {
        console.log(res.data.message);
        navigate('/');
        
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <section>
        <form class='login-form' onSubmit={handleSubmit}>
        <div class="flex-row">
          <label class="lf--label" for="email">
            <svg x="0px" y="0px" width="12px" height="13px">
              <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z" />
            </svg>
          </label>
          <input id="email" class='lf--input' placeholder='Email' type='email' value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div class="flex-row">
          <label class="lf--label" for="password">
            <svg x="0px" y="0px" width="15px" height="5px">
              <g>
                <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z" />
              </g>
            </svg>
          </label>
          <input id="password" class='lf--input' placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        
        <div class="flex-row">
          <label class="lf--label" for="firstName">
            <svg x="0px" y="0px" width="12px" height="13px">
              <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z" />
            </svg>
          </label>
          <input id="firstName" class='lf--input' placeholder='First Name' type='text' value={firstName} onChange={e => setFirstName(e.target.value)}/>
        </div>
        <div class="flex-row">
          <label class="lf--label" for="LastName">
            <svg x="0px" y="0px" width="15px" height="5px">
              <g>
                <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z" />
              </g>
            </svg>
          </label>
          <input id="lastName" class='lf--input' placeholder='Last Name' type='text' value={lastName} onChange={e => setLastName(e.target.value)}/>
        </div>
        <div class="flex-row">
          <label class="lf--label" for="address">
            <svg x="0px" y="0px" width="15px" height="5px">
              <g>
                <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z" />
              </g>
            </svg>
          </label>
          <input id="address" class='lf--input' placeholder='Address' type='text' value={address} onChange={e => setAddress(e.target.value)}/>
        </div>

        <div class="flex-row">
          <label class="lf--label" for="district">
            <svg x="0px" y="0px" width="12px" height="13px">
              <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z" />
            </svg>
          </label>
          <input id="district" class='lf--input' placeholder='District' type='text' value={district} onChange={e => setDistrict(e.target.value)}/>
        </div>

        <div class="flex-row">
          <label class="lf--label" for="contactNumber">
            <svg x="0px" y="0px" width="12px" height="13px">
              <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z" />
            </svg>
          </label>
          <input id="contactNumber" class='lf--input' placeholder='Contact Number' type='text' value={contactNumber} onChange={e => setContactNumber(e.target.value)}/>
        </div>

        <div class="flex-row">
          <label class="lf--label" for="address">
            <svg x="0px" y="0px" width="15px" height="5px">
              <g>
                <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z" />
              </g>
            </svg>
          </label>
          <select required value={type}
                    onChange={(e)=> setType(e.target.value)}>
                    <option value="">None</option>    
                    <option value="CSTWH">Customer- Wholesaler</option>
                    <option value="CSTRE">Customer- Retailer</option>
                    <option value="CSTEN">Customer- EndCustomer</option>
                    <option value="MaDri">Driver- MainDriver</option>
                    <option value="AsDri">Driver- Assistant Driver</option>
                    <option value="EMPER">Employee- Store Employee</option>
                    <option value="EMCON">Employee- Company Employee</option>
                </select>
          {/* <input id="address" class='lf--input' placeholder='Address' type='text' value={address} onChange={e => setAddress(e.target.value)}/> */}
        </div>

        <input class='lf--submit' type='submit' value='SIGNUP'/>
    </form>
    <a class='lf--forgot' href='/'>Login</a>
    </section>
    
  );
};

export default Signup;
