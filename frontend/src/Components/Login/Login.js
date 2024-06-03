import React,{useState,useContext} from 'react';
import axios from'axios';
import {store} from '../../App';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [token,setToken]= useContext(store);
    const [data,setdata] = useState({
        email:'',
        password:''
    })
    const changeHandler=(e)=>{
      setdata({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
      e.preventDefault();
      axios.post('http://localhost:5000/login',data).then(
        res => {
          alert("User LoggedIn Successfully")
          setToken(res.data.token)
        }
      ).catch(()=>alert("Invalid Credentials"));
    }
    const navigate = useNavigate();
    if(token){
      navigate('/home')
    }
    return (
        <div className="d-flex justify-content-center align-items-center">
        <div className="">
          <div className="row d-flex align-items-center justify-content-center flex-column border rounded mt-5 shadow" style={{'width':500}}>
            <h2 className="col-auto m-3">Login</h2>
            <form onSubmit={submitHandler} autoComplete='off'>
            <div className="col-auto mb-3">
              <label className="form-label">Email address</label>
              <input  type="email" onChange={changeHandler} className="form-control" name="email" required/>
            </div>
            <div className="col-auto mb-3">
              <label className="form-label">Password</label>
              <input type="password" onChange={changeHandler} className="form-control" name="password" required/>
            </div>
            <div className="col-auto mb-2">
              <button type="submit" className="btn btn-primary form-control">Login</button>
            </div>
            <div className="col-auto mb-3">
              <p>Don't have an account?<Link to='/register' className="link">Register</Link></p>
            </div>
            </form>
          </div>
        </div>
        </div>
    );
}

export default Login