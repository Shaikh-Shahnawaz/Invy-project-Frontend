import React,{useState,useEffect} from "react";
import { Button, ButtonToolbar, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = (props) => {

    const navigate = useNavigate();



    const [response, setResponse] = useState("");
    const [inputData, setInputData] = useState({
        username: "",
        password: "",
      });

    const handleChange = (e)=>[
        setInputData({...inputData, [e.target.name]:e.target.value})
    ]

    const handleLogin = ()=>{
        // console.log('login ==>',inputData)
        const URL = 'http://localhost:8088/api/authentication/login'

        axios.post(URL,inputData).then(res=>{
            // console.log('Response ==>', res)
            setResponse(res.data.message || res.data.error)

            if(res.data.token){
              localStorage.setItem('token', res.data.token);
            }
            setTimeout(() => {
                navigate('/user');
                props.onHide();
              }, 3000);
        }).catch(err=>console.log(err))
    }


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
            Login here
          </Modal.Title>
          {response ? (
            <div class="alert alert-success" role="alert">
              {response}{" "}
            </div>
          ) : 
           ""
          }
        </Modal.Header>
        <Modal.Body>
          {/* <div className="row mt-3"> */}
            <div class="form-group ">
              <label>Username</label>
              <input
                name="username"
                onChange={handleChange}
                type="text"
                class="form-control"
                placeholder="Enter username"
              />
            </div>

            <div class="form-group mt-3">
              <label>Password</label>
              <input
                name="password"
                onChange={handleChange}
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
          {/* </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handleLogin} className="btn-success">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
