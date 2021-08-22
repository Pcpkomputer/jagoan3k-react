import { useEffect, useState } from 'react';

import { Container, Row, Col, Spinner, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DetailTrainingTabs from './DetailTrainingTabs';

import { FaCheck } from "react-icons/fa";

import "../../custom.css";
import $ from 'jquery';

import { useMediaQuery } from 'react-responsive'
import Slider from "react-slick";
import { useLocation } from 'react-router';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import {Helmet} from "react-helmet";

import Arrow from '../../svg/Arrow';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Footer from '../../components/Footer';
import NavBar from '../../components/Navbar';


export default function PemesananTraining(props){

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

  let [selectedOffer, setSelectedOffer] = useState(0);

  
  let [currentStep, setCurrentStep] = useState(2);


  useEffect(()=>{
    window.$ = $;
  },[])

  return (
    <div style={{fontFamily:"Poppins, sans-serif"}}>
      <Helmet>
                <meta charSet="utf-8" />
                <script defer type="text/javascript" src="../jquery.js"/>
                <script type="text/javascript" src="../owl_carousel/owl.carousel.min.js"></script>
                <script>
                   window.$ = $;
                </script>
            </Helmet>
        <Container fluid={true} style={{margin:0,padding:0,backgroundColor:"whitesmoke",background:"url('https://midiatama.co.id/_nuxt/img/bg-training.7cc257e.png')",height:300}}>
           <div style={{position:"absolute",zIndex:1,width:"100%",height:300,backgroundColor:"black",opacity:0.5}}></div>

           <div style={{width:"100%",position:"absolute",zIndex:100,height:300,display:"flex",justifyContent:"center",paddingLeft:(isTabletOrMobile) ? 80:150,paddingRight:150,flexDirection:"column"}}>
                <div style={{fontSize:35,letterSpacing:5,fontWeight:"bold",color:"white"}}>DETAIL TRAINING</div>
                <div style={{marginTop:10,display:"flex",alignItems:"center",flexDirection:"row"}}>
                    <div style={{color:"white", marginRight:10}}>Home</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white",marginRight:10}}>Training</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white"}}>Detail Training</div>
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
                  <Row style={{justifyContent:"center"}}>
                        <Col lg={3} style={{display:"flex",marginBottom:30,opacity:(currentStep>=1) ? 1:0.5,marginRight:20,justifyContent:"center",alignItems:"center",width:"100%",height:70,width:300}}>    
                            <Arrow style={{position:"absolute",zIndex:1}}/>
                            <div style={{position:"absolute",flexDirection:"row",justifyContent:"center",alignItems:"center",display:"flex",zIndex:999,color:"white",fontWeight:"bold"}}>
                                <div style={{marginRight:15,display:"flex",color:"#23b697",justifyContent:"center",alignItems:"center",borderRadius:999,backgroundColor:"white",width:35,height:35}}>
                                    {
                                        (currentStep>1) ?
                                        <FaCheck/>
                                        :
                                        1
                                    }
                                </div>
                                <div>Pilih Training</div>
                            </div>
                        </Col>
                        <Col lg={3} style={{display:"flex",marginBottom:30,opacity:(currentStep>=2) ? 1:0.5,marginRight:20,justifyContent:"center",alignItems:"center",width:"100%",height:70,width:300}}>    
                            <Arrow style={{position:"absolute",zIndex:1}}/>
                            <div style={{position:"absolute",flexDirection:"row",justifyContent:"center",alignItems:"center",display:"flex",zIndex:999,color:"white",fontWeight:"bold"}}>
                                <div style={{marginRight:15,display:"flex",color:"#23b697",justifyContent:"center",alignItems:"center",borderRadius:999,backgroundColor:"white",width:35,height:35}}>
                                    {
                                        (currentStep>2) ?
                                        <FaCheck/>
                                        :
                                        2
                                    }
                                </div>
                                <div>Detail Kontak</div>
                            </div>
                        </Col>
                        <Col lg={3} style={{display:"flex",marginBottom:30,opacity:(currentStep>=3) ? 1:0.5,marginRight:20,justifyContent:"center",alignItems:"center",width:"100%",height:70,width:300}}>    
                            <Arrow style={{position:"absolute",zIndex:1}}/>
                            <div style={{position:"absolute",flexDirection:"row",justifyContent:"center",alignItems:"center",display:"flex",zIndex:999,color:"white",fontWeight:"bold"}}>
                                <div style={{marginRight:15,display:"flex",color:"#23b697",justifyContent:"center",alignItems:"center",borderRadius:999,backgroundColor:"white",width:35,height:35}}>
                                {
                                        (currentStep>3) ?
                                        <FaCheck/>
                                        :
                                        3
                                    }
                                </div>
                                <div>Pembayaran</div>
                            </div>
                        </Col>
                        <Col lg={3} style={{display:"flex",marginBottom:30,opacity:(currentStep>4) ? 1:0.5,marginRight:20,justifyContent:"center",alignItems:"center",width:"100%",height:70,width:300}}>    
                            <Arrow style={{position:"absolute",zIndex:1}}/>
                            <div style={{position:"absolute",flexDirection:"row",justifyContent:"center",alignItems:"center",display:"flex",zIndex:999,color:"white",fontWeight:"bold"}}>
                                <div style={{marginRight:15,display:"flex",color:"#23b697",justifyContent:"center",alignItems:"center",borderRadius:999,backgroundColor:"white",width:35,height:35}}>
                                {
                                        (currentStep>4) ?
                                        <FaCheck/>
                                        :
                                        4
                                    }
                                </div>
                                <div>Selesai</div>
                            </div>
                        </Col>
                  </Row>
                  {
                      (currentStep===2) &&
                      <Row style={{marginTop:30}}>
                      <Col lg={8} style={{marginBottom:50}}>
                          <div style={{fontWeight:"bold",fontSize:20,marginBottom:60}}>Data Peserta</div>
                          <Row style={{marginTop:20,justifyContent:"center",alignItems:"center"}}>
                              <Col lg={4} style={{fontWeight:"bold",fontSize:17,marginBottom:10}}>
                                  Nama Anda
                              </Col>
                              <Col lg={8} style={{paddingRight:10}}>
                                  <input style={{width:"100%",padding:5,border:"solid 1px",borderRadius:5}} type="text"></input>
                              </Col>
                          </Row>
                          <Row style={{marginTop:20,justifyContent:"center",alignItems:"center"}}>
                              <Col lg={4} style={{fontWeight:"bold",fontSize:17,marginBottom:10}}>
                                    Email
                              </Col>
                              <Col lg={8} style={{paddingRight:10}}>
                                  <input style={{width:"100%",padding:5,border:"solid 1px",borderRadius:5}} type="text"></input>
                              </Col>
                          </Row>
                          <Row style={{marginTop:20,justifyContent:"center",alignItems:"center"}}>
                              <Col lg={4} style={{fontWeight:"bold",fontSize:17,marginBottom:10}}>
                                    No. Hp
                              </Col>
                              <Col lg={8} style={{paddingRight:10}}>
                                  <input style={{width:"100%",padding:5,border:"solid 1px",borderRadius:5}} type="text"></input>
                              </Col>
                          </Row>
                          <Row style={{marginTop:20,justifyContent:"center",alignItems:"center"}}>
                              <Col lg={4} style={{fontWeight:"bold",fontSize:17,marginBottom:10}}>
                                    No. Referral
                              </Col>
                              <Col lg={8} style={{paddingRight:10}}>
                                  <input style={{width:"100%",padding:5,border:"solid 1px",borderRadius:5}} type="text"></input>
                                  <label style={{marginTop:10}}>Masukan Kode Refferal Dapatkan potongan Hingga 100rb</label>
                              </Col>
                          </Row>
                          <div style={{marginTop:40}}>
                              <div style={{backgroundColor:"#e23b25",letterSpacing:1,color:"white",borderRadius:5,textAlign:"center",width:200,padding:"10px 15px 10px 15px"}}>
                                  SELANJUTNYA
                              </div>
                          </div>
                          <div style={{height:1,marginTop:50,marginBottom:30,borderBottom:"solid 1px #e8e8e8"}}></div>
                          <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
                            Sudah memiliki akun? <label style={{marginLeft:5,fontWeight:"bold"}}>Masuk</label>
                          </div>
                      </Col>
                      <Col lg={4} style={{paddingLeft:40,paddingRight:40}}>
                          <div style={{border:"solid 1px #e8e8e8",borderRadius:10,paddingTop:20,paddingBottom:20}}>
                              <div style={{fontWeight:"bold",borderBottom:"solid 1px #e8e8e8",paddingBottom:20,marginRight:20,marginLeft:20}}>Pemesanan Anda</div>
                              <div style={{marginTop:10,marginLeft:20,marginRight:20}}>
                                  <div style={{display:"flex",marginBottom:20}}>
                                        <div style={{flex:1}}>
                                            <div style={{fontWeight:"bold",overflow:"hidden",textOverflow:"ellipsis",wordBreak:"break-word",paddingRight:20}}>Ahli K3 asdasdasdsadadasdsasadasdUmum Batcasdadadsadsadsadh 11asdsadasdassadasdasdasd5</div>
                                            <div style={{fontSize:13,marginTop:10}}>28 Ag 2021</div>
                                        </div>
                                        <div style={{padding:5,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            <img src="https://mos.is3.cloudhost.id/photos/midiatama-58210629085720.png" style={{width:90,borderRadius:10}}></img>
                                        </div>
                                  </div>
                                  
                              </div>
                              <div style={{marginLeft:20,marginRight:20,paddingTop:30,paddingBottom:30,borderTop:"solid 1px #e8e8e8",borderBottom:"solid 1px #e8e8e8"}}>
                                  <div style={{fontWeight:"bold"}}>Kode Voucher</div>
                                  <input type="text" value="" placeholder="Kode Voucher" readOnly={true} style={{marginTop:20,cursor:"not-allowed",padding:5,paddingLeft:15,fontSize:15,paddingRight:15, outline:"none",width:"100%",color:"grey",backgroundColor:"#e8e8e8",borderRadius:5,border:"solid 1px #f8f8f8"}}></input>
                              </div>
                              <div style={{marginTop:25,marginLeft:20,marginRight:20}}>
                                  <div style={{fontWeight:"bold",marginBottom:10}}>Diskon</div>
                                  <div style={{display:"flex",borderBottom:"solid 1px #e8e8e8",paddingBottom:30}}>
                                      <div style={{flex:1}}>
                                          <div style={{fontSize:15}}>Promo K3 Perusahan</div>
                                      </div>
                                      <div style={{width:100,textAlign:"right"}}>
                                          <div style={{fontSize:15}}>-100000</div>
                                      </div>
                                  </div>
                                  <div style={{marginTop:20,paddingBottom:55,display:"flex",justifyContent:"space-between"}}>
                                        <div style={{fontWeight:"bold"}}>Jumlah Bayar</div>
                                        <div>Rp. 60000000</div>
                                  </div>
                              </div>
                          </div>
                      </Col>
                  </Row>
                  }        
              </Container>
          </div>
          <Footer/>
    </div>
  )
}