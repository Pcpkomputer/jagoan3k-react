import { useEffect, useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../custom.css";

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


export default function Artikel(props){

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
        <Container fluid={true} style={{margin:0,padding:0,backgroundColor:"whitesmoke",background:"url('https://midiatama.co.id/_nuxt/img/bg-artikel.14b54ae.png')",height:300}}>
           <div style={{position:"absolute",zIndex:1,width:"100%",height:300,backgroundColor:"black",opacity:0.5}}></div>

           <div style={{width:"100%",position:"absolute",zIndex:100,height:300,display:"flex",justifyContent:"center",paddingLeft:(isTabletOrMobile) ? 80:150,paddingRight:150,flexDirection:"column"}}>
                <div style={{fontSize:35,letterSpacing:5,fontWeight:"bold",color:"white"}}>ARTIKEL</div>
                <div style={{marginTop:10,display:"flex",alignItems:"center",flexDirection:"row"}}>
                    <div style={{color:"white", marginRight:10}}>Home</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white"}}>Artikel</div>
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
            <Container style={{paddingLeft:(isTabletOrMobile) ? 25:undefined,paddingRight:(isTabletOrMobile) ? 25:undefined}}>
                  <Row>
                        <Col lg={8}>
                            <h2 style={{fontWeight:"bold"}}>ARTIKEL</h2>
                            <div style={{marginTop:40}}>
                                <Row style={{paddingRight:(isTabletOrMobile) ? 0:50}}>
                                   
                                   {
                                       [1,2,3,4,5].map((item,index)=>{
                                           return (
                                            <Col lg={6} style={{paddingRight:12,marginBottom:35,paddingLeft:12}}>
                                                <div style={{backgroundColor:"white",overflow:"hidden",borderRadius:20,boxShadow:"0 .125rem .25rem rgba(0,0,0,.1)"}}>
                                                    <div style={{display:"relative",background:"linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(24,24,184,0) 0%, rgba(255,255,255,1) 100%)"}}>
                                                        <div style={{position:"relative"}}>
                                                            <div style={{position:"absolute",width:"100%",backgroundImage:"linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",height:30,bottom:0}}></div>
                                                            <img src="https://mos.is3.cloudhost.id/artikel/bageur-258210721044842.jpeg" style={{width:"100%",height:250}}></img>
                                                        </div>
                                                    </div>
                                                    <div style={{padding:20}}>
                                                        <div style={{fontWeight:"bold"}}>Kategori #1</div>
                                                        <div style={{marginTop:20,marginBottom:20,fontWeight:"bold"}}>Bagaimana prosedur pemilihan gubernur yang baik?</div>
                                                        <div style={{fontSize:13,marginBottom:30}}>
                                                            {
                                                                index===1 ? "Izin kerja biasanya dibuat rangkap dua atau rangkap tiga. Ketika dibuat rangkap dua, satu salinan disimpan sebagai dokumentasi dan satu salinan lagi d...":
                                                                "Izin kerja biasanya dibIzin kerja biasanya dibuat rangkap dua atau rangkap tiga. Ketika dibuat rangkap dua, satu salinan disimpan sebagai dokumentasi dan satu salinan lagi d...uat rangkap dua atau rangkap tiga. Ketika dibuat rangkap dua, satu salinan disimpan sebagai dokumentasi dan satu salinan lagi d...Izin kerja biasanya dibuat rangkap dua atau rangkap tiga. Ketika dibuat rangkap dua, satu salinan disimpan sebagai dokumentasi dan satu salinan lagi d..."
                                                            }
                                                        </div>
                                                        <div style={{fontSize:10}}>2 Agustus 2021 - 4 Mins Read - 3x</div>
                                                        <div style={{marginTop:30,marginBottom:10,borderRadius:20,border:"solid 2.5px #23b697",padding:"10px 15px 10px 15px",marginLeft:50,marginRight:50,textAlign:"center",fontWeight:"bold", color:"#23b697"}}>Lihat Selengkapnya</div>
                                                    </div>
                                                </div>
                                            </Col>
                                           )
                                       })
                                   }
                                    
                                </Row>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div>
                                <h3 style={{fontWeight:"bold",fontSize:25,borderBottom:"solid 1px #e8e8e8",paddingBottom:20}}>ARTIKEL POPULER</h3>
                            </div>
                            <div style={{display:"flex",flexDirection:"column"}}>
                                <div style={{backgroundColor:"white",marginTop:30,boxShadow:"rgb(0 0 0 / 10%) 0px 0.125rem 0.25rem",borderRadius:10,overflow:"hidden",display:"flex",flexDirection:"row",maxHeight:160}}>
                                    <div style={{flex:1,padding:20}}>
                                        <div style={{maxWidth:220,maxHeight:90,overflow:"hidden",wordWrap:"break-word",fontSize:15,paddingRight:20,fontWeight:"bold"}}>Bagaimana prosesyang asddaaddakdaldkladkladksladklasdklakdlklakdlakdlakdlsakldsadadadadaasdsadsadasdsadsadadamdadmkamkdmabaik?</div>
                                        <div style={{marginTop:10,fontSize:13,marginBottom:30}}>01 Juli 2021 - 32 Views</div>
                                    </div>
                                    <div style={{padding:10,display:"flex",paddingLeft:20,paddingRight:20,justifyContent:"center",alignItems:"center"}}>
                                        <img  src="https://mos.is3.cloudhost.id/artikel/bageur-258210721044842.jpeg" style={{width:120,height:120,borderRadius:20}}></img>
                                    </div>
                                    
                                </div>
                                <div style={{backgroundColor:"white",marginTop:30,boxShadow:"rgb(0 0 0 / 10%) 0px 0.125rem 0.25rem",borderRadius:10,overflow:"hidden",display:"flex",flexDirection:"row",maxHeight:160}}>
                                    <div style={{flex:1,padding:20}}>
                                        <div style={{maxWidth:220,maxHeight:90,overflow:"hidden",wordWrap:"break-word",fontSize:15,paddingRight:20,fontWeight:"bold"}}>Bagaimana prosesyang asddaaddakdaldkladkladksladklasdklakdlklakdlakdlakdlsakldsadadadadaasdsadsadasdsadsadadamdadmkamkdmabaik?</div>
                                        <div style={{marginTop:10,fontSize:13,marginBottom:30}}>01 Juli 2021 - 32 Views</div>
                                    </div>
                                    <div style={{padding:10,display:"flex",paddingLeft:20,paddingRight:20,justifyContent:"center",alignItems:"center"}}>
                                        <img  src="https://mos.is3.cloudhost.id/artikel/bageur-258210721044842.jpeg" style={{width:120,height:120,borderRadius:20}}></img>
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