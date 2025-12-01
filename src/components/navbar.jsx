import React from 'react';
import {Link} from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/">
                <div className='nav-logo'>
                    <img src="../../github-mark.png" alt="github logo" />
                    <h3>Github</h3> 
                </div>
            </Link>
            
            <div className='nav-options'>
                <Link to="/create">
                <p>Create Repository</p>
                </Link>
                <Link to="/profile">
                <p>Profile</p>
                </Link>
                </div>
        </nav>
        // <nav className='navbar'>
        //         <div className='logo'>
        //            <Link to="/">
        //             <img src="../../../public/github-mark.png" alt="Github Logo" />
        //             <h3>GitHub</h3>
        //             </Link>
        //         </div>
        //     <div className='nav-options'>
        //         <Link to="/create">
        //             <p>Create a Repository</p>
        //         </Link>
        //         <Link to="/profile">
        //             <p>Profile</p>
        //         </Link>
        //     </div>
            

        // </nav>
    )
}

export default Navbar;