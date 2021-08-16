import { useEffect, useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Logo from '../assets/logo.png'

import "../custom.css";
import "../css/Navbar.css";

import { useMediaQuery } from 'react-responsive'
import Slider from "react-slick";
import { useLocation } from 'react-router';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function NavBar(props){

    

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
    const max991 = useMediaQuery({ query: '(max-width: 991px)' })
    const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })

    let [menuFocused, setMenuFocused] = useState(false);

    useEffect(()=>{
        document.querySelectorAll("a").forEach((el)=>{
            el.addEventListener("mouseover",()=>{
                setMenuFocused(true);
            })

            el.addEventListener("mouseout",()=>{
                setMenuFocused(false);
            })
        })
    },[])

    let [stickyHeaderShow, setStickyHeaderShow] = useState(false);
    
    if(props.sticky){
        return (
            <div style={{backgroundColor:"#24b798",position:"fixed",width:"100%",top:0,zIndex:9999}}>
          <Container style={{height:"100%",padding:20}}>
              <Row style={{height:"100%"}}>
                  <Col lg={(max991) ? 12:1} style={{alignItems:"center",display:"flex"}}>
                      {
                        (max991) ?
                        <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:40,position:"absolute",border:"solid 5px #23b697",marginTop:20,height:80,width:80,borderRadius:999,zIndex:100}}>
                               <img src={`${Logo}`} style={{width:150,height:150,marginBottom:18,marginRight:8}}/>
                            </div> 
                            :
                            <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:40,position:"absolute",border:"solid 5px #23b697",height:80,width:80,borderRadius:999,zIndex:100}}>
                             <img src={`${Logo}`} style={{width:150,height:150,marginBottom:18,marginRight:8}}/>
                          </div> 
                      }
                  </Col>
                  {
                    (max991) ?
                    <Col style={{alignItems:"center",color:"white",height:"100%",display:"flex",justifyContent:"flex-end",flexDirection:"row"}}>
                      <div style={{marginRight:30}}>Burger Menu</div>
                  </Col>
                    :
                    <Col style={{alignItems:"center",paddingLeft:50,paddingRight:50,color:"white",height:"100%",display:"flex",justifyContent:"space-around",flexDirection:"row"}}>
                      <Link className={`${menuFocused ? "dimmed":""}`} to="/" >Home</Link>
                      <Link className={`${menuFocused ? "dimmed":""}`} to="/jagoank3" >Jagoan K3</Link>
                      <Link className={`${menuFocused ? "dimmed":""}`} to="/training" >Training</Link>
                      <Link className={`${menuFocused ? "dimmed":""}`} to="/shop" >Shop</Link>
                      <Link className={`${menuFocused ? "dimmed":""}`} to="/galeri" >Galeri</Link>
                      <Link className={`${menuFocused ? "dimmed":""}`} to="/artikel" >Artikel</Link>
                      <Link className={`${menuFocused ? "dimmed":""}`} to="/login" >Login</Link>
                  </Col>
                  }
              </Row>
          </Container>
      </div>

        )
    }

    return (
        <div id="header" style={{backgroundColor:"#24b798"}}>
              <Container style={{height:"100%",padding:20}}>
                  <Row style={{height:"100%"}}>
                      <Col lg={(max991) ? 12:1} style={{alignItems:"center",display:"flex"}}>
                          {
                            (max991) ?
                            <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:40,position:"absolute",border:"solid 5px #23b697",marginTop:20,height:80,width:80,borderRadius:999,zIndex:100}}>
                               <img src={`${Logo}`} style={{width:150,height:150,marginBottom:18,marginRight:8}}/>
                            </div> 
                            :
                            <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:40,position:"absolute",border:"solid 5px #23b697",height:80,width:80,borderRadius:999,zIndex:100}}>
                             <img src={`${Logo}`} style={{width:150,height:150,marginBottom:18,marginRight:8}}/>
                          </div> 
                          }
                      </Col>
                      {
                        (max991) ?
                        <Col style={{alignItems:"center",color:"white",height:"100%",display:"flex",justifyContent:"flex-end",flexDirection:"row"}}>
                          <div style={{marginRight:30}}>Burger Menu</div>
                      </Col>
                        :
                        <Col style={{alignItems:"center",paddingLeft:50,paddingRight:50,color:"white",height:"100%",display:"flex",justifyContent:"space-around",flexDirection:"row"}}>
                        <Link className={`${menuFocused ? "dimmed":""}`} to="/" >Home</Link>
                      <Link className={`${menuFocused ? "dimmed":""}`} to="/jagoank3" >Jagoan K3</Link>
                      <Link className={`${menuFocused ? "dimmed":""}`} to="/training" >Training</Link>
                      <Link className={`${menuFocused ? "dimmed":""}`} to="/shop" >Shop</Link>
                      <Link className={`${menuFocused ? "dimmed":""}`} to="/galeri" >Galeri</Link>
                      <Link className={`${menuFocused ? "dimmed":""}`} to="/artikel" >Artikel</Link>
                      <Link className={`${menuFocused ? "dimmed":""}`} to="/login" >Login</Link>
                      </Col>
                      }
                  </Row>
              </Container>
          </div>
    )
}