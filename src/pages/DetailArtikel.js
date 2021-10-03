import { useEffect, useState } from 'react';

import { Container, Row, Col, Spinner, NavItem } from 'react-bootstrap';
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
  Link,
  useParams
} from "react-router-dom";

import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

import endpoint from '../utils/endpoint';

export default function DetailArtikel(props){


  let params = useParams();

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })

  let [artikelLoaded, setArtikelLoaded] = useState(false);

  let [artikel,setArtikel] = useState(null);

  let fetchArtikel = async ()=>{
     let request = await fetch(`${endpoint}/api/artikel/${params.idartikel}`);
     let json = await request.json();

     if(json.length!==0){
        setArtikel(json);
        setArtikelLoaded(true);
     }
  }

  useEffect(()=>{
    fetchArtikel();
  },[]);

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


if(!artikelLoaded){
    return (
      <div style={{fontFamily:"Poppins, sans-serif"}}>
      <Container fluid={true} style={{margin:0,padding:0,overflow:"hidden",backgroundColor:"whitesmoke",background:"url('https://midiatama.co.id/_nuxt/img/bg-artikel.14b54ae.png')",height:300}}>
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
        <Container style={{backgroundColor:"white",padding:0,height:1200,borderRadius:20,paddingBottom:30,boxShadow:"1px 8px 29px -6px rgba(0,0,0,0.53)"}}>
          
        </Container>
    </div>
    <Footer/>
</div>
    )
}


return (
    <div style={{fontFamily:"Poppins, sans-serif"}}>
           <Container fluid={true} style={{margin:0,overflow:"hidden",padding:0,backgroundColor:"whitesmoke",background:"url('https://midiatama.co.id/_nuxt/img/bg-artikel.14b54ae.png')",height:300}}>
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
             <Container style={{backgroundColor:"white",overflow:"hidden",padding:0,borderRadius:20,paddingBottom:30,boxShadow:"1px 8px 29px -6px rgba(0,0,0,0.53)"}}>
                <img src={`${endpoint}/storage/artikel/${artikel[0].gambar_artikel}`} style={{width:"100%",height:800}}></img>
                <div style={{textAlign:"center",fontWeight:"bold",padding:10,marginTop:30,fontSize:26}}>{artikel[0].judul_artikel}</div>
                <div dangerouslySetInnerHTML={{ __html: artikel[0].konten }} style={{marginTop:40,padding:"0px 40px 0px 40px"}}>
                    
                </div>
                <div style={{marginTop:90,marginBottom:10,paddingLeft:40,fontWeight:"bold",paddingRight:40,display:"flex",flexDirection:"row"}}>
                    {/* <div style={{flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <BiCommentDetail size={35}/>
                        <div style={{marginLeft:10,fontSize:20}}>0</div>
                    </div> */}
                    <div style={{flexDirection:"row",marginLeft:0,display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <BiNotepad size={35}/>
                        <div style={{marginLeft:10,fontSize:20}}>{artikel[0].username}</div>
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