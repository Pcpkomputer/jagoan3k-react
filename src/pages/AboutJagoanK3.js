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


export default function AboutJagoanK3(props){

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
        <Container fluid={true} style={{margin:0,padding:0,backgroundColor:"whitesmoke",background:"url('https://midiatama.co.id/_nuxt/img/bg-1.df32a04.jpg')",height:300}}>
           <div style={{position:"absolute",zIndex:1,width:"100%",height:300,backgroundColor:"black",opacity:0.5}}></div>

           <div style={{width:"100%",position:"absolute",zIndex:100,height:300,display:"flex",justifyContent:"center",paddingLeft:150,paddingRight:150,flexDirection:"column"}}>
                <div style={{fontSize:35,letterSpacing:5,fontWeight:"bold",color:"white"}}>JAGOAN K3</div>
                <div style={{marginTop:10,display:"flex",alignItems:"center",flexDirection:"row"}}>
                    <div style={{color:"white", marginRight:10}}>Home</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white"}}>Jagoan K3</div>
                </div>
           </div>
        </Container>

         {/* Sticky Header */}
         {
          (stickyHeaderShow) &&
          <div style={{backgroundColor:"#24b798",position:"fixed",width:"100%",top:0,zIndex:9999}}>
          <Container style={{height:"100%",padding:20}}>
              <Row style={{height:"100%"}}>
                  <Col lg={(max991) ? 12:1} style={{alignItems:"center",display:"flex"}}>
                      {
                        (max991) ?
                        <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:40,position:"absolute",border:"solid 5px #23b697",marginTop:20,height:80,width:80,borderRadius:999,zIndex:100}}>
                          <div>Logo</div>
                        </div> 
                        :
                        <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:40,position:"absolute",border:"solid 5px #23b697",height:80,width:80,borderRadius:999,zIndex:100}}>
                         <div>Logo</div>
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
                      <Link to="/" style={{color:"white",textDecoration:"none"}}>Home</Link>
                      <Link to="/jagoank3" style={{color:"white",textDecoration:"none"}}>Jagoan K3</Link>
                      <Link to="/training" style={{color:"white",textDecoration:"none"}}>Training</Link>
                      <div>Karir</div>
                      <div>Galeri</div>
                      <div>Artikel</div>
                      <div>Login</div>
                  </Col>
                  }
              </Row>
          </Container>
      </div>

        }




          <div id="header" style={{backgroundColor:"#24b798"}}>
              <Container style={{height:"100%",padding:20}}>
                  <Row style={{height:"100%"}}>
                      <Col lg={(max991) ? 12:1} style={{alignItems:"center",display:"flex"}}>
                          {
                            (max991) ?
                            <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:40,position:"absolute",border:"solid 5px #23b697",marginTop:20,height:80,width:80,borderRadius:999,zIndex:100}}>
                              <div>Logo</div>
                            </div> 
                            :
                            <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:40,position:"absolute",border:"solid 5px #23b697",height:80,width:80,borderRadius:999,zIndex:100}}>
                             <div>Logo</div>
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
                          <Link to="/" style={{color:"white",textDecoration:"none"}}>Home</Link>
                          <Link to="/jagoank3" style={{color:"white",textDecoration:"none"}}>Jagoan K3</Link>
                          <Link to="/training" style={{color:"white",textDecoration:"none"}}>Training</Link>
                          <div>Karir</div>
                          <div>Galeri</div>
                          <div>Artikel</div>
                          <div>Login</div>
                      </Col>
                      }
                  </Row>
              </Container>
          </div>


          <div style={{marginTop:100,marginBottom:100}}>
            <Container>
                  <Row>
                      <Col lg={6} style={{paddingLeft:(isTabletOrMobile) ? 30:null,paddingRight:(isTabletOrMobile) ? 30:null}}>
                         <div style={{width:"100%",height:"100%",display:"flex",paddingRight:60,justifyContent:"center",alignItems:"center"}}>
                              {
                                (max991) ?
                                null
                                :
                                <img  style={{width:480,height:480}} src="https://apimicca.midiatama.co.id/storage/konten-home/gambar1/bageur-901210621043226.png"></img>
                              }
                          </div>
                      </Col>
                      <Col lg={6} style={{paddingLeft:(isTabletOrMobile) ? 30:null,paddingRight:(isTabletOrMobile) ? 30:null}}>
                            <div style={{paddingTop:50,height:"100%",display:"flex",alignItems:"center"}}>
                                    <div>
                                        <h2 style={{fontWeight:"bold"}}>
                                          Tentang Jagoan K3
                                        </h2>
                                        <h3 style={{fontWeight:"bold"}}>Sudah Mengikuti Sertifikasi K3 Bersama Kami</h3>
                                        <div style={{marginTop:30}}>
                                        Midiatama Academy merupakan sebuah perusahaan yang bergerak di bidang Pelatihan (Pembinaan), Sertifikasi dan Konsultansi K3 yang telah ditunjuk oleh Kementrian Ketenagakerjaan RI berupa Surat Keterangan Penunjukkan (SKP). Midiatama memberikan Kepastian pelaksanaan dengan Jaminan Kompetensi yang sesuai dengan bidang dan bakat seseorang untuk dapat bekerja di sebuah perusahaan besar seperti BUMN, Konstruksi, Pertambangan, Minyak, Gas Bumi dan Manufaktur
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