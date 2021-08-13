import { useEffect, useState, useCallback } from 'react';

import { Container, Row, Col, Accordion, Card, Spinner } from 'react-bootstrap';
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
import NavBar from '../components/Navbar';

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

  let [dataIsLoading, setDataIsLoading] = useState(true);
  let [pelatihan, setPelatihan] = useState([]);

  useEffect(()=>{
      setTimeout(() => {
          setDataIsLoading(false);
          setPelatihan([1,2,3,4]);
      }, 500);
  },[])

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

           <div style={{width:"100%",position:"absolute",zIndex:100,height:300,display:"flex",justifyContent:"center",paddingLeft:(isTabletOrMobile) ? 70:150,paddingRight:150,flexDirection:"column"}}>
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
          <NavBar sticky={true}/>

        }


          <NavBar/>

          <div style={{marginTop:(isTabletOrMobile) ? 50:100,marginBottom:100,paddingLeft:20,paddingRight:20}}>
            <Container>
                  <Row style={{display:"flex"}}>
                      <Col lg={4} style={{marginBottom:50}}>
                          <div style={{border:"solid 1px #e8e8e8",padding:20,borderRadius:5}}>
                              <div style={{color:"black",fontWeight:"bold",marginBottom:20}}>Jadwal Training</div>
                              <DateRange
                               editableDateInputs={true}
                               onChange={item => setState([item.selection])}
                               moveRangeOnFifrstSelection={false}
                               ranges={state}
                              />
                               <div style={{color:"black",fontWeight:"bold",marginTop:40,marginBottom:20}}>Kategori Training</div>
                                <Accordions/>
                          </div>
                      </Col>
                      <Col lg={8}>
                          <div style={{paddingLeft:30,paddingRight:30}}>
                                <div style={{fontSize:30,paddingBottom:10,borderBottom:"solid 1px black",fontWeight:"bold"}}>AHLI K3 UMUM</div>
                                {
                                  (!dataIsLoading && pelatihan.length===0) &&
                                  <div style={{paddingTop:70,justifyContent:"center",alignItems:"center",display:"flex"}}>
                                      <div style={{backgroundColor:"white",padding:15,boxShadow:"2px 9px 25px 2px rgba(0,0,0,0.1)"}}> 
                                        Data tidak ditemukan
                                      </div>
                                  </div>
                                }
                                {
                                  (dataIsLoading) &&
                                  <div style={{paddingTop:70,justifyContent:"center",alignItems:"center",display:"flex"}}>
                                      <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",padding:15,boxShadow:"2px 9px 25px 2px rgba(0,0,0,0.1)"}}> 
                                        Sedang Memuat Data
                                        <Spinner style={{marginLeft:15}} size="sm" animation="border" variant="primary" />
                                      </div>
                                  </div>
                                }
                                
                                {
                                  (!dataIsLoading) &&
                                  <div style={{marginTop:30,gridRowGap:40,gridColumnGap:40,display:"grid",gridTemplateColumns:(isTabletOrMobile) ? "1fr":(max991) ? "1fr 1fr":(max1400) ? "1fr 1fr":"1fr 1fr 1fr"}}>
                                    {
                                      (pelatihan.length>0 && !dataIsLoading) &&
                                      pelatihan.map(()=>{
                                        return (
                                          <div style={{backgroundColor:"white"}}>
                                              <div style={{borderRadius:10,display:"flex",justifyContent:"center",marginRight:20,height:330}}>
                                                <img src="https://apimicca.midiatama.co.id/storage/cover/midiatama-98210609110601.png" style={{backgroundColor:"whitesmoke",width:250,height:140,borderRadius:5,position:"absolute"}}></img>
                                                <div style={{backgroundColor:"white",boxShadow:"1px 2px 12px -1px rgba(0,0,0,0.51)",padding:20,width:220,position:"relative",top:110,bottom:12,height:210,borderRadius:5}}>
                                                    <div style={{textAlign:"center",fontWeight:"bold"}}>Ahli K3 Listrik Batch 13</div>
                                                    <div  style={{textAlign:"center",fontSize:10,marginTop:8}}>Pembinaan & Sertifikasi Ahli K3 Listrik Kemnaker RI</div>
                                                    <div style={{textAlign:"center",marginTop:10}}>20 Agustus 2021</div>
                                                    <div className={"readmore"} style={{position:"absolute",fontWeight:"bold",color:"#343434",bottom:-13,textAlign:"center",width:180,borderRadius:10,paddingTop:5,paddingBottom:5,backgroundColor:"#fee906"}}>
                                                      Read More
                                                  </div>
                                                </div>
                                               
                                              </div>
                                          </div>
                                        )
                                      })
                                    }
                                </div>
                                }
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
          <Footer/>
    </div>
  )
}