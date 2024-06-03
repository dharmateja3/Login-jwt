import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {store} from '../../App';

const Nav = () => {
  const [token] = useContext(store)
  return (
    <div>
      {!token &&
      <div>
        <nav className="navbar navbar-expand" style={{'height':60}}>
        <ul className="navbar-nav ms-auto py-5">
            <Link to=''><li className="nav-item mx-2">
                <button className="text-light btn btn-primary">Contact</button>
            </li></Link>
            <li className="nav-item mx-2">
                <button className="text-light  btn btn-primary">Services</button>
            </li>
            <Link to='/login'><li className="nav-item mx-2">
                <button className="text-light  btn btn-primary">Login</button>
            </li></Link>
            <Link to='/register'><li className="nav-item mx-2">
                <button className="text-light btn btn-primary">Register</button>
            </li></Link>
        </ul>
      </nav>
      </div>
    }
    </div>
  )
}

export default Nav