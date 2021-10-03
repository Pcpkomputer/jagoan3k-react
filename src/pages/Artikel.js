import { useEffect, useState } from 'react';

import { Container, Row, Col, Spinner } from 'react-bootstrap';
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
import NavBar from '../components/Navbar';

import endpoint from '../utils/endpoint';

export default function Artikel(props){

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })

  function trimText(text){
     if(text.length>=250){
        let txt = "";
        for(let i=0;i<=250;i++){
          txt=txt+text[i];
        }
        return txt+"...";
     }
     else{
         return text;
     }
  }

  function calculateMinsRead(text){
    let length = text.length;
    let minsread = length/250;
    return (minsread<1) ? 1:minsread;
  }

  function toLocalDate(d){
      let date = new Date(d);
      var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        switch(hari) {
        case 0: hari = "Minggu"; break;
        case 1: hari = "Senin"; break;
        case 2: hari = "Selasa"; break;
        case 3: hari = "Rabu"; break;
        case 4: hari = "Kamis"; break;
        case 5: hari = "Jum'at"; break;
        case 6: hari = "Sabtu"; break;
        }
        switch(bulan) {
        case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
        case 2: bulan = "Maret"; break;
        case 3: bulan = "April"; break;
        case 4: bulan = "Mei"; break;
        case 5: bulan = "Juni"; break;
        case 6: bulan = "Juli"; break;
        case 7: bulan = "Agustus"; break;
        case 8: bulan = "September"; break;
        case 9: bulan = "Oktober"; break;
        case 10: bulan = "November"; break;
        case 11: bulan = "Desember"; break;
        }
        var tampilTanggal = hari + ", " + tanggal + " " + bulan + " " + tahun;
        return tampilTanggal;
  }

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

  let [artikelIsLoading, setArtikelIsLoading] = useState(true);
  let [artikel, setArtikel] = useState([]);


  let fetchArtikel = async ()=>{
      let request = await fetch(`${endpoint}/api/artikel`);
      let json = await request.json();
      setArtikelIsLoading(false);
      setArtikel(json);
  }

  useEffect(()=>{
    fetchArtikel();
  },[])

  let [artikelPopulerIsLoaded, setArtikelPopulerIsLoaded] = useState(false);
  let [artikelPopuler, setArtikelPopuler] = useState([]);


  let [stickyHeaderShow, setStickyHeaderShow] = useState(false);

  return (
    <div style={{fontFamily:"Poppins, sans-serif"}}>
        <Container fluid={true} style={{margin:0,padding:0,backgroundColor:"whitesmoke",background:"url('https://midiatama.co.id/_nuxt/img/bg-artikel.14b54ae.png')",height:300}}>
           <div style={{position:"absolute",zIndex:1,width:"100%",height:300,backgroundColor:"black",opacity:0.5}}></div>

           <div style={{width:"100%",position:"absolute",zIndex:100,height:300,display:"flex",justifyContent:"center",paddingLeft:(isTabletOrMobile) ? 80:150,paddingRight:150,flexDirection:"column"}}>
                <div style={{fontSize:35,letterSpacing:5,fontWeight:"bold",color:"white"}}>ARTIKEL</div>
                <div style={{marginTop:10,display:"flex",alignItems:"center",flexDirection:"row"}}>
                    <div style={{color:"white", marginRight:10}}>Home</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white"}}>Artikel</div>
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
            <Container style={{paddingLeft:(isTabletOrMobile) ? 25:undefined,paddingRight:(isTabletOrMobile) ? 25:undefined}}>
                  <Row>
                        <Col lg={8}>
                            <h2 style={{fontWeight:"bold"}}>ARTIKEL</h2>
                                {
                                    (artikelIsLoading) &&
                                    <div style={{paddingTop:50,justifyContent:"center",alignItems:"center",display:"flex"}}>
                                        <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",padding:15,boxShadow:"2px 9px 25px 2px rgba(0,0,0,0.1)"}}> 
                                        Sedang Memuat Data
                                        <Spinner style={{marginLeft:15}} size="sm" animation="border" variant="primary" />
                                        </div>
                                    </div>
                                }
                                {
                                    (artikel.length===0 && !artikelIsLoading) &&
                                    <div style={{marginTop:0}}>
                                         <div style={{paddingTop:50,justifyContent:"center",alignItems:"center",display:"flex"}}>
                                            <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",padding:15,boxShadow:"2px 9px 25px 2px rgba(0,0,0,0.1)"}}> 
                                            Artikel Kosong / Tidak Ditemukan
                                            </div>
                                        </div>
                                    </div>
                                }
                           
                                {
                                    (artikel.length>0 && !artikelIsLoading) &&
                                    <div style={{marginTop:40}}>
                                            <Row style={{paddingRight:(isTabletOrMobile) ? 0:50}}>
                                            
                                        {
                                            artikel.map((item,index)=>{
                                                return (
                                                    <Col lg={6} style={{paddingRight:12,marginBottom:35,paddingLeft:12}}>
                                                        <div style={{backgroundColor:"white",overflow:"hidden",borderRadius:20,boxShadow:"0 .125rem .25rem rgba(0,0,0,.1)"}}>
                                                            <div style={{display:"relative",background:"linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(24,24,184,0) 0%, rgba(255,255,255,1) 100%)"}}>
                                                                <div style={{position:"relative"}}>
                                                                    <div style={{position:"absolute",width:"100%",backgroundImage:"linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",height:30,bottom:0}}></div>
                                                                    <img src={`${endpoint}/storage/artikel/${item.gambar_artikel}`} style={{width:"100%",height:250}}></img>
                                                                </div>
                                                            </div>
                                                            <div style={{padding:20}}>
                                                                <div style={{fontWeight:"bold"}}>{item.kategori}</div>
                                                                <div style={{marginTop:20,marginBottom:20,fontWeight:"bold"}}>{item.judul_artikel}</div>
                                                                <div style={{fontSize:13,marginBottom:30,height:150}}>
                                                                {
                                                                    trimText(`${item.konten.replace(new RegExp('<[^>]*>', 'g'), '')}`)
                                                                }
                                                                </div>
                                                                <div style={{fontSize:10}}>{toLocalDate(item.tanggal_dibuat)} - {calculateMinsRead(item.konten)} Mins Read</div>
                                                                <Link to={`/artikel/${item.id_artikel}`}>
                                                                <div style={{marginTop:30,cursor:"pointer",marginBottom:10,borderRadius:20,border:"solid 2.5px #23b697",padding:"10px 15px 10px 15px",marginLeft:50,marginRight:50,textAlign:"center",fontWeight:"bold", color:"#23b697"}}>Lihat Selengkapnya</div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                        }
                                            
                                        </Row>
                                </div>
                                }
                        </Col>
                        <Col lg={4}>
                            <div>
                                <h3 style={{fontWeight:"bold",fontSize:25,borderBottom:"solid 1px #e8e8e8",paddingBottom:20}}>ARTIKEL POPULER</h3>
                            </div>
                            <div style={{display:"flex",flexDirection:"column"}}>
                                
                                {
                                    artikelPopuler.map(()=>{
                                        return (
                                            <div style={{backgroundColor:"white",marginTop:30,boxShadow:"rgb(0 0 0 / 10%) 0px 0.125rem 0.25rem",borderRadius:10,overflow:"hidden",display:"flex",flexDirection:"row",maxHeight:160}}>
                                                <div style={{flex:1,padding:20}}>
                                                    <div style={{maxWidth:220,maxHeight:90,overflow:"hidden",wordWrap:"break-word",fontSize:15,paddingRight:20,fontWeight:"bold"}}>Bagaimana prosesyang asddaaddakdaldkladkladksladklasdklakdlklakdlakdlakdlsakldsadadadadaasdsadsadasdsadsadadamdadmkamkdmabaik?</div>
                                                    <div style={{marginTop:10,fontSize:13,marginBottom:30}}>01 Juli 2021 - 32 Views</div>
                                                </div>
                                                <div style={{padding:10,display:"flex",paddingLeft:20,paddingRight:20,justifyContent:"center",alignItems:"center"}}>
                                                    <img  src="https://mos.is3.cloudhost.id/artikel/bageur-258210721044842.jpeg" style={{width:120,height:120,borderRadius:20}}></img>
                                                </div>
                                                
                                            </div>
                                        )
                                    })
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