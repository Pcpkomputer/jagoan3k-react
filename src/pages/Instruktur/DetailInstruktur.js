import { useEffect, useState } from 'react';

import SidebarMobile from '../../components/SidebarMobile';
import { Container, Row, Col, Spinner, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../custom.css";

import { useMediaQuery } from 'react-responsive'
import Slider from "react-slick";
import { useLocation } from 'react-router';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import {Helmet} from "react-helmet";

import endpoint from '../../utils/endpoint';

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

  let [pageLoaded, setPageLoaded] = useState(false);

  let params = useParams();

  useEffect(()=>{
    fetchInstruktur();
  },[params.instruktur])

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

let [stickyHeaderShow, setStickyHeaderShow] = useState(false);

let [instruktur, setInstruktur] = useState(false);
let [instrukturLoaded, setInstrukturLoaded] = useState(false);
let fetchInstruktur = async()=>{
   setPageLoaded(false);
   setVideoLoaded(false);
   setInstrukturLoaded(false);
   let request = await fetch(`${endpoint}/api/instruktur/${params.instruktur}`);
   let json = await request.json();
   setInstruktur(json);
   setInstrukturLoaded(true);
}


let [allInstruktur, setAllInstruktur] = useState([]);
let [allInstrukturLoaded, setAllInstrukturLoaded] = useState(false);
let fetchAllInstruktur = async ()=>{
  setPageLoaded(false);
  setAllInstrukturLoaded(false);
  let request = await fetch(`${endpoint}/api/instruktur`);
  let json = await request.json();
  setAllInstruktur(json);
  setAllInstrukturLoaded(true);
}


useEffect(()=>{
   fetchInstruktur();
   fetchAllInstruktur();
},[]);

useEffect(()=>{
    if(instrukturLoaded && allInstrukturLoaded){
      setPageLoaded(true);
    }
},[instrukturLoaded, allInstrukturLoaded])


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
  slidesToShow: (allInstruktur.length>2) ? (max991) ? 1:(max1400) ? 2:3:allInstruktur.length,
  slidesToScroll: (max991) ? 1:(max1400) ? 2:3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

let [mobileSidebarOpened, setMobileSidebarOpened] = useState(false);

  return (
    <div style={{fontFamily:"Poppins, sans-serif"}}>


      {
        (isTabletOrMobile && mobileSidebarOpened) &&
        <SidebarMobile setMobileSidebarOpened={setMobileSidebarOpened}/>
      }

      {/* <Helmet>
                <meta charSet="utf-8" />
                <script type="text/javascript" src="../jquery.js"/>
                <script  src="../owl_carousel/owl.carousel.min.js"></script>
                <script>
                   window.$ = $;
                </script>
            </Helmet> */}
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
          <NavBar setMobileSidebarOpened={setMobileSidebarOpened} sticky={true}/>

        }

        
        <NavBar setMobileSidebarOpened={setMobileSidebarOpened}/>
        

         {
           (pageLoaded) &&

          <div style={{marginTop:(isTabletOrMobile) ? 80:100,marginBottom:(isTabletOrMobile) ? 80:100}}>
          <Container>
                <Row>
                    <Col lg={4} style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                        <img src={`${endpoint}/storage/public/instruktur/${instruktur[0].foto}`} style={{backgroundColor:"#e8e8e8",borderRadius:999,height:300,width:300}}></img>
                        <div style={{marginTop:30,textAlign:"center",fontSize:20,fontWeight:"bold"}}>{instruktur[0].nama}</div>
                        <div style={{marginTop:20,padding:10,borderRadius:10,backgroundColor:"#27b394",color:"white"}}>{instruktur[0].posisi}</div>
                        <div style={{borderBottom:"solid 1px grey",marginTop:40,marginBottom:50,width:"100%",height:1}}></div>
                    </Col>
                    <Col lg={8} style={{paddingLeft:(isTabletOrMobile) ? 20:40}}>
                        <h4 style={{fontWeight:"bold"}}>Tentang {instruktur[0].nama}</h4>
                        <div style={{marginTop:20,lineHeight:2}}>
                        {instruktur[0].tentang}
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
                          src={`https://www.youtube.com/embed/${instruktur[0].videoyt}`}>
                          </iframe>
                        <h4 style={{fontWeight:"bold",marginTop:25,marginBottom:30}}>Mulai belajar dengan instruktur lainnya</h4>
                        
                        <Slider {...settings} style={{paddingTop:10,paddingBottom:10,marginTop:40}}>
                              {
                                allInstruktur.map((item,index)=>{
                                  return (
                                    <Link style="color:black" to={`/instruktur/${item.id_instruktur}`}>
                                    <div style={{backgroundColor:"white",height:"100%"}}>
                                        <div style={{backgroundColor:"whitesmoke",display:"flex",flexDirection:"column",height:500,marginRight:20}}>
                                            <div style={{display:"flex",overflow:"hidden",height:300,flex:1}}>
                                              <img src={`${endpoint}/storage/public/instruktur/${item.foto}`} style={{width:"100%",height:"100%"}}></img>
                                            </div>
                                            <div style={{paddingBottom:50,height:200,textAlign:"center",color:"black",paddingTop:50,fontWeight:"bold",paddingLeft:50,paddingRight:50}}>{item.nama}</div>
                                        </div>
                                    </div>
                                    </Link>
                                  )
                                })
                              }
                            </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
         }


         {
           (!pageLoaded) &&
          <div style={{marginTop:(isTabletOrMobile) ? 80:100,marginBottom:(isTabletOrMobile) ? 80:100}}>
          <Container>
                <Row>
                    <Col lg={4} style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                        <div style={{backgroundColor:"whitesmoke",borderRadius:999,height:300,width:300}}></div>
                        <div style={{marginTop:30,textAlign:"center",fontSize:20,fontWeight:"bold",backgroundColor:"whitesmoke",color:"whitesmoke",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none"}}>Ir. Lazuardi Nurdin, CSP</div>
                        <div style={{marginTop:20,padding:10,borderRadius:10,backgroundColor:"whitesmoke",color:"whitesmoke",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none"}}>Instruktur</div>
                        <div style={{borderBottom:"solid 1px grey",marginTop:40,marginBottom:50,width:"100%",height:1}}></div>
                    </Col>
                    <Col lg={8} style={{paddingLeft:(isTabletOrMobile) ? 20:40}}>
                        <h4 style={{fontWeight:"bold",backgroundColor:"whitesmoke",height:40,borderRadius:10}}></h4>
                        <div style={{marginTop:20,lineHeight:2,backgroundColor:"whitesmoke",color:"whitesmoke",pointerEvents:"none",userSelect:"none",msUserSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none"}}>
                        Bapak Muhammad Deny selaku salahsatu Manajemen Midiatama yang juga sebagai Instruktur Spesialis Topik Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) berdasarkan PP No.50 Tahun 2012.
                        </div>
                        <h4 style={{fontWeight:"bold",marginTop:25,height:25,width:200,backgroundColor:"whitesmoke"}}></h4>
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
         }

          <Footer/>
    </div>
  )
}