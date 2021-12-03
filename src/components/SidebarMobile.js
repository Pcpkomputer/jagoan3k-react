import { useEffect, useState, useContext } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GiHamburgerMenu } from "react-icons/gi";

import Logo from '../assets/logo.png'

import "../custom.css";
import "../css/Navbar.css";

import "../css/SidebarMobile.css"

import { useMediaQuery } from 'react-responsive'
import Slider from "react-slick";
import { useLocation } from 'react-router';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";

import { GlobalContext } from '../App';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

export default function SidebarMobile(props){

    let history = useHistory();

    let globalContext = useContext(GlobalContext);

    return (
        <div style={{flex:1,overflow:"auto",backgroundColor:"#23b697",opacity:1,width:"100%",height:"100%",position:"fixed",zIndex:999999}}>
                <div style={{display:"flex",justifyContent:"flex-end",paddingLeft:20,paddingRight:20,paddingTop:30,paddingBottom:30}}>
                    <AiOutlineClose onClick={()=>{
                        props.setMobileSidebarOpened(false);
                    }} style={{cursor:"pointer"}} color="white" size={30}/>
                   
                </div>
                <div>
                    <div onClick={()=>{
                        history.push("/");
                        props.setMobileSidebarOpened(false);
                    }} class="menu" style={{cursor:"pointer",padding:25,paddingLeft:40,paddingRight:40,fontSize:28}}>
                        Home
                    </div>
                    <div onClick={()=>{
                        history.push("/jagoank3");
                        props.setMobileSidebarOpened(false);
                    }} class="menu" style={{cursor:"pointer",padding:25,paddingLeft:40,paddingRight:40,fontSize:28}}>
                        Jagoan K3
                    </div>
                    <div onClick={()=>{
                        history.push("/training");
                        props.setMobileSidebarOpened(false);
                    }}  class="menu" style={{cursor:"pointer",padding:25,paddingLeft:40,paddingRight:40,fontSize:28}}>
                        Training
                    </div>
                    <div onClick={()=>{
                        history.push("/shop");
                        props.setMobileSidebarOpened(false);
                    }} class="menu" style={{cursor:"pointer",padding:25,paddingLeft:40,paddingRight:40,fontSize:28}}>
                        Shop
                    </div>
                    <div onClick={()=>{
                        history.push("/galeri");
                        props.setMobileSidebarOpened(false);
                    }} class="menu" style={{cursor:"pointer",padding:25,paddingLeft:40,paddingRight:40,fontSize:28}}>
                        Galeri
                    </div>
                    <div onClick={()=>{
                        history.push("/artikel");
                        props.setMobileSidebarOpened(false);
                    }} class="menu" style={{cursor:"pointer",padding:25,paddingLeft:40,paddingRight:40,fontSize:28}}>
                        Artikel
                    </div>
                    {
                        (globalContext.credentials) ?
                        <div onClick={()=>{
                            history.push("/dashboard");
                            props.setMobileSidebarOpened(false);
                        }} class="menu" style={{cursor:"pointer",padding:25,paddingLeft:40,paddingRight:40,fontSize:28}}>
                        Dashboard
                    </div>
                        :
                        <div onClick={()=>{
                            history.push("/login");
                            props.setMobileSidebarOpened(false);
                        }} class="menu" style={{cursor:"pointer",padding:25,paddingLeft:40,paddingRight:40,fontSize:28}}>
                        Login
                    </div>
                    }
                </div>
            </div>
    )
}