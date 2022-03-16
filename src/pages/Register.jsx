import React, { useState } from "react";
import { Button, ButtonToolbar, Modal } from "react-bootstrap";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

import axios from "axios";

const Register = (props) => {
  const [response, setResponse] = useState("");
  const [validate, setValidate] = useState("");

  const [country,setCountry] = useState('')
  const [region,setRegion] = useState('')

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    phone: "",
    address: ''
  });

  

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const selectCountry  = (val)=> {
    setCountry(val);
    
  }

  const selectRegion  = (val)=> {
    setRegion(val)
  }

 
  const handleRegister = () => {
    if (
      !(
        inputData.name ||
        inputData.email ||
        inputData.phone ||
        inputData.username ||
        inputData.password ||
        inputData.address
      )
    ) {
      setValidate('Please fill all details')
    } else {
      inputData.address = country +' '+ region
      setInputData({...inputData})
      const URL = "http://localhost:8088/api/authentication/signup";

      axios
        .post(URL, inputData)
        .then((res) => {
          console.log("response == >>> ", res.data);
          setResponse(res.data.message || res.data.error);
          setTimeout(() => {
            props.onHide();
          }, 30000);
        })
        .catch((err) => console.log(err));
      // console.log('address==>',inputData)
    }
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Register here
          </Modal.Title>

          {response ? (
            <div class="alert alert-success" role="alert">
              {response}{" "}
            </div>
          ) : 
           ""
          }

          { validate ? 
            <p>{validate}</p>:''}
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div class="form-group col-md-6">
              <label>Name</label>
              <input
                name="name"
                onChange={handleChange}
                type="text"
                class="form-control"
                placeholder="Enter name"
              />
            </div>

            <div class="form-group col-md-6">
              <label>Email address</label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div className="row mt-3">
            <div class="form-group col-md-6">
              <label>Username</label>
              <input
                name="username"
                onChange={handleChange}
                type="text"
                class="form-control"
                placeholder="Enter username"
              />
            </div>

            <div class="form-group col-md-6">
              <label>Password</label>
              <input
                name="password"
                onChange={handleChange}
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="form-group mt-3">
            <label>Phone</label>
            <input
              name="phone"
              onChange={handleChange}
              type="tel"
              class="form-control"
              placeholder="Enter phone number"
            />
          </div>

          {/* <div class="form-group mt-3">
            <label>Address</label>
            <input
              name="address"
              onChange={handleChange}
              type="text"
              class="form-control"
              placeholder="Enter address"
            />
          </div> */}

          <div>
          <CountryDropdown
          value={country}
          onChange={(val) => selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => selectRegion(val)} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handleRegister} className="btn-success">
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Register;
