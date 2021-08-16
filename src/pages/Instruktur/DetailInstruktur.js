import { useEffect, useState } from 'react';

import { Container, Row, Col, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../custom.css";

import { useMediaQuery } from 'react-responsive'
import Slider from "react-slick";
import { useLocation } from 'react-router';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import {Helmet} from "react-helmet";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Footer from '../../components/Footer';
import NavBar from '../../components/Navbar';


export default function Detailnstruktur(props){

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })

  let params = useParams();

  let [videoLoaded, setVideoLoaded] = useState(false);

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


let settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: (max991) ? 1:(max1400) ? 2:3,
  slidesToScroll: (max991) ? 1:(max1400) ? 2:3,
  
};


  let [stickyHeaderShow, setStickyHeaderShow] = useState(false);

  return (
    <div style={{fontFamily:"Poppins, sans-serif"}}>
      <Helmet>
                <meta charSet="utf-8" />
                <script defer type="text/javascript" src="../jquery.js"/>
                <script  defer src="../owl_carousel/owl.carousel.min.js"></script>
                <script>
                   window.$ = $;
                </script>
            </Helmet>
        <Container fluid={true} style={{margin:0,padding:0,backgroundColor:"whitesmoke",background:"url('https://midiatama.co.id/_nuxt/img/bg-instruktor.5a82ee0.png')",height:300}}>
           <div style={{position:"absolute",zIndex:1,width:"100%",height:300,backgroundColor:"black",opacity:0.5}}></div>

           <div style={{width:"100%",position:"absolute",zIndex:100,height:300,display:"flex",justifyContent:"center",paddingLeft:(isTabletOrMobile) ? 80:150,paddingRight:150,flexDirection:"column"}}>
                <div style={{fontSize:35,letterSpacing:5,fontWeight:"bold",color:"white"}}>INSTRUKTUR</div>
                <div style={{marginTop:10,display:"flex",alignItems:"center",flexDirection:"row"}}>
                    <div style={{color:"white", marginRight:10}}>Home</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white",marginRight:10}}>Instruktur</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white"}}>Detail Instruktur</div>
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
                      <Col lg={4} style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                          <div style={{backgroundColor:"#e8e8e8",borderRadius:999,height:300,width:300}}></div>
                          <div style={{marginTop:30,textAlign:"center",fontSize:20,fontWeight:"bold"}}>Ir. Lazuardi Nurdin, CSP</div>
                          <div style={{marginTop:20,padding:10,borderRadius:10,backgroundColor:"#27b394",color:"white"}}>Instruktur</div>
                          <div style={{borderBottom:"solid 1px grey",marginTop:40,marginBottom:50,width:"100%",height:1}}></div>
                      </Col>
                      <Col lg={8} style={{paddingLeft:(isTabletOrMobile) ? 20:40}}>
                          <h4 style={{fontWeight:"bold"}}>Tentang Muhammad Deny, ST, M.Eng</h4>
                          <div style={{marginTop:20,lineHeight:2}}>
                          Bapak Muhammad Deny selaku salahsatu Manajemen Midiatama yang juga sebagai Instruktur Spesialis Topik Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) berdasarkan PP No.50 Tahun 2012.
                          </div>
                          <h4 style={{fontWeight:"bold",marginTop:25}}>Instruktur</h4>
                          {
                            (videoLoaded===false) &&
                            <div style={{width:"100%",height:450,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                   <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",padding:15,boxShadow:"2px 9px 25px 2px rgba(0,0,0,0.1)"}}> 
                                    Sedang Memuat Video
                                    <Spinner style={{marginLeft:15}} size="sm" animation="border" variant="primary" />
                                    </div>
                            </div>
                          }
                          <iframe 
                            onLoad={()=>{
                              setVideoLoaded(true);
                            }}
                            width="100%" height="450" style={{padding:30,display:(videoLoaded) ? null:"none",paddingLeft:0}}
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                          <h4 style={{fontWeight:"bold",marginTop:25}}>Mulai belajar dengan instruktur lainnya</h4>
                          
                          <Slider {...settings} style={{paddingTop:10,paddingBottom:10,marginTop:40}}>
                                {
                                  [1,2,3,4,5].map(()=>{
                                    return (
                                      <div style={{backgroundColor:"white",height:"100%"}}>
                                          <div style={{backgroundColor:"whitesmoke",height:300,marginRight:20}}>

                                          </div>
                                      </div>
                                    )
                                  })
                                }
                              </Slider>
                      </Col>
                  </Row>
              </Container>
          </div>
          <Footer/>
    </div>
  )
}