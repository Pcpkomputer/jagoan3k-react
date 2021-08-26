import { useEffect, useState } from 'react';

import { Container, Row, Col, Spinner, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DetailTrainingTabs from './DetailTrainingTabs';



import "../../custom.css";
import $ from 'jquery';

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


export default function DetailTraining(props){

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


  useEffect(()=>{
    window.$ = $;
  },[])


  let url = useParams();
  

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
                  <Row>
                     <Col lg={12} style={{marginBottom:30}}>
                         <Row style={{backgroundColor:"white",borderRadius:10,padding:30,boxShadow:"0 0 .25rem rgba(0,0,0,.1)"}}>
                            <Col lg={6} style={{marginBottom:30}}>
                              <img style={{width:"100%",borderRadius:10}} src="https://mos.is3.cloudhost.id/photos/midiatama-58210629085720.png"/>
                            </Col>
                            <Col lg={6}>
                                <div style={{fontWeight:"bold",fontSize:17}}>Ahli Umum K3 Batch</div>
                                <label style={{marginTop:15,fontSize:14}}>Pembinaan & Sertifikasi Ahli K3 Umum Kemnaker RI</label>
                                <div style={{marginTop:30,fontWeight:"bold",borderTop:"solid 1px black",borderBottom:"solid 1px black",paddingTop:20,paddingBottom:20}}>
                                    Jadwal Training : <span style={{color:"green"}}>29 Agustus 2021</span>
                                </div>
                                <div style={{marginTop:20}}>
                                      <div style={{fontWeight:"bold",fontSize:17}}>Diskon Saat Ini</div>
                                      <div style={{marginTop:20,backgroundColor:"#eaffea",boxShadow:"0 0 .25rem rgba(0,0,0,.1)",borderRadius:10,padding:20}}>
                                          <div style={{padding:20,textAlign:"center",fontSize:15}}>Harga Early Bird Ahli K3 Umum Freshgraduate akan berakhir dalam</div>
                                          <div style={{display:"flex",justifyContent:"center",marginTop:10,alignItems:"center",borderBottom:"solid 1px black",paddingBottom:30}}>
                                              <div>
                                                    <div style={{backgroundColor:"green",color:"white",fontSize:27,marginRight:15,fontWeight:"bold",textAlign:"center",padding:"10px 15px 10px 15px",width:65,borderRadius:10}}>
                                                      1
                                                    </div>
                                                    <div style={{textAlign:"center",fontWeight:"bold",marginTop:5,marginRight:15}}>
                                                      Hari
                                                    </div>
                                              </div>
                                              <div>
                                                    <div style={{backgroundColor:"green",color:"white",fontSize:27,marginRight:15,fontWeight:"bold",textAlign:"center",padding:"10px 15px 10px 15px",width:65,borderRadius:10}}>
                                                      12
                                                    </div>
                                                    <div style={{textAlign:"center",fontWeight:"bold",marginTop:5,marginRight:15}}>
                                                      Jam
                                                    </div>
                                              </div>
                                              <div>
                                                    <div style={{backgroundColor:"green",color:"white",fontSize:27,marginRight:15,fontWeight:"bold",textAlign:"center",padding:"10px 15px 10px 15px",width:65,borderRadius:10}}>
                                                      32
                                                    </div>
                                                    <div style={{textAlign:"center",fontWeight:"bold",marginTop:5,marginRight:15}}>
                                                      Menit
                                                    </div>
                                              </div>
                                              <div>
                                                    <div style={{backgroundColor:"green",color:"white",fontSize:27,marginRight:15,fontWeight:"bold",textAlign:"center",padding:"10px 15px 10px 15px",width:65,borderRadius:10}}>
                                                      05
                                                    </div>
                                                    <div style={{textAlign:"center",fontWeight:"bold",marginTop:5,marginRight:15}}>
                                                      Detik
                                                    </div>
                                              </div>
                                          </div>
                                          <div style={{marginTop:20,display:(isTabletOrMobile) ? null:"flex"}}>
                                            <div style={{flex:1}}>
              
                                              <div style={{fontSize:18,letterSpacing:3,fontWeight:"bold",wordBreak:"break-word"}}>EARLY BIRD AHLI K3 UMUM PERUSAHAAN</div>
                                              <div style={{marginTop:20,padding:5,border:"solid 1px black",width:"fit-content",borderRadius:20,fontSize:12,color:"green",borderColor:"green"}}>Yang anda pilih</div>
                                            </div>
                                            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                                <div style={{textAlign:"right"}}>8.000.000</div>
                                                <div style={{fontSize:23,fontWeight:"bold",width:250,textAlign:"right",color:"green"}}>IDR 5.500.00000</div>
                                            </div>
                                          </div>
                                      </div>
                                      <div style={{marginTop:20,boxShadow:"0 0 .25rem rgba(0,0,0,.1)",borderRadius:10,padding:20}}>
                                
                                          <div style={{marginTop:20,display:(isTabletOrMobile) ? null:"flex"}}>
                                            <div style={{flex:1}}>
              
                                              <div style={{fontSize:18,letterSpacing:3,fontWeight:"bold",wordBreak:"break-word"}}>EARLY BIRD AHLI K3 UMUM PERUSAHAAN</div>
                                              <div style={{marginTop:20,padding:5,border:"solid 1px black",width:"fit-content",borderRadius:20,fontSize:12,color:"green",borderColor:"green",opacity:0,pointerEvents:"none"}}>Yang anda pilih</div>
                                            </div>
                                            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                                <div style={{textAlign:"right"}}>8.000.000</div>
                                                <div style={{fontSize:23,fontWeight:"bold",width:250,textAlign:"right",color:"green"}}>IDR 5.500.00000</div>
                                            </div>
                                          </div>
                                      </div>
                                      <div style={{marginTop:20,position:"relative"}}>
                                          <label style={{position:"absolute",textAlign:"center",width:"100%",height:"100%",marginTop:6,color:"white",fontWeight:"bold"}}>Tersisa 29 dari 30</label>
                                          <ProgressBar style={{height:35,borderRadius:50}} variant="success" now={60} />
                                      </div>
                                      <div style={{padding:10,marginTop:20,border:"solid 2px #198753",borderRadius:10,textAlign:"center",color:"#198753",fontWeight:"bold"}}>2x Orang Sudah Pesan</div>
                                      <div style={{height:1,borderBottom:"solid 1px green",marginTop:30,marginBottom:20}}></div>
                                      <div>
                                          <label style={{fontWeight:"bold"}}>Kode Voucher</label>
                                          <div style={{display:"flex",flexDirection:"row",marginTop:13}}>
                                              <div style={{flex:1}}>
                                                <input class="form-control" value={"asdaasd"} placeholder="Kode Voucher" style={{width:"100%",padding:5,paddingLeft:10,paddingRight:10,outline:"none",boxShadow:"none",border:"solid 1px #d8d8d8"}} type="text"/>
                                              </div>
                                              <div>
                                                  <div style={{paddingLeft:20,paddingRight:20,backgroundColor:"#198753",height:"100%",borderRadius:5,textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>Proses</div>
                                              </div>
                                          </div>
                                      </div>
                                      <Link to={`${url.idtraining}/pemesanan`}>
                                        <div style={{marginTop:25,backgroundColor:"#27b394",color:"white",fontWeight:"bold",borderRadius:10,padding:10,textAlign:"center"}}>
                                            Proses Pemesanan
                                        </div>
                                      </Link>
                                </div>
                            </Col>
                         </Row>
                     </Col>
                  </Row>
                  <Row style={{marginTop:30}}>
                    <DetailTrainingTabs/>
                  </Row>
              </Container>
          </div>
          <Footer/>
    </div>
  )
}