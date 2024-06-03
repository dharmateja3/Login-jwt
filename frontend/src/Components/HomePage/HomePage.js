import React, {useState,useContext,useEffect} from 'react'
import {store} from '../../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import home from '../Images/home.jpg'
import cartoon from '../Images/cartoon.png'
const HomePage = () => {
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:5000/home',{
            headers:{
                'x-token' : token
            }
        }).then(
            res=>setData(res.data)).catch(
                (error)=>{
                    console.log(error);
        })
        if(!token){
            alert("User LoggedOut Successfully")
            navigate('/login')
        }
    })
    
    
  return (
    <div>
        {
            data &&
            <div className=''>
                <img src={home} className='img img-fluid position-absolute z-1' style={{height:'100vh',width:'100vw'}}/>
                <div className='position-relative z-2'>
                    <nav class="navbar navbar-expand-lg border border-bottom border-opacity-50">
                        <div class="container-fluid">
                            <a class="navbar-brand fs-4 text-light" href="#">BRAND_LOGO</a>
                            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                                <ul class="navbar-nav ">
                                    <li class="nav-item">
                                        <a class="nav-link active fw-bold text-light" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link fw-bold text-light" href="#">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link fw-bold text-light" href="#">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link fw-bold text-light" href="#">About</a>
                                    </li>
                                    <li class="nav-item ">
                                        <a class="nav-link fw-bold text-light" href="#">Contact</a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <p className='fst-italic fw-bold fs-5 text-light'>Welcome: {data.username}</p>
                                    </li>
                                    <li class="nav-item mx-4">
                                        <button className='btn btn-primary' onClick={()=>{setToken(null)}}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='row d-flex justify-content-start position-relative z-2 mx-5' style={{'height':"90vh"}}>
                    <div className='col-6 text-light align-items-center ' style={{'marginTop': 150}}>
                        <p className='' style={{'fontSize':50}}>Hello World!!</p>
                        <p className='fs-3'>Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, 
                        utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</p>
                        <button className='btn btn-primary'>Get Started <i class="bi bi-chevron-right"></i></button>
                    </div>
                   <div className='col-6 d-flex align-items-center text-light'>
                        <img src={cartoon}/>
                   </div>
                    
                </div>
            </div>
        }
    </div>
  )
}

export default HomePage