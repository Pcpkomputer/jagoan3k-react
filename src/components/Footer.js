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

export default function Footer(){


  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })

  
    return (
        <div>
        <Container fluid={true} style={{padding:0,backgroundColor:"#26b495",paddingTop:30}}>
              <Container>
                  <Row style={{paddingBottom:40}}>
                        <Col lg={4} style={{color:"white",marginBottom:40,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                          <div style={{fontSize:25,color:"white",fontWeight:"bold"}}>
                              Hubungi Kami
                          </div>
                          <div style={{display:"grid",marginTop:20,gridRowGap:20,gridTemplateColumns:"100px auto"}}>
                              <div style={{fontWeight:"bold"}}>TELEPON</div>
                              <div>(021) 22545432 (Jam Kerja)<br></br>(021) 21263820 (24 Jam)</div>
                              
                              <div style={{fontWeight:"bold"}}>WHATSAPP 24 JAM</div>
                              <div>
                              0815-32705432<br></br>
                              0812-73708811<br></br>
                              0815-17278777<br></br>
                              0821-25012338<br></br>
                              </div>

                              <div style={{fontWeight:"bold"}}>EMAIL</div>
                              <div>pjk3midiatama@gmail.com<br></br>info@midiatama.co.id</div>
                          </div>
                        </Col>
                        <Col lg={4} style={{color:"white",marginBottom:40,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                        <div style={{fontSize:25,color:"white",fontWeight:"bold"}}>
                              Alamat Kami
                          </div>
                          <div style={{display:"grid",marginTop:20,gridRowGap:20,gridTemplateColumns:"auto"}}>
                              <div>PT. Mitra Dinamis Yang Utama (PJK3 Midiatama Academy) Gedung Wisma Presisi, Lantai 1 No. 4, Jalan Taman Aries RT.5/RW.2 Meruya Utara Kembangan Jakarta Barat 11620</div>

                              <div style={{display:"grid",gridTemplateColumns:"100px auto"}}>
                                  <div style={{fontWeight:"bold"}}>Website</div>
                                  <div>
                                  https://midiatama.co.id/<br></br>
                                  </div>
                              </div>

                              <div style={{display:"grid",gridTemplateColumns:"100px auto"}}>
                                  <div style={{fontWeight:"bold"}}>Jam Kerja</div>
                                  <div>
                                  08.00 WIB - 17.00 WIB<br></br>
                                  </div>
                              </div>
                          </div>
                        </Col>
                        <Col lg={4} style={{color:"white"}}>
                            <Row>
                                <Col lg={6} style={{marginBottom:40,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                                <div style={{fontSize:25,color:"white",fontWeight:"bold"}}>
                                    Bantuan
                                </div>
                                <div style={{display:"flex",flexDirection:"column",marginTop:20}}>
                                    <a>Hubungi Kami</a>
                                    <a>Syarat dan Ketentuan</a>
                                    <a>FAQ</a>
                                    <a>SOSIAL MEDIA</a>
                                </div>
                                </Col>
                                <Col lg={6} style={{marginBottom:40,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                                <div style={{fontSize:25,color:"white",fontWeight:"bold"}}>
                                    Sosial Media
                                </div>
                                <div style={{display:"flex",flexDirection:"column",marginTop:20}}>
                                    <div style={{display:"flex",marginBottom:15,flexDirection:"row"}}>
                                        <img style={{marginRight:10}} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjYiIGN5PSIyNiIgcj0iMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIyNiIgY3k9IjI2IiByPSIxOC43NDQyIiBmaWxsPSIjMzQ1MzlCIi8+CjxwYXRoIGQ9Ik0yNy4wNTgzIDIzLjk1OTRWMjEuODQzMUMyNy4wNTgzIDIxLjI1OSAyNy41MzIzIDIwLjc4NSAyOC4xMTY0IDIwLjc4NUgyOS4xNzQ2VjE4LjEzOTZIMjcuMDU4M0MyNS4zMDQ5IDE4LjEzOTYgMjMuODgzOSAxOS41NjA3IDIzLjg4MzkgMjEuMzE0MVYyMy45NTk0SDIxLjc2NzZWMjYuNjA0OEgyMy44ODM5VjM1LjA2OTlIMjcuMDU4M1YyNi42MDQ4SDI5LjE3NDZMMzAuMjMyNyAyMy45NTk0SDI3LjA1ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"></img>
                                        <img style={{marginRight:10}} src="https://midiatama.co.id/_nuxt/img/wa.86a926d.svg"></img>
                                        <img style={{marginRight:10}} src="https://midiatama.co.id/_nuxt/img/ig.9259718.svg"></img>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"row"}}>
                                        <img style={{marginRight:10}} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjYiIGN5PSIyNiIgcj0iMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIyNiIgY3k9IjI2IiByPSIxOC43NDQyIiBmaWxsPSIjMzQ1MzlCIi8+CjxwYXRoIGQ9Ik0yNy4wNTgzIDIzLjk1OTRWMjEuODQzMUMyNy4wNTgzIDIxLjI1OSAyNy41MzIzIDIwLjc4NSAyOC4xMTY0IDIwLjc4NUgyOS4xNzQ2VjE4LjEzOTZIMjcuMDU4M0MyNS4zMDQ5IDE4LjEzOTYgMjMuODgzOSAxOS41NjA3IDIzLjg4MzkgMjEuMzE0MVYyMy45NTk0SDIxLjc2NzZWMjYuNjA0OEgyMy44ODM5VjM1LjA2OTlIMjcuMDU4M1YyNi42MDQ4SDI5LjE3NDZMMzAuMjMyNyAyMy45NTk0SDI3LjA1ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"></img>
                                        <img style={{marginRight:10}} src="https://midiatama.co.id/_nuxt/img/wa.86a926d.svg"></img>
                                        <img style={{marginRight:10}} src="https://midiatama.co.id/_nuxt/img/ig.9259718.svg"></img>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} style={{paddingLeft:(isTabletOrMobile) ? 25:null}}>
                                    <div style={{fontSize:25,color:"white",fontWeight:"bold"}}>
                                        Download Aplikasi
                                    </div>
                                    <div style={{marginTop:20}}>
                                      <img src="https://midiatama.co.id/_nuxt/img/gp.79741d9.svg"></img>
                                      <img src="https://midiatama.co.id/_nuxt/img/as.190ce99.svg"></img>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                  </Row>
                  <Row style={{borderBottom:"solid 2px white"}}></Row>
                  <Row style={{paddingTop:30,paddingBottom:30,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <div style={{color:"white"}}>© 2021 All rights reserved. HSE PRIME</div>
                        <div style={{color:"white"}}>Powered by Midiatama</div>

                        </div>
                       
                  </Row>
              </Container>
        </Container>
      </div>

    )
}