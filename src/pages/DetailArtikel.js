import { useEffect, useState } from 'react';

import { Container, Row, Col, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../css/DetailArtikel.css";

import { BiCommentDetail, BiNotepad, BiShare } from "react-icons/bi";


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


export default function DetailArtikel(props){


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
                    <div style={{color:"white",marginRight:10}}>Artikel</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white"}}>Detail Artikel</div>
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
             <Container style={{backgroundColor:"white",padding:0,borderRadius:20,paddingBottom:30,boxShadow:"1px 8px 29px -6px rgba(0,0,0,0.53)"}}>
                <img src="https://mos.is3.cloudhost.id/artikel/bageur-149210805021127.png" style={{width:"100%",height:800}}></img>
                <div style={{textAlign:"center",fontWeight:"bold",padding:10,marginTop:30,fontSize:26}}>5 Cara Mengatasi Rasa Malas Saat Bekerja</div>
                <div style={{marginTop:40,padding:"0px 40px 0px 40px"}}>
                    <p>Semua orang didunia ini pasti pernah mengalami rasa malas. Serajin-rajinnya orang pasti akan ada titik dimana orang tersebut merasa malas untuk melakukan sesuatu apalagi pekerjaan. Saat rasa malas bekerja muncul, kamu harus berusaha melawan rasa malas itu. Jauhkan pikiran rasa malas dari pikiran dan diri kamu. Tapi, bagaimana sih cara mengatasi/menghilangkan rasa malas bekerja ini. 1. Lakukan Pekerjaan dengan Cara yang Menyenangkan Biasanya rasa malas bekerja karena merasa bosan. Nah salah satu mengatasi rasa malas akibat bosan adalah dengan mengubah kegiatan yang dilakukan secara rutin. Supaya rasa bosan dan malas hilang kamu bisa melakukan sesuatu dengan cara yang berbeda. Contohnya apabila kamu merasa bosan dengan pekerjaan di dalam ruangan, cobalah berkeja di luar ruangan bersama rekan kerja yang lain untuk menemukan suasana yang baru. 2. Cari Tahu Penyebab Malas yang Dialami Penyebab rasa malas sangatlah banyak, seperti contoh yang sudah dijelaskan diatas. Setalah mengetahui penyebab rasa malas yang kamu alami, cobalah mencari cara untuk meningkatkan semangat bekerja kembali. Contohnya kalau kamu bosa cobalah sesuatu yang baru agar tidak melakukan pekerjaan yang monoton. 3. Ingat Tujuan Awal Cara menghilangkan rasa malas yang selanjutnya ialah mengingat rasa malas. Biasanya seseorang bersemangat saat ia melakukan pekerjaan yang baru. Kemungkinan hal ini terjadi karena kita masih mengingat dengan jelas tujuan melakukan perkerjaan tersebut.</p>
                </div>
                <div style={{marginTop:90,marginBottom:10,paddingLeft:40,fontWeight:"bold",paddingRight:40,display:"flex",flexDirection:"row"}}>
                    <div style={{flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <BiCommentDetail size={35}/>
                        <div style={{marginLeft:10,fontSize:20}}>0</div>
                    </div>
                    <div style={{flexDirection:"row",marginLeft:30,display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <BiNotepad size={35}/>
                        <div style={{marginLeft:10,fontSize:20}}>Jagoan K3</div>
                    </div>
                    <div style={{flexDirection:"row",marginLeft:30,display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <BiShare size={35}/>
                        <div style={{marginLeft:10,fontSize:20}}>Bagikan</div>
                    </div>
                </div>
             </Container>
         </div>
         <Footer/>
    </div>
)



}