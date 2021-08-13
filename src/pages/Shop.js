import { useEffect, useState } from 'react';

import { Container, Row, Col, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {BiSearchAlt} from 'react-icons/bi';

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


export default function Shop(props){

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })


  let [showcase, setShowcase] = useState([]);
  let [showcaseLoading, setShowcaseLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
            setShowcase([1,2,3,4,5])
            setShowcaseLoading(false);
    }, 1000);
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


  let [stickyHeaderShow, setStickyHeaderShow] = useState(false);

  return (
    <div style={{fontFamily:"Poppins, sans-serif"}}>
        <Container fluid={true} style={{margin:0,padding:0,backgroundColor:"whitesmoke",background:"url('https://midiatama.co.id/_nuxt/img/bg-karir.993f53c.png')",height:300}}>
           <div style={{position:"absolute",zIndex:1,width:"100%",height:300,backgroundColor:"black",opacity:0.5}}></div>

           <div style={{width:"100%",position:"absolute",zIndex:100,height:300,display:"flex",justifyContent:"center",paddingLeft:(isTabletOrMobile) ? 80:150,paddingRight:150,flexDirection:"column"}}>
                <div style={{fontSize:35,letterSpacing:5,fontWeight:"bold",color:"white"}}>SHOP JAGOAN K3</div>
                <div style={{marginTop:10,display:"flex",alignItems:"center",flexDirection:"row"}}>
                    <div style={{color:"white", marginRight:10}}>Home</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white"}}>Shop</div>
                </div>
           </div>
        </Container>

         {/* Sticky Header */}
         {
          (stickyHeaderShow) &&
          <NavBar sticky={true}/>
        }




         <NavBar/>


          <div style={{marginTop:(isTabletOrMobile) ? 80:80,marginBottom:(isTabletOrMobile) ? 80:100}}>
            <Container>
                  <Row>
                        <div style={{display:"flex",paddingLeft:30,paddingRight:30}}>
                            <div style={{flex:1,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:"white",border:"solid 1px #e8e8e8",padding:"20px 15px 20px 15px"}}>
                                <input placeholder="Masukkan nama barang yang dicari" type="text" style={{width:"100%",border:"none",outline:"none",color:"grey"}}></input>
                            </div>
                            <div style={{display:"flex",backgroundColor:"#27b394",justifyContent:"center",alignItems:"center",borderTopRightRadius:10,borderBottomRightRadius:10,width:250}}>
                                <div style={{color:"white",flex:1,textAlign:"center",marginLeft:40}}>Search</div>
                                <div style={{width:60}}>
                                <BiSearchAlt
                                color={"white"}
                                style={{width:35,height:35}}
                                />
                                </div>
                            </div>
                        </div>
                  </Row>
                  <Row>
                      <div style={{paddingLeft:30,paddingRight:30,marginTop:40}}>
                            <div style={{letterSpacing:3,fontSize:22,fontWeight:"bold"}}>CARI BARANG KEBUTUHANMU</div>
                            {
                                (showcaseLoading) &&
                                <div style={{paddingTop:50,justifyContent:"center",alignItems:"center",display:"flex"}}>
                                    <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",padding:15,boxShadow:"2px 9px 25px 2px rgba(0,0,0,0.1)"}}> 
                                    Sedang Memuat Data
                                    <Spinner style={{marginLeft:15}} size="sm" animation="border" variant="primary" />
                                    </div>
                                </div>
                            }
                            {
                                (showcase.length===0 && showcaseLoading===false) &&
                                <div style={{paddingTop:50,justifyContent:"center",alignItems:"center",display:"flex"}}>
                                    <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",padding:15,boxShadow:"2px 9px 25px 2px rgba(0,0,0,0.1)"}}> 
                                     Barang tidak ditemukan
                                    </div>
                                </div>
                            }
                            {
                                (showcase.length>0 && showcaseLoading===false) &&
                                <div style={{display:"grid",gridGap:50,gridTemplateColumns:"1fr 1fr 1fr 1fr",marginTop:50}}>
                                   {
                                       showcase.map(()=>{
                                           return (
                                            <div style={{backgroundColor:"white",overflow:"hidden",height:450,border:"solid 1px grey",borderRadius:10}}>
                                                <img style={{width:"100%",backgroundColor:"whitesmoke",height:250}} src="https://cf.shopee.co.id/file/1f1ebe8ec527da5e5419da0a363ab719"/>
                                                <div style={{marginTop:20,paddingLeft:20,paddingRight:20,fontWeight:"bold"}}>Buku Pelatihan K3 Komplit Lengkap</div>
                                                <div style={{marginTop:20,marginBottom:30,paddingLeft:20,paddingRight:20,fontWeight:"bold",color:"grey"}}>Rp. 50000</div>
                                                <div style={{backgroundColor:"#27b394",color:"white",textAlign:"center",paddingTop:20,paddingBottom:20}}>Tambah Ke Keranjang</div>
                                            </div>
                                           )
                                       })
                                   }
                                  
                            </div>
                            }
                      </div>
                  </Row>
              </Container>
          </div>
          <Footer/>
    </div>
  )
}