import { useEffect, useState } from 'react';

import { Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../custom.css";
import "../css/Login.css";

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

import Footer from '../components/Footer';
import NavBar from '../components/Navbar';


export default function Login(props){

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })

  useEffect(()=>{
    if(document.querySelectorAll("#header").length>0){
      window.addEventListener("scroll",(e)=>{
        if(document?.querySelectorAll("#header")[0]?.getClientRects()[0]?.top<=0){
            setStickyHeaderShow(true);
        }
        else{
          setStickyHeaderShow(false);
        }
      })
    }
},[])


  let [stickyHeaderShow, setStickyHeaderShow] = useState(false);

  return (
    <div style={{fontFamily:"Poppins, sans-serif"}}>
        <Container fluid={true} style={{margin:0,padding:0,backgroundColor:"whitesmoke",background:"url('https://midiatama.co.id/_nuxt/img/bg-login.03fdc67.png')",height:300}}>
           <div style={{position:"absolute",zIndex:1,width:"100%",height:300,backgroundColor:"black",opacity:0.5}}></div>

           <div style={{width:"100%",position:"absolute",zIndex:100,height:300,display:"flex",justifyContent:"center",paddingLeft:(isTabletOrMobile) ? 80:150,paddingRight:150,flexDirection:"column"}}>
                <div style={{fontSize:35,letterSpacing:5,fontWeight:"bold",color:"white"}}>LOGIN</div>
                <div style={{marginTop:10,display:"flex",alignItems:"center",flexDirection:"row"}}>
                    <div style={{color:"white", marginRight:10}}>Home</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white"}}>Login</div>
                </div>
           </div>
        </Container>

         {/* Sticky Header */}
         {
          (stickyHeaderShow) &&
          <NavBar sticky={true}/>
        }




         <NavBar/>


          <div style={{marginTop:(isTabletOrMobile) ? 80:100,marginBottom:(isTabletOrMobile) ? 80:100}}>
            <Container>
                  <Row>
                     <Col lg={6} style={{paddingLeft:20,paddingRight:20}}>
                        <div style={{backgroundColor:"white",boxShadow:"0 0 15px -10px rgba(0,0,0,0.7)",padding:25}}>
                            <div style={{fontWeight:"bold",fontSize:22}}>MASUK</div>
                            <div style={{marginTop:25}}>
                                <div style={{fontWeight:"bold"}}>Alamat email / Username</div>
                                <Form.Control id="inputID" style={{marginTop:10,fontSize:15}} type="text" placeholder="padangperwirayudha@gmail.com" />
                            </div>
                            <div style={{marginTop:15}}>
                                <div style={{fontWeight:"bold"}}>Kata sandi</div>
                                <Form.Control id="inputID"  style={{marginTop:10,fontSize:15}} placeholder="Masukkan kata sandi" type="password" />
                            </div>
                            <div style={{marginTop:39,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                <div style={{fontSize:14}}>
                                <div class="form-check">
                                <input class="form-check-input" 
                                onChange={(e)=>{
                                    alert(e.target.checked);
                                }}
                                type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Ingatkan saya
                                </label>
                                </div>
                                </div>
                                <div style={{color:"#23b697",fontSize:13}}>Lupa kata sandi?</div>
                            </div>
                            <div style={{marginTop:30,marginBottom:20}}>
                                <div style={{backgroundColor:"#23b697",color:"white",borderRadius:10,textAlign:"center",padding:5,paddingTop:10,paddingBottom:10}}>
                                    Masuk
                                </div>
                            </div>
                        </div>
                     </Col>
                     <Col lg={6}>
                     <div style={{backgroundColor:"white",boxShadow:"0 0 15px -10px rgba(0,0,0,0.7)",padding:25}}>
                            <div style={{fontWeight:"bold",fontSize:22}}>REGISTER</div>
                            <div style={{marginTop:25}}>
                                <div style={{fontWeight:"bold"}}>Nama</div>
                                <Form.Control id="inputID" style={{marginTop:10,fontSize:15}} type="text" placeholder="Padang Perwira Yudha" />
                            </div>
                            <div style={{marginTop:20}}>
                                <div style={{fontWeight:"bold"}}>Username</div>
                                <Form.Control id="inputID" style={{marginTop:10,fontSize:15}} type="text" placeholder="padangpy" />
                            </div>
                            <div style={{marginTop:20}}>
                                <div style={{fontWeight:"bold"}}>Nickname</div>
                                <Form.Control id="inputID" style={{marginTop:10,fontSize:15}} type="text" placeholder="perwirayudha" />
                            </div>
                            <div style={{marginTop:20}}>
                                <div style={{fontWeight:"bold"}}>Email</div>
                                <Form.Control id="inputID" style={{marginTop:10,fontSize:15}} type="text" placeholder="padang.yudha@gmail.com" />
                            </div>
                            <div style={{marginTop:20}}>
                                <div style={{fontWeight:"bold"}}>No. Telepon</div>
                                <Form.Control id="inputID" style={{marginTop:10,fontSize:15}} type="text" placeholder="082180344523" />
                            </div>
                            <div style={{marginTop:20}}>
                                <div style={{fontWeight:"bold"}}>Kata Sandi</div>
                                <Form.Control id="inputID" style={{marginTop:10,fontSize:15}} type="password" placeholder="Masukkan kata sandi" />
                            </div>
                            <div style={{marginTop:20}}>
                                <div style={{fontWeight:"bold"}}>Konfirmasi Kata Sandi</div>
                                <Form.Control id="inputID" style={{marginTop:10,fontSize:15}} type="password" value={55} placeholder="Konfirmasi kata sandi" />
                            </div>
                            <div style={{marginTop:30,marginBottom:20}}>
                                <div style={{backgroundColor:"#23b697",color:"white",borderRadius:10,textAlign:"center",padding:5,paddingTop:10,paddingBottom:10}}>
                                    Daftar
                                </div>
                            </div>
                        </div>
                     </Col>
                  </Row>
              </Container>
          </div>
          <Footer/>
    </div>
  )
}