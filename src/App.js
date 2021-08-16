import Index from "./pages/Index"
import AboutJagoanK3 from './pages/AboutJagoanK3';
import Training from "./pages/Training";
import Shop from "./pages/Shop";
import Galeri from "./pages/Galeri";
import Artikel from "./pages/Artikel";
import Login from "./pages/Login";
import Detailnstruktur from "./pages/Instruktur/DetailInstruktur";
import DetailTraining from "./pages/Training/DetailTraining";

import "./css/App.css";

import Logo from './assets/logo.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {useEffect, useState, useContext, createContext} from 'react';

export let GlobalContext = createContext();

function App() {


  let [previewLoaded, setPreviewLoaded] = useState(false);


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

  if(!complete){
    return (
      <div style={{display:"flex",justifyContent:"center",paddingBottom:20,flexDirection:"column",alignItems:"center",backgroundColor:"#21b798",height:"100vh",overflow:"hidden"}}>
        <img src={`${Logo}`} className="ScaleAnimation_" style={{width:250,height:250}}/>
        <div className="ScaleAnimation_" style={{position:"relative",bottom:40,fontSize:30,color:"white",fontWeight:"bold",fontFamily:"Poppins"}}>Jagoan K3</div>
      </div>
    )
  }

  return (
    <GlobalContext.Provider value={{previewLoaded,setPreviewLoaded}}>
    <Router>
       <Switch>
          <Route exact path="/training/:idtraining">
            <DetailTraining/>
          </Route>
          <Route exact path="/instruktur/:instruktur">
            <Detailnstruktur/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/artikel">
            <Artikel/>
          </Route>
          <Route exact path="/galeri">
            <Galeri/>
          </Route>
          <Route exact path="/shop">
            <Shop/>
          </Route>
          <Route exact path="/training">
            <Training/>
          </Route>
          <Route exact path="/jagoank3">
            <AboutJagoanK3/>
          </Route>
          <Route exact path="/">
            <Index />
          </Route>
        </Switch>
    </Router>
    </GlobalContext.Provider>
  );
}

export default App;
