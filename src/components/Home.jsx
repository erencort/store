import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { logOut } from '../firebase';
import { logout as logoutHandle} from '../redux/authSlice';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useNavigate } from "react-router-dom";



function Home() {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async() => {
        await logOut()
        dispatch(logoutHandle())
        navigate("/login")
    }

    if(user){
        return(
            <div>
            <div>hosgeldin</div>
            <button onClick={handleLogout}>Log out</button>
            </div>
        )
    }

  return (
    <div>
        <div>

        </div>

        <div>
        <ul>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/register"}>Register</Link></li>
        </ul>
        </div>
        </div>
  )
}

export default Home