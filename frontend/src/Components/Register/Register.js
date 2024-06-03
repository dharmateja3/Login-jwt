import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [data,setdata] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const changeHandler=(e)=>{
      setdata({...data,[e.target.name]:e.target.value})
    }
    const navigate = useNavigate();
    const submitHandler=(e)=>{
      e.preventDefault();
      axios.post('http://localhost:5000/register',data).then(
        res => alert(res.data),
        navigate('/login')
      )
    }
  return (
    <div >
       <div className="m-5 d-flex justify-content-center align-items-center ">
          <div className="row d-flex align-items-center justify-content-center flex-column border rounded shadow mt-2" >
            <h2 className="col-auto m-3">Register</h2>
            <form onSubmit={submitHandler} autoComplete='off'>
              <div className='row'>
            <div class="col-12 mb-3">
              <label className="form-label">Username</label>
              <input  type="text" onChange={changeHandler} className="form-control" name="username" required/>
            </div>
            </div>
            <div className='row'>
            <div class="col-12 mb-3">
              <label className="form-label">Email address</label>
              <input  type="email" onChange={changeHandler} className="form-control" name="email" required/>
            </div>
            </div>
            <div className='row'>
            <div className="col-6 mb-3">
              <label className="form-label">Password</label>
              <input type="password" onChange={changeHandler} className="form-control" name="password" required/>
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" onChange={changeHandler} className="form-control" name="confirmpassword" required/>
            </div>
            </div>
            <div className="col-auto mb-2">
              <button type="submit" className="btn btn-primary form-control" >Register</button>
            </div>
            <div className="col-auto mb-3">
              <p>Already have an account?<Link to='/login' className="link">Login</Link></p>
            </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Register