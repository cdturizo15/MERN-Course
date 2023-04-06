import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'

export const Navbar = () => {
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)

    const onLogout = ()=>{
        authContext.logout()
        navigate('/login', {replace: true})
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <h3 className='text-light me-3'>Animeki</h3>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={'/'}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={'/male'}>
                                Male
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to={'/female'}>
                                Female
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <span className='text-light'>{authContext.state?.name}</span>
                <li className="nav-item">
                
                    <button onClick={()=>onLogout()} className='btn btn-light' >
                        <i className='bi bi-door-open icon-style' ></i>
                    </button>
                </li>
            </nav>
        </>
    )
}
