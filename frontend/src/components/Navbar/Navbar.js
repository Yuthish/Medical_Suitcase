import React,{useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import {Link} from 'react-router-dom';
import {sidebardata} from '../SideBar/sidebar';
import '../Navbar/Navbar.css';
import {IconContext} from 'react-icons';

function Navbar(props) {
    const [sidebar, setSidebar] = useState(true)

    const showSidebar=()=>setSidebar(!sidebar)
    var navStyles={backgroundColor:props.bg}
    return (
        <div >
            <IconContext.Provider value={{className:"burger"}} >
            <div className="navbar" style={navStyles}>
                <Link to="#" className="menu-bars" >
                    <FaIcons.FaBars onClick={showSidebar} />

                </Link>

            </div>
            <nav  className={sidebar ? 'nav-menu active':'nav-menu'} style={navStyles}>
                <ul className="nav-menu-items" onClick={showSidebar} >
                    <li className="navbar-toggle" style={navStyles}>
                        <Link to="#" className="menu-bars ">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    <li className="profilepic">
                    <HiIcons.HiUserCircle />
                    </li>
                    
                    {sidebardata.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    {item.title==='Logout'?<span>{item.title} <i className='sign-out icon'></i></span>:<span>{item.title}</span>}
                                </Link>
                            </li>
                        )

                    })}
                    </ul>
            </nav>

         </IconContext.Provider>   
        </div>
    )
}

export default Navbar;
