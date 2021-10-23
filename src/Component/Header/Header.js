import React  from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {
    Button,
    Form,
    FormControl, 
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";
import{
    HomeRounded,
    SchoolRouned,
    WorkRounded,
    Facebook,
    Twitter,
    LinkedIn,
    GitHub,
    Telegram,
} from '@material-ui/icons';
import {Link, NavLink, withRouter } from "react-router-dom"; 
import resumedata from "../../resumedata";
import CustomButton from '../button/button'
import"./Header.css"

const Header = (props) => {
    const pathName = props?.location?.pathname;
    return (
        <Navbar expand="lg" sticky="top" className="header">
        <Nav.Link as={NavLink} to ="/" className="header_navlink"> 
        <Navbar.Brand className="header_home">
            <HomeRounded/>
        </Navbar.Brand>
          </Nav.Link>
          
        <Navbar.Toggle/>

          <Navbar.Collapse>
              <Nav className='header_left'>
                  {/* Resume Link */}
                  <Nav.Link
                   as={NavLink} 
                  to="/" 
                  className={pathName == "/" ? "header_link_active" : "header_link"}>
                      CurriculumVitae
                      </Nav.Link>
        {/* portfolio Link */}
        
        
                      <Nav.Link 
                      as={NavLink} 
                  to="/portfolio"
                  className={pathName == "/portfolio" ? "header_link_active" : "header_link"}>
                      Portfolio
                  </Nav.Link>

              </Nav>
              <div className='header_right'>
                  
              <Popup trigger={<button className ='bts'> <CustomButton text ={"Hire me "}   icon={<Telegram/>}/></button>} >
    <div className="popup">Numéro :
        <h6 className ='info'>  (+33) 06999999
            </h6> 
              </div>

              <div className = "popup">Email :
              <h6 className='info'> kkkkkko@gmail.com
            </h6> 
              </div>
  </Popup>
                  
              </div>
          </Navbar.Collapse>
      </Navbar>     
    )
}

export default Header;
