import { useEffect, useState, useContext } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../assets/owl_carousel/assets/owl.carousel.min.css"
import "../assets/owl_carousel/assets/owl.theme.default.css"

import "../css/Training.css"

import "../custom.css";

import {Helmet} from "react-helmet";

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


import {GlobalContext} from '../App';

import endpoint from '../utils/endpoint';


function Index() {

  let globalContext = useContext(GlobalContext);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })
  const is460 = useMediaQuery({ query: '(max-width: 460px)' })


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FaArrowAltCircleRight
        color="grey"
        size="30px"
        className={className}
        style={{ ...style, display: "block",width:25,height:25,marginRight:(isTabletOrMobile) ? 20:0,marginLeft:0 }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FaArrowAltCircleLeft
        color="grey"
        size="30px"
        className={className}
        style={{ ...style, display: "block",width:25,height:25,marginLeft:0 }}
        onClick={onClick}
      />
    );
  }


    let settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: (max991) ? 1:(max1400) ? 2:3,
      slidesToScroll: (max991) ? 1:(max1400) ? 2:3,
      
    };

    let settingsInstruktur = {
      dots: true,
      infinite: true,
      nav:true,
      speed: 200,
      slidesToShow: (globalContext.instruktur.length>3) ? (max991) ? 1:(max1400) ? 1:4:globalContext.instruktur.length,
      slidesToScroll: (max991) ? 1:(max1400) ? 3:4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };


    let settingsOurClient = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: (is460) ? 2:(max991) ? 2:(max1400) ? 4:5,
      slidesToScroll: (is460) ? 2:(max991) ? 2:(max1400) ? 4:5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };




    useEffect(()=>{

      // alert("123");

      if(globalContext.previewLoaded===true){
        window.$('.owl-carousel').owlCarousel({
          loop:false,
          nav:false,
          dots:true,
          items:1,
          dotsContainer:".dotsContainer"
      });
      }
      else{
        setTimeout(() => {
          window.$('.owl-carousel').owlCarousel({
            loop:false,
            nav:false,
            dots:true,
            items:1,
            dotsContainer:".dotsContainer"
        });
        //window.scroll(0,0)
        globalContext.setPreviewLoaded(true);
        }, 100);
      }

    
    },[])


    let [stickyHeaderShow, setStickyHeaderShow] = useState(false);


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


    



    return (
      <div style={{overflow:"hidden",fontFamily:"Poppins, sans-serif"}}>
          <div style={{flex:1}}>
              <div class="dotsContainer" style={{position:"absolute",transform:"bottom",bottom:(isTabletOrMobile) ? 80:100,left:80,zIndex:999}}>
              </div>
              <div class="owl-carousel">
                
                {
                  (globalContext.banner).map((item,index)=>{
                    return (
                      <div class="item">
                          <div style={{position:"absolute",backgroundColor:"black",opacity:0.5,width:"100%",height:"100%",zIndex:100}}></div>
                          <div style={{display:"flex",alignItems:"center",backgroundSize:"cover",backgroundImage:`url("${endpoint}/storage/public/banner/${item.gambar}")`,height:"100vh"}}>
                              {
                                (isTabletOrMobile) ?
                                  <div style={{position:"absolute",paddingRight:100,width:300,marginLeft:80,fontSize:40,zIndex:999,color:"white"}}>
                                    <div style={{fontWeight:"bold"}}>{item.caption}</div>
                                    <div style={{fontSize:25,marginTop:20,wordBreak:"break-word"}}>{item.deskripsi}</div>
                                </div>
                                :
                                <div style={{position:"absolute",paddingRight:100,width:800,marginLeft:80,fontSize:40,zIndex:999,color:"white"}}>
                                    <div style={{fontWeight:"bold"}}>{item.caption}</div>
                                    <div style={{fontSize:25,marginTop:20,wordBreak:"break-word"}}>{item.deskripsi}</div>
                                </div>
                              } 
                          </div>
                    </div>
                    )
                  })
                }
                
              </div>
          </div>



        {/* Sticky Header */}
        {
          (stickyHeaderShow) &&
          <NavBar sticky={true}/>

        }

        
        <NavBar/>


          
          <div style={{paddingTop:50,paddingBottom:70,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div style={{fontSize:30,fontWeight:"bold"}}>TENTANG KAMI</div>
                <div style={{width:(isTabletOrMobile) ? 320:800,textAlign:"center",marginTop:30,paddingRight:30,paddingLeft:30}}>
                {globalContext.dashboardText.tentangkami}
                </div>
          </div>
          <div style={{backgroundColor:"#23b697",paddingTop:50,paddingBottom:50,paddingLeft:30,paddingRight:30}}>
              <Container>
                      <Row>
                          <Col lg={3} style={{marginBottom:50}}>
                              <div style={{fontSize:35,fontWeight:"bold",color:"white"}}>Training</div>
                              <div style={{fontSize:35,fontWeight:"bold",color:"white"}}>Terdekat</div>
                              <div style={{marginTop:20,fontSize:20,color:"white"}}>
                              Temukan pelatihan dengan jadwal paling dekat dari tanggal hari ini
                              </div>
                          </Col>
                          <Col lg={9} style={{paddingLeft:50,paddingRight:50}}>
                              

                          <Slider {...settings} style={{padding:10}}>
                                {
                                  [1,2,3,4,5].map(()=>{
                                    return (
                                      <div style={{backgroundColor:"white",height:"100%"}}>
                                          <div style={{borderRadius:10,overflow:"hidden",display:"flex",justifyContent:"center",marginLeft:(is460) ? 20:null,marginRight:20,height:330}}>
                                            <img src="https://apimicca.midiatama.co.id/storage/public/cover/midiatama-98210609110601.png" style={{backgroundColor:"whitesmoke",width:(is460) ? 200:250,height:140,borderRadius:5,position:"absolute"}}></img>
                                            <div style={{backgroundColor:"white",boxShadow:"1px 2px 12px -1px rgba(0,0,0,0.51)",padding:20,width:(is460) ? 180:220,position:"absolute",bottom:12,height:210,borderRadius:5}}>
                                                <div style={{textAlign:"center",fontWeight:"bold"}}>Ahli K3 Listrik Batch 13</div>
                                                <div  style={{textAlign:"center",fontSize:10,marginTop:8}}>Pembinaan & Sertifikasi Ahli K3 Listrik Kemnaker RI</div>
                                                <div style={{textAlign:"center",marginTop:10}}>20 Agustus 2021</div>
                                            </div>
                                            <Link to="/training/1" className={"readmore"} style={{position:"absolute",fontWeight:"bold",color:"#343434",bottom:0,textAlign:"center",width:180,borderRadius:10,paddingTop:5,paddingBottom:5,backgroundColor:"#fee906"}}>
                                                  Read More
                                              </Link>
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
          <div style={{backgroundColor:"white",paddingBottom:30}}>
              <Container>
                  <Row>
                      <Col lg={6} style={{paddingLeft:(isTabletOrMobile) ? 30:null,paddingRight:(isTabletOrMobile) ? 30:null}}>
                        <div style={{paddingTop:50}}>
                              <div>
                                  <h2 style={{fontWeight:"bold"}}>{globalContext.dashboardText.section2[0].judul}</h2>
                                  <h3 style={{fontWeight:"bold"}}>{globalContext.dashboardText.section2[0].subjudul}</h3>
                                  <div style={{marginTop:30}}>
                                  {globalContext.dashboardText.section2[0].isi}
                                  </div>
                              </div>
                              <div style={{marginTop:80,marginBottom:(isTabletOrMobile) ? 80:0}}>
                                  <h2 style={{fontWeight:"bold"}}>{globalContext.dashboardText.section2[0].judul}</h2>
                                  <h3 style={{fontWeight:"bold"}}>{globalContext.dashboardText.section2[0].subjudul}</h3>
                                  <div style={{marginTop:30}}>
                                  {globalContext.dashboardText.section2[0].isi}
                                  </div>
                              </div>
                        </div>
                      </Col>
                      <Col lg={6} style={{display:"flex",justifyItems:"center",alignItems:"center"}}>
                        <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                              {
                                (max991) ?
                                <img  style={{width:350,height:350,marginTop:(isTabletOrMobile) ? 10:40,marginBottom:0}} src="https://apimicca.midiatama.co.id/storage/public/konten-home/gambar1/bageur-901210621043226.png"></img>
                                :
                                <img  style={{width:480,height:480,marginBottom:0}} src="https://apimicca.midiatama.co.id/storage/public/konten-home/gambar1/bageur-901210621043226.png"></img>
                              }
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
          <div>
            <Container>
                  <Row>
                      <Col lg={6} style={{paddingLeft:(isTabletOrMobile) ? 30:null,paddingRight:(isTabletOrMobile) ? 30:null}}>
                         <div style={{width:"100%",height:"100%",display:"flex",paddingRight:60,justifyContent:"center",alignItems:"center"}}>
                              {
                                (max991) ?
                                null
                                :
                                <img  style={{width:480,height:480}} src="https://apimicca.midiatama.co.id/storage/public/konten-home/gambar1/bageur-901210621043226.png"></img>
                              }
                          </div>
                      </Col>
                      <Col lg={6} style={{paddingLeft:(isTabletOrMobile) ? 30:null,paddingRight:(isTabletOrMobile) ? 30:null}}>
                            <div style={{paddingTop:50}}>
                                    <div>
                                        <h2 style={{fontWeight:"bold"}}>{globalContext.dashboardText.section2[0].judul}</h2>
                                        <h3 style={{fontWeight:"bold"}}>{globalContext.dashboardText.section2[0].subjudul}</h3>
                                        <div style={{marginTop:30}}>
                                        {globalContext.dashboardText.section2[0].isi}
                                        </div>
                                    </div>
                                    <div style={{marginTop:80,marginBottom:80}}>
                                        <h2 style={{fontWeight:"bold"}}>{globalContext.dashboardText.section2[0].judul}</h2>
                                        <h3 style={{fontWeight:"bold"}}>{globalContext.dashboardText.section2[0].subjudul}</h3>
                                        <div style={{marginTop:30}}>
                                        {globalContext.dashboardText.section2[0].isi}
                                        </div>
                                    </div>
                              </div>
                      </Col>
                  </Row>
              </Container>
          </div>
          <div style={{backgroundColor:"#24b596",paddingLeft:(isTabletOrMobile) ? 20:null}}>
              <Container style={{paddingTop:50,paddingBottom:60,background:"url(https://midiatama.co.id/_nuxt/img/keunggulan.7cfd70d.png)",backgroundPosition: "right",backgroundRepeat: "no-repeat",backgroundSize: "contain"}}>
                    <Col lg={12}>
                            <div style={{width:(isTabletOrMobile) ? 360:650}}>
                                <div style={{fontSize:30,fontWeight:"bold",marginBottom:5}}>Kebijakan Jagoan K3</div>
                                {
                                  globalContext.dashboardText.kebijakan.map((el,index)=>{
                                    return (
                                      <div style={{borderBottom:"solid 1px white",paddingBottom:15,paddingTop:20,color:"white"}}>
                                      {el}
                                      </div>
                                    )
                                  })
                                }
                            </div>
                    </Col>
              </Container>
          </div>
          <div style={{paddingTop:50,paddingBottom:40,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div style={{fontSize:30,fontWeight:"bold"}}>Instruktur Berbakat</div>
                <div style={{width:(isTabletOrMobile) ? 320:800,textAlign:"center",marginTop:30,paddingRight:30,paddingLeft:30}}>
                Training akan dibimbing oleh banyak sekali instruktur yang
ahli di bidangnya masing-masing
                </div>
                <Container style={{marginTop:50,marginBottom:50,paddingRight:(isTabletOrMobile) ? 35:null,paddingLeft:(isTabletOrMobile) ? 50:null}}>
                <Slider {...settingsInstruktur} style={{padding:10}}>
                          {
                            globalContext.instruktur.map((item,index)=>{
                              return (
                                <Link to={`/instruktur/${item.id_instruktur}`}>
                                <div className={"boxInstruktur"} style={{backgroundColor:"white",height:"100%",marginBottom:40}}>
                                    <div style={{backgroundColor:"whitesmoke",borderRadius:10,overflow:"hidden",marginRight:20}}>
                                        <img style={{width:"100%",height:300}} src={`${endpoint}/storage/public/instruktur/${item.foto}`}></img>
                                        <div style={{textAlign:"center",paddingLeft:30,paddingRight:30,paddingTop:20,paddingBottom:50,color:"black",fontWeight:"bold"}}>{item.nama}</div>
                                    </div> 
                                </div>
                                </Link>
                              )
                            })
                          }
                    </Slider>
                </Container>
          </div>
          <div style={{paddingBottom:50,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div style={{fontSize:30,fontWeight:"bold"}}>Our Client</div>
                <Container style={{marginTop:50,marginBottom:50,paddingLeft:(isTabletOrMobile) ? 50:null}}>
                <Slider {...settingsOurClient} style={{padding:10}}>
                    
                      {
                        [1,2,3,4,5,6,7,8,9].map(()=>{
                            return (
                              <div style={{backgroundColor:"white",height:"100%"}}>
                                  <img style={{width:(is460) ? 130:200,height:100}} src="https://apimicca.midiatama.co.id/storage/public/bageur.id/our-client/bageur-207210624084541.png"/>
                              </div>
                            )
                        })
                      }
                    </Slider>
                </Container>
          </div>
          <Footer/>
        </div>
    );
  }
  
  export default Index;
  