import Index from "./pages/Index"
import AboutJagoanK3 from './pages/AboutJagoanK3';
import Training from "./pages/Training";
import Shop from "./pages/Shop";
import Galeri from "./pages/Galeri";
import Artikel from "./pages/Artikel";
import Login from "./pages/Login";
import Detailnstruktur from "./pages/Instruktur/DetailInstruktur";
import DetailTraining from "./pages/Training/DetailTraining";
import PemesananTraining from "./pages/Training/PemesananTraining";
import DetailArtikel from "./pages/DetailArtikel";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import Logo from './assets/logo.png';

import ScrollToTop from "./ScrollToTop";

import { useMediaQuery } from 'react-responsive'

import "./css/App.css";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import {useEffect, useState, useContext, createContext, useLayoutEffect} from 'react';

export let GlobalContext = createContext();


function App() {


  let [previewLoaded, setPreviewLoaded] = useState(false);

  let [mobileWidth, setMobileWidth] = useState(false);

  let [continueWeb, setContinueWeb] = useState(false);

  let [imgs, setImgs] = useState([
    "https://midiatama.co.id/_nuxt/img/bg-training.7cc257e.png",
    "https://midiatama.co.id/_nuxt/img/bg-1.df32a04.jpg",
    "https://apimicca.midiatama.co.id/storage/konten-home/gambar1/bageur-901210621043226.png"
  ])

  let [complete,setComplete] = useState(false);

  let cacheImages = async ()=>{
     let cache = await imgs.map((image)=>{
       return new Promise((resolve,reject)=>{
          const img = new Image();

          img.src = image;
          img.onload = resolve();
          img.onerror= reject();
       })
     });

     await Promise.all(cache);
     setTimeout(async () => {
        await setComplete(true);
     }, 5000);
  }

  useEffect(()=>{
    cacheImages();
  },[])


  if(isMobile && continueWeb===false){
    return (
      <div style={{position:"absolute",backgroundColor:"#23b697",display:"flex",width:"100%",paddingBottom:220,flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",backgroundColor:"#23b697"}}>
            
            <div style={{padding:50,textAlign:"center",color:"white"}}>
            <img src={`${Logo}`} style={{position:"relative",bottom:-50,width:250,height:250}}/>
            <div style={{paddingTop:20,fontWeight:"bold"}}>Please download android or ios app for this website.</div>
            </div>
            <div style={{marginTop:-20}}>
              <img src="https://midiatama.co.id/_nuxt/img/gp.79741d9.svg"></img>
              <img src="https://midiatama.co.id/_nuxt/img/as.190ce99.svg"></img>
            </div>
            <div 
            onClick={()=>{
              setContinueWeb(true);
            }}
            style={{marginTop:30,fontSize:12,color:"white"}}>Continue To Web ...</div>
        </div>
    )

  }

  if(!complete){
    return (
      <div style={{display:"flex",justifyContent:"center",paddingBottom:20,flexDirection:"column",alignItems:"center",backgroundColor:"#21b798",height:"100vh",overflow:"hidden"}}>
        <img src={`${Logo}`} className="ScaleAnimation_" style={{width:250,height:250}}/>
        <div className="ScaleAnimation_" style={{position:"relative",bottom:40,fontSize:30,color:"white",fontWeight:"bold",fontFamily:"Poppins"}}>Jagoan K3</div>
      </div>
    )
  }

  return (
    <GlobalContext.Provider value={{previewLoaded,setPreviewLoaded, setMobileWidth}}>
    
    <Router>
      <ScrollToTop />
       <Switch>
         {
           (mobileWidth && continueWeb===false) &&
           <div style={{position:"absolute",backgroundColor:"#23b697",display:"flex",width:"100%",paddingBottom:220,flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",backgroundColor:"#23b697"}}>
            
              <div style={{padding:50,textAlign:"center",color:"white"}}>
              <img src={`${Logo}`} style={{position:"relative",bottom:-50,width:250,height:250}}/>
              <div style={{paddingTop:20,fontWeight:"bold"}}>Please download android or ios app for this website.</div>
              </div>
              <div style={{marginTop:-20}}>
                <img src="https://midiatama.co.id/_nuxt/img/gp.79741d9.svg"></img>
                <img src="https://midiatama.co.id/_nuxt/img/as.190ce99.svg"></img>
              </div>
              <div 
              onClick={()=>{
                setContinueWeb(true);
              }}
              style={{marginTop:30,fontSize:12,color:"white"}}>Continue To Web ...</div>
          </div>
         }
          <Route  path="/artikel/:idartikel">
            <DetailArtikel/>
          </Route>
          <Route  path="/training/:idtraining/pemesanan">
            <PemesananTraining/>
          </Route>
          <Route  path="/training/:idtraining">
            <DetailTraining/>
          </Route>
          <Route  path="/instruktur/:instruktur">
            <Detailnstruktur/>
          </Route>
          <Route  path="/login">
            <Login/>
          </Route>
          <Route  path="/artikel">
            <Artikel/>
          </Route>
          <Route  path="/galeri">
            <Galeri/>
          </Route>
          <Route  path="/shop">
            <Shop/>
          </Route>
          <Route  path="/training">
            <Training/>
          </Route>
          <Route  path="/jagoank3">
            <AboutJagoanK3/>
          </Route>
          <Route  path="/">
            <Index />
          </Route>
        </Switch>
    </Router>
    </GlobalContext.Provider>
  );
}

export default App;
