import React from 'react'
import '../Component/Navbar.css'
import { IoMdHome } from "react-icons/io";
import { IoSearchCircleSharp } from "react-icons/io5";
import { RiMovie2Line } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => {
   


  return (
    <>
      <div className="nav-container">
        <div className="nav">
          
           
          <div className="name">
            <h4><Link to={'/'}>F-MOVIES</Link></h4>
          </div>
          

           <div className="logo">
           <div className="logo-home1">
            <RiMovie2Line  style={{marginLeft:'8px',fontSize:'25px',background:'none'}} />
           <Link to={'/movies/popular'}><li>Populer Movies</li></Link> 
           </div>
          
           <div className="logo-home1">
           <RiMovie2Line  style={{marginLeft:'8px',fontSize:'25px',background:'none'}} />
           ,<Link to={'/movies/top_rated'}><li>Top Rated</li></Link> 
           </div>
           <div className="logo-home1">
            <RiMovie2Line   style={{marginLeft:'8px',fontSize:'25px',background:'none'}}/>
            <Link to={'/movies/upcoming'} >  <li>Upcoming</li></Link>
           </div>
           </div>
        
           

        </div>
      </div>
    </>
  )
}

export default Navbar
