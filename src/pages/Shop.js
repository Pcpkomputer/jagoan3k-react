import { useEffect, useState, useRef, useContext } from 'react';

import { Container, Row, Col, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../css/Shop.css";


import {BiSearchAlt} from 'react-icons/bi';

import "../custom.css";

import { useMediaQuery } from 'react-responsive'
import Slider from "react-slick";
import { useLocation } from 'react-router';


import SidebarMobile from '../components/SidebarMobile';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaShareAlt, FaShoppingCart } from "react-icons/fa";

import {GlobalContext} from '../App';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

import endpoint from '../utils/endpoint';

let intervalRef = null;

export default function Shop(props){

  let globalContext = useContext(GlobalContext);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })

  let [query,setQuery] = useState("");


  let [showcase, setShowcase] = useState([]);
  let [showcaseLoading, setShowcaseLoading] = useState(true);

  let fetchShop = async()=>{
    let request = await fetch(`${endpoint}/api/shop`);
    let json = await request.json();
    setShowcase(json.map(e=>{return {...e,visible:true}}));
    setShowcaseLoading(false);
  }

  useEffect(()=>{
   fetchShop();
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

  let [mobileSidebarOpened, setMobileSidebarOpened] = useState(false);

  return (
    <div style={{fontFamily:"Poppins, sans-serif"}}>

{
        (isTabletOrMobile && mobileSidebarOpened) &&
        <SidebarMobile setMobileSidebarOpened={setMobileSidebarOpened}/>
      }

       <div className="cart" style={{zIndex:99999,position:"fixed",cursor:"pointer",backgroundColor:"#23b697",padding:15,borderRadius:999,right:40,top:(stickyHeaderShow) ? 100:40}}>
          <FaShoppingCart color="white" size={30}/>
          <div style={{position:"absolute",position:"absolute",top:-10,right:-10,backgroundColor:"white",fontWeight:"bold",width:28,height:28,borderRadius:999,justifyContent:"center",alignItems:"center",display:"flex"}}>
            {globalContext.keranjangShop.length}
          </div>
       </div>
      
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
          <NavBar setMobileSidebarOpened={setMobileSidebarOpened} sticky={true}/>

        }

        
        <NavBar setMobileSidebarOpened={setMobileSidebarOpened}/>


          <div style={{marginTop:(isTabletOrMobile) ? 80:80,marginBottom:(isTabletOrMobile) ? 80:100}}>
            <Container>
                  <Row>
                        <div style={{display:"flex",paddingLeft:30,paddingRight:30}}>
                            <div style={{flex:1,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:"white",border:"solid 1px #e8e8e8",padding:"20px 15px 20px 15px"}}>
                                <input 
                                onChange={(e)=>{
                                    //clearTimeout(intervalRef)
                                    setQuery(e.currentTarget.value);
                                    // intervalRef = setTimeout(() => {
                                    //   alert("123");
                                    // }, 500);
                                }}
                                value={query} placeholder="Masukkan nama barang yang dicari" type="text" style={{width:"100%",border:"none",outline:"none",color:"grey"}}></input>
                            </div>
                            <div
                            onClick={()=>{
                              let regex = new RegExp(query,"i");
                              let filtered = showcase.map((item,index)=>{
                                  if(item.nama_barang.match(regex)){
                                      return {
                                        ...item,
                                        visible:true
                                      }
                                  }
                                  else{
                                      return {
                                        ...item,
                                        visible:false
                                      }
                                  }
                              });
                              setShowcase(filtered);
                            }}
                            style={{display:"flex",cursor:"pointer",backgroundColor:"#27b394",justifyContent:"center",alignItems:"center",borderTopRightRadius:10,borderBottomRightRadius:10,width:250}}>
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
                                       showcase.map((item,index)=>{
                                           if(item.visible){
                                           return (
                                            <div 
                                            style={{backgroundColor:"white",display:"flex",flexDirection:"column",overflow:"hidden",height:450,border:"solid 1px grey",borderRadius:10}}>
                                                <img style={{width:"100%",backgroundColor:"whitesmoke",height:250}} src={`${endpoint}/storage/public/shop/${item.gambar_barang}`}/>
                                                <div style={{marginTop:20,paddingLeft:20,paddingRight:20,fontWeight:"bold"}}>{item.nama_barang}</div>
                                                <div style={{marginTop:20,marginBottom:30,flex:1,paddingLeft:20,paddingRight:20,fontWeight:"bold",color:"grey"}}>Rp. {item.harga}</div>
                                                <div 
                                                onClick={()=>{
                                                    let selectedid = item.id_item;

                                                    let exist = false;

                                                    globalContext.keranjangShop.forEach((item)=>{
                                                       if(item.id_item===selectedid){
                                                          exist = true;
                                                       }
                                                    });

                                                    if(exist){
                                                      alert("Barang sudah dimasukkan dalam keranjang...");
                                                    }
                                                    else{
                                                      globalContext.setKeranjangShop((prev)=>{
                                                        return [
                                                          ...prev,
                                                          item
                                                        ]
                                                      });
                                                    }

                                                  
                                                }}
                                                style={{backgroundColor:"#27b394",cursor:"pointer",color:"white",textAlign:"center",paddingTop:20,paddingBottom:20}}>Tambah Ke Keranjang</div>
                                            </div>
                                           )
                                           }
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