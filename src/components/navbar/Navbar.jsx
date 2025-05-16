import './Navbar.scss';
import {useState} from 'react';
export default function Navbar(){
  const [open,setOpen] = useState(false);
    return (
      <nav>
        <div className="left">
          <a href="" className='logo'>
            <img src="/src/assets/logo.png" alt="" />
            <span>RealEstate</span>
          </a>
          <a href="">Home</a>
          <a href="">Contact</a>
          <a href="">Others</a>
        </div>
        <div className="right">
        
      
        <a href="">Sign In</a>
          <a href="">Sign Up</a>
          <div className='menuIcon'>  <img src="/src/assets/menu.png" alt=""  onClick={()=>setOpen(!open)}/></div>
          <div className= {open ? "menu active" :"menu"}>
          <a href="">Home</a>
          <a href="">Contact</a>
          <a href="">Others</a>
          <a href="">Sign In</a>
          <a href="">Sign Up</a>

          </div>
         
        </div>
      </nav>
    );


}