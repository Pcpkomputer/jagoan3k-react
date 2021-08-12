import { useEffect, useState, useCallback } from 'react';

import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../custom.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import '../css/Training.css';

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

import { DateRange } from 'react-date-range';

import Footer from '../components/Footer';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      console.log('totally custom!');
    }
    );
  
    return (
      <button
        type="button"
        style={{backgroundColor:"white",textAlign:"left",paddingTop:10,paddingBottom:10,border:"none",borderTop:"solid 1px grey" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

function Accordions(){
    return (
        <Accordion style={{paddingBottom:100}} defaultActiveKey="-1">
        <Card style={{border:"none"}}>
          <CustomToggle eventKey="0">
              <div>Sertifikat Kemnaker RI</div>
          </CustomToggle>
          <Accordion.Collapse eventKey="0">
            <div style={{paddingLeft:30,paddingRight:30,paddingBottom:10,paddingTop:10}}>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat A</div>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat B</div>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat C</div>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat D</div>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat E</div>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card style={{border:"none"}}>
          <CustomToggle eventKey="1">
              <div>Sertifikat BNSP</div>
          </CustomToggle>
          <Accordion.Collapse eventKey="1">
            <div style={{paddingLeft:30,paddingRight:30,paddingBottom:10,paddingTop:10}}>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat A</div>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat B</div>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat C</div>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat D</div>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat E</div>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card style={{border:"none"}}>
          <CustomToggle eventKey="2">
              <div>Sertifikat BNSP</div>
          </CustomToggle>
          <Accordion.Collapse eventKey="2">
            <div style={{paddingLeft:30,paddingRight:30,paddingBottom:10,paddingTop:10}}>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat A</div>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat B</div>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat C</div>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat D</div>
                <div style={{fontSize:13,marginBottom:10}}>Sertifikat E</div>
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
}


export default function Training(props){

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

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);


  let [stickyHeaderShow, setStickyHeaderShow] = useState(false);

  return (
    <div style={{fontFamily:"Poppins, sans-serif"}}>
        <Container fluid={true} style={{margin:0,padding:0,backgroundColor:"whitesmoke",background:"url(https://midiatama.co.id/_nuxt/img/bg-training.7cc257e.png)",height:300}}>
           <div style={{position:"absolute",zIndex:1,width:"100%",height:300,backgroundColor:"black",opacity:0.5}}></div>

           <div style={{width:"100%",position:"absolute",zIndex:100,height:300,display:"flex",justifyContent:"center",paddingLeft:150,paddingRight:150,flexDirection:"column"}}>
                <div style={{fontSize:35,letterSpacing:5,fontWeight:"bold",color:"white"}}>TRAINING</div>
                <div style={{marginTop:10,display:"flex",alignItems:"center",flexDirection:"row"}}>
                    <div style={{color:"white", marginRight:10}}>Home</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white"}}>Training</div>
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


          <div style={{marginTop:100,marginBottom:100,paddingLeft:20,paddingRight:20}}>
            <Container>
                  <Row>
                      <Col lg={4}>
                          <div style={{border:"solid 1px #e8e8e8",padding:20,borderRadius:5}}>
                              <div style={{color:"black",fontWeight:"bold",marginBottom:20}}>Jadwal Training</div>
                              <DateRange
                               editableDateInputs={true}
                               onChange={item => setState([item.selection])}
                               moveRangeOnFirstSelection={false}
                               ranges={state}
                              />
                               <div style={{color:"black",fontWeight:"bold",marginTop:40,marginBottom:20}}>Kategori Training</div>
                                <Accordions/>
                          </div>
                      </Col>
                      <Col lg={8}>
                          <div style={{paddingLeft:30,paddingRight:30}}>
                                <div style={{fontSize:30,paddingBottom:10,borderBottom:"solid 1px black",fontWeight:"bold"}}>AHLI K3 UMUM</div>
                                <div style={{marginTop:30,gridRowGap:20,display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
                                    <div>asdasd</div>
                                    <div>asdasd</div>
                                    <div>asdasd</div>
                                    <div>asdasd</div>
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