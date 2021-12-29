import { useEffect, useState, useCallback, useContext } from 'react';

import { Container, Row, Col, Accordion, Card, Spinner } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../custom.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import '../css/Training.css';

import SidebarMobile from '../components/SidebarMobile';

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

import endpoint from '../utils/endpoint';

import { GlobalContext } from '../App';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      //console.log('totally custom!');
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

function Accordions({globalContext, fetchByCategoryAndSubCategory, setSelectedCategory, selectedCategory, setSelectedIndexCategory, selectedIndexCategory, setSelectedSubCategory, selectedSubCategory}){
    return (
        <Accordion style={{paddingBottom:100}} defaultActiveKey="-1">
        {
          (globalContext.kategoriTraining).map((item,index)=>{
            return (
              <Card style={{border:"none"}}>
                <CustomToggle eventKey={`${index}`}>
                    <div>{item.kategori.nama_kategoritraining}</div>
                </CustomToggle>
                <Accordion.Collapse eventKey={`${index}`}>
                  <div style={{paddingLeft:30,paddingRight:30,paddingBottom:10,paddingTop:10}}>
                      {
                        item.subkategori.map((item2,index)=>{
                            return (
                              <div onClick={async ()=>{
                                await setSelectedCategory(item.kategori.nama_kategoritraining);
                                await setSelectedIndexCategory(item.kategori.id_kategoritraining);
                                await setSelectedSubCategory(item2.nama_subkategoritraining);

                                await fetchByCategoryAndSubCategory(item.kategori.id_kategoritraining,item2.nama_subkategoritraining);
                              }} style={{fontSize:13,cursor:"pointer",marginBottom:10}}>{item2.nama_subkategoritraining}</div>
                            )
                        })
                      }
                  </div>
              </Accordion.Collapse>
            </Card>
            )
          })
        }
      </Accordion>
    )
}


