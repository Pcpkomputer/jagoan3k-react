import { useEffect, useState, useContext } from 'react';

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

import { GlobalContext } from '../App';

export default function Footer(){

// Call center : 021-50812002 
// WA : 0813-7747-5503 & 08116565850
// Email : pjk3limaindo@gmail.com 
// Jam kerja : 08.15-17.00
// IG : @Limaprimasolusindo 
// Yt : limaprimasolusindo
// Fb : limaprimasolusindo


  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })

  let globalContext = useContext(GlobalContext);

  useEffect(()=>{
    console.log(globalContext.linkmobile.android.link);
  },[])

//   useEffect(()=>{
//     console.log();
//   },[])

    return (
        <div>
        <Container fluid={true} style={{padding:0,backgroundColor:"#26b495",paddingTop:30}}>
              <Container>
                  <Row style={{paddingBottom:40}}>
                        <Col lg={4} 
                       dangerouslySetInnerHTML={{__html:globalContext.hubungiKamiHTML.html}}
                        style={{color:"white",marginBottom:40,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                        </Col>
                        <Col 
                        dangerouslySetInnerHTML={{__html:globalContext.alamatKamiHTML.html}}
                        lg={4} style={{color:"white",marginBottom:40,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                        </Col>
                        <Col lg={4} style={{color:"white"}}>
                            <Row>
                                <Col lg={6} style={{marginBottom:40,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                                <div style={{fontSize:25,color:"white",fontWeight:"bold"}}>
                                    Bantuan
                                </div>
                                <div style={{display:"flex",flexDirection:"column",marginTop:20}}>
                                    <Link style={{color:"white"}} to="/bantuan/hubungikami">Hubungi Kami</Link>
                                    <Link style={{color:"white"}} to="/bantuan/syaratdanketentuan">Syarat dan Ketentuan</Link>
                                    <Link style={{color:"white"}} to="/bantuan/faq">FAQ</Link>
                                    <Link style={{color:"white"}} to="/bantuan/sosialmedia">SOSIAL MEDIA</Link>
                                </div>
                                </Col>
                                <Col lg={6} style={{marginBottom:40,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                                <div style={{fontSize:25,color:"white",fontWeight:"bold"}}>
                                    Sosial Media
                                </div>
                                <div style={{display:"flex",flexDirection:"column",marginTop:20}}>
                                    <div style={{display:"flex",marginBottom:15,flexDirection:"row"}}>
                                        <a href="https://web.facebook.com/pj3klimaprima/"><img style={{marginRight:10}} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjYiIGN5PSIyNiIgcj0iMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIyNiIgY3k9IjI2IiByPSIxOC43NDQyIiBmaWxsPSIjMzQ1MzlCIi8+CjxwYXRoIGQ9Ik0yNy4wNTgzIDIzLjk1OTRWMjEuODQzMUMyNy4wNTgzIDIxLjI1OSAyNy41MzIzIDIwLjc4NSAyOC4xMTY0IDIwLjc4NUgyOS4xNzQ2VjE4LjEzOTZIMjcuMDU4M0MyNS4zMDQ5IDE4LjEzOTYgMjMuODgzOSAxOS41NjA3IDIzLjg4MzkgMjEuMzE0MVYyMy45NTk0SDIxLjc2NzZWMjYuNjA0OEgyMy44ODM5VjM1LjA2OTlIMjcuMDU4M1YyNi42MDQ4SDI5LjE3NDZMMzAuMjMyNyAyMy45NTk0SDI3LjA1ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"></img></a>
                                        <a href="http://wa.me/081377475503"><img style={{marginRight:10}} src="https://midiatama.co.id/_nuxt/img/wa.86a926d.svg"></img></a>
                                        <a href="https://www.instagram.com/Limaprimasolusindo"><img style={{marginRight:10}} src="https://midiatama.co.id/_nuxt/img/ig.9259718.svg"></img></a>
                                    </div>
                                    {/* <div style={{display:"flex",flexDirection:"row"}}>
                                        <img style={{marginRight:10}} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjYiIGN5PSIyNiIgcj0iMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIyNiIgY3k9IjI2IiByPSIxOC43NDQyIiBmaWxsPSIjMzQ1MzlCIi8+CjxwYXRoIGQ9Ik0yNy4wNTgzIDIzLjk1OTRWMjEuODQzMUMyNy4wNTgzIDIxLjI1OSAyNy41MzIzIDIwLjc4NSAyOC4xMTY0IDIwLjc4NUgyOS4xNzQ2VjE4LjEzOTZIMjcuMDU4M0MyNS4zMDQ5IDE4LjEzOTYgMjMuODgzOSAxOS41NjA3IDIzLjg4MzkgMjEuMzE0MVYyMy45NTk0SDIxLjc2NzZWMjYuNjA0OEgyMy44ODM5VjM1LjA2OTlIMjcuMDU4M1YyNi42MDQ4SDI5LjE3NDZMMzAuMjMyNyAyMy45NTk0SDI3LjA1ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"></img>
                                        <img style={{marginRight:10}} src="https://midiatama.co.id/_nuxt/img/wa.86a926d.svg"></img>
                                        <img style={{marginRight:10}} src="https://midiatama.co.id/_nuxt/img/ig.9259718.svg"></img>
                                    </div> */}
                                </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} style={{paddingLeft:(isTabletOrMobile) ? 25:null}}>
                                    <div style={{fontSize:25,color:"white",fontWeight:"bold"}}>
                                        Download Aplikasi
                                    </div>
                                    <div style={{marginTop:20}}>
                                       <a href={globalContext.linkmobile.android.link}><img src="https://midiatama.co.id/_nuxt/img/gp.79741d9.svg">{globalContext.linkmobile.android.url}</img></a>
                                       <a href={globalContext.linkmobile.ios.link}><img src="https://midiatama.co.id/_nuxt/img/as.190ce99.svg"></img></a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                  </Row>
                  <Row style={{borderBottom:"solid 2px white"}}></Row>
                  <Row style={{paddingTop:30,paddingBottom:30,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <div style={{color:"white"}}>© 2021 All rights reserved. Jagoan K3</div>
                        <div style={{color:"white"}}>Powered by Limaprimasolusindo</div>

                        </div>
                       
                  </Row>
              </Container>
        </Container>
      </div>

    )
}