export default function Training(props){

  let globalContext = useContext(GlobalContext);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })

  // let [dataIsLoading, setDataIsLoading] = useState(true);

  let [selectedIndexCategory, setSelectedIndexCategory] = useState(globalContext.kategoriTraining[0]?.kategori?.id_kategoritraining || -1);
  let [selectedCategory, setSelectedCategory] = useState(globalContext.kategoriTraining[0]?.kategori?.nama_kategoritraining || "");
  let [selectedSubCategory, setSelectedSubCategory] = useState(globalContext.kategoriTraining[0]?.subkategori[0]?.nama_subkategoritraining || "");


  let [training, setTraining] = useState([]);
  let [trainingLoaded, setTrainingLoaded] = useState(false);
  let fetchTraining = async ()=>{
     let request = await fetch(`${endpoint}/api/trainingbydateandcategory`,{
       method:"POST",
       body:JSON.stringify({
         from:new Date().toISOString().slice(0,10),
         to:new Date(new Date().setDate(new Date().getDate()+7)).toISOString().slice(0,10),
         id_kategoritraining:selectedIndexCategory
        }),
       headers:{
         "content-type":"application/json"
       }
     });
     let json = await request.json();
     setTraining(json);
     setTrainingLoaded(true);
  }

  useEffect(()=>{
    fetchTraining();
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
      startDate: new Date().getTime(),
      endDate: new Date().setDate(new Date().getDate()+7),
      key: 'selection'
    }
  ]);


  let [stickyHeaderShow, setStickyHeaderShow] = useState(false);

  let changeToLocalDateIndonesia = (date)=>{
    let d = new Date(date);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${ye}-${mo}-${da}`;
  }

  let fetchByCategoryAndSubCategory = async (id_kategoritraining, nama_subkategoritraining)=>{

    setTrainingLoaded(false);
    
    let start = state[0].startDate;
    let end = state[0].endDate;

    start = changeToLocalDateIndonesia(start);
    end = changeToLocalDateIndonesia(end);


    let request = await fetch(`${endpoint}/api/trainingbydateandsubcategory`,{
      method:"POST",
      body:JSON.stringify({
        from:start,
        to:end,
        id_kategoritraining:id_kategoritraining,
        subkategori:nama_subkategoritraining
       }),
      headers:{
        "content-type":"application/json"
      }
    });
    let json = await request.json();

    
    setTraining(json);

    setTrainingLoaded(true);
  
  };


  let fetchByCategoryAndSubCategory2 = async (id_kategoritraining, nama_subkategoritraining, state)=>{

    setTrainingLoaded(false);

    console.log(state);
    
    let start = state[0].startDate;
    let end = state[0].endDate;

    start = changeToLocalDateIndonesia(start);
    end = changeToLocalDateIndonesia(end);


    let request = await fetch(`${endpoint}/api/trainingbydateandsubcategory`,{
      method:"POST",
      body:JSON.stringify({
        from:start,
        to:end,
        id_kategoritraining:id_kategoritraining,
        subkategori:nama_subkategoritraining
       }),
      headers:{
        "content-type":"application/json"
      }
    });
    let json = await request.json();

    
    setTraining(json);

    setTrainingLoaded(true);
  
  }

  let [mobileSidebarOpened, setMobileSidebarOpened] = useState(false);

  return (
    <div style={{fontFamily:"Poppins, sans-serif"}}>

{
        (isTabletOrMobile && mobileSidebarOpened) &&
        <SidebarMobile setMobileSidebarOpened={setMobileSidebarOpened}/>
      }

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
          <NavBar setMobileSidebarOpened={setMobileSidebarOpened} sticky={true}/>

        }

        
        <NavBar setMobileSidebarOpened={setMobileSidebarOpened}/>

          <div style={{marginTop:(isTabletOrMobile) ? 50:100,marginBottom:100,paddingLeft:20,paddingRight:20}}>
            <Container>
                  <Row style={{display:"flex"}}>
                      <Col lg={4} style={{marginBottom:50}}>
                          <div style={{border:"solid 1px #e8e8e8",overflow:"scroll",padding:20,borderRadius:5}}>
                              <div style={{color:"black",fontWeight:"bold",marginBottom:20}}>Jadwal Training</div>
                              <DateRange
                               editableDateInputs={true}
                               onChange={async (item) => {
                                setState([item.selection]);
                                await fetchByCategoryAndSubCategory2(selectedIndexCategory,selectedSubCategory,[item.selection]);
                               }}
                               moveRangeOnFifrstSelection={false}
                               ranges={state}
                              />
                               <div style={{color:"black",fontWeight:"bold",marginTop:40,marginBottom:20}}>Kategori Training</div>
                                <Accordions 
                                setSelectedCategory={setSelectedCategory}
                                selectedCategory={selectedCategory}
                                setSelectedIndexCategory={setSelectedIndexCategory}
                                selectedIndexCategory={selectedIndexCategory}
                                setSelectedSubCategory={setSelectedSubCategory}
                                selectedSubCategory={selectedSubCategory}
                                fetchByCategoryAndSubCategory={fetchByCategoryAndSubCategory} globalContext={globalContext}/>
                          </div>
                      </Col>
                      <Col lg={8}>
                          <div style={{paddingLeft:30,paddingRight:30}}>
                                <div style={{fontSize:30,paddingBottom:10,borderBottom:"solid 1px black",fontWeight:"bold"}}>{selectedCategory.toUpperCase()}</div>
                                {
                                  (trainingLoaded && training.length===0) &&
                                  <div style={{paddingTop:70,justifyContent:"center",alignItems:"center",display:"flex"}}>
                                      <div style={{backgroundColor:"white",padding:15,boxShadow:"2px 9px 25px 2px rgba(0,0,0,0.1)"}}> 
                                        Data tidak ditemukan
                                      </div>
                                  </div>
                                }
                                {
                                  (!trainingLoaded) &&
                                  <div style={{paddingTop:70,justifyContent:"center",alignItems:"center",display:"flex"}}>
                                      <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",padding:15,boxShadow:"2px 9px 25px 2px rgba(0,0,0,0.1)"}}> 
                                        Sedang Memuat Data
                                        <Spinner style={{marginLeft:15}} size="sm" animation="border" variant="primary" />
                                      </div>
                                  </div>
                                }
                                
                                {
                                  (trainingLoaded) &&
                                  <div style={{marginTop:30,gridRowGap:40,gridColumnGap:40,display:"grid",gridTemplateColumns:(isTabletOrMobile) ? "1fr":(max991) ? "1fr 1fr":(max1400) ? "1fr 1fr":"1fr 1fr 1fr"}}>
                                    {
                                      (training.length>0 && trainingLoaded) &&
                                      training.map((item,index)=>{
                                       
                                        return (
                                          <div style={{backgroundColor:"white"}}>
                                              <div style={{borderRadius:10,display:"flex",justifyContent:"center",marginRight:20,height:330}}>
                                                <img src={`${endpoint}/storage/public/training/${item.foto}`} style={{backgroundColor:"whitesmoke",width:250,height:140,borderRadius:5,position:"absolute"}}></img>
                                                <div style={{backgroundColor:"white",boxShadow:"1px 2px 12px -1px rgba(0,0,0,0.51)",padding:20,width:220,position:"relative",top:110,bottom:12,height:210,borderRadius:5}}>
                                                <div style={{textAlign:"center",fontWeight:"bold"}}>{item.namatraining}</div>
                                                <div  style={{textAlign:"center",fontSize:10,marginTop:8}}>Pembinaan & Sertifikasi {item.subkategoritraining}</div>
                                                <div style={{textAlign:"center",marginTop:10}}>{changeToLocalDateIndonesia(item.jadwaltraining)}</div>
                                                <Link to={`/training/${item.id_training}`} className={"readmore"} style={{position:"absolute",fontWeight:"bold",color:"#343434",bottom:-13,textAlign:"center",width:180,borderRadius:10,paddingTop:5,paddingBottom:5,backgroundColor:"#fee906"}}>
                                                      Read More
                                                  </Link>
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