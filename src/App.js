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
import Dashboard from "./pages/Dashboard";
import PemesananShop from "./pages/PemesananShop";
import Webinar from './pages/Webinar';
import Ebook from "./pages/Ebook";
import HubungiKami from './pages/Bantuan/HubungiKami';
import SyaratDanKetentuan from './pages/Bantuan/SyaratDanKetentuan';
import FAQ from './pages/Bantuan/FAQ';
import SosialMedia from './pages/Bantuan/Sosial Media';

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

import endpoint from "./utils/endpoint";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  withRouter
} from "react-router-dom";

import {useEffect, useState, useContext, createContext, useLayoutEffect, useRef} from 'react';

export let GlobalContext = createContext();

let interval = {};

function App(props) {

  // let location = useLocation();

  // useEffect(()=>{
  //   alert("111");
  // },[location.pathname])

  let [keranjangShop, setKeranjangShop] = useState([]);

  let [pemesanan, setPemesanan] = useState({
    keranjang:[],
    voucher:null,
    diskon:null

  })

  let [previewLoaded, setPreviewLoaded] = useState(false);

  let [mobileWidth, setMobileWidth] = useState(false);

  let [continueWeb, setContinueWeb] = useState(false);

  let [imgs, setImgs] = useState([
    "https://midiatama.co.id/_nuxt/img/bg-training.7cc257e.png",
    "https://midiatama.co.id/_nuxt/img/bg-1.df32a04.jpg",
    "https://apimicca.midiatama.co.id/storage/konten-home/gambar1/bageur-901210621043226.png"
  ])

  let [complete,setComplete] = useState(false);

  let [chacheLoaded, setChacheloaded] = useState(false);
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
     setChacheloaded(true);
  }


  let [instruktur, setInstruktur] = useState([]);
  let [instrukturLoaded, setInstrukturLoaded] = useState(false);
  let fetchInstruktur = async ()=>{
    let request = await fetch(`${endpoint}/api/instruktur`);
    let json = await request.json();

    setInstruktur(json);
    setInstrukturLoaded(true);
  }


  let [ourclient, setOurClient] = useState([]);
  let [ourClientLoaded, setOurClientLoaded] = useState(false);
  let fetchOurClient = async ()=>{
    let request = await fetch(`${endpoint}/api/ourclient`);
    let json = await request.json();

    setOurClient(json);
    setOurClientLoaded(true);
  }


  let [banner, setBanner] = useState([]);
  let [bannerLoaded, setBannerLoaded] = useState(false);
  let fetchBanner = async ()=>{

     let request = await fetch(`${endpoint}/api/banner`);
     let json = await request.json();

     setBanner(json);
     setBannerLoaded(true);
  }


  let [dashboardText, setDashboardText] = useState({});
  let [dashboardTextLoaded, setDashboardTextLoaded] = useState(false);
  let fetchDashboardText = async()=>{
    let request = await fetch(`${endpoint}/api/dashboardtext`);
    let json = await request.json();

    setDashboardText(json);
    setDashboardTextLoaded(true);
  }

  let [credentials, setCredentials] = useState(null);
  let [credentialsLoaded, setCredentialsLoaded] = useState(false);
  let fetchCredentials = async()=>{
     if(window.localStorage.getItem("credentials")===null){
        setCredentials(null);
        setCredentialsLoaded(true);
     }
     else{

        let parsed = JSON.parse(window.localStorage.getItem("credentials"));

        setCredentials(parsed);
        setCredentialsLoaded(true);
     }
  }

  let [trainingTerdekat, setTrainingTerdekat] = useState([]);
  let [trainingTerdekatLoaded, setTrainingTerdekatLoaded] = useState(false);
  let fetchTrainingTerdekat = async ()=>{
     let request = await fetch(`${endpoint}/api/jadwaltrainingterdekat`);
     let json = await request.json();
     
     setTrainingTerdekat(json);
     setTrainingTerdekatLoaded(true);
  }


  let [kategoriTraining, setKategoriTraining] = useState([]);
  let [kategoriTrainingLoaded, setKategoriTrainingLoaded] = useState(false);
  let fetchKategoriTraining =  async()=>{
    let request = await fetch(`${endpoint}/api/kategoritraining`);
    let json = await request.json();
    setKategoriTraining(json);
    setKategoriTrainingLoaded(true);
  }

  let [hubungiKamiHTML, setHubungiKamiHTML] = useState({html:``});
  let [hubungiKamiHTMLLoaded, setHubungiKamiHTMLLoaded] = useState(false);
  let fetchHubungiKamiHTML = async ()=>{
    let request = await fetch(`${endpoint}/api/gethubungikami`);
    let json = await request.json();
    setHubungiKamiHTML(json);
    setHubungiKamiHTMLLoaded(true);
  }


  let [alamatKamiHTML, setAlamatKamiHTML] = useState({html:``});
  let [alamatKamiHTMLLoaded, setAlamatKamiHTMLLoaded] = useState(false);
  let fetchAlamatKamiHTML = async ()=>{
    let request = await fetch(`${endpoint}/api/getalamatkami`);
    let json = await request.json();
    setAlamatKamiHTML(json);
    setAlamatKamiHTMLLoaded(true);
  }

  let [halamanBantuan, setHalamanBantuan] = useState(null);
  let [halamanBantuanLoaded, setHalamanBantuanLoaded] = useState(false);
  let fetchHalamanBantuan = async()=>{
    let request = await fetch(`${endpoint}/api/gethalamanbantuan`);
    let json = await request.json();
    setHalamanBantuan(json);
    setHalamanBantuanLoaded(true);
    console.log(json);
  }

  let [tentangJagoanK3, setTentangJagoanK3] = useState(``);
  let [tentangJagoanK3Loaded, setTentangJagoanK3Loaded] = useState(false);
  let fetchTentangJagoanK3 = async ()=>{
    let request = await fetch(`${endpoint}/api/getjagoank3`);
    let json = await request.json();
    setTentangJagoanK3(json[0].text);
    setTentangJagoanK3Loaded(true);
  }


  let [linkmobile, setLinkMobile] = useState(null);
  let [linkMobileLoaded, setLinkMobileLoaded] = useState(false);
  let fetchLinkMobile = async ()=>{
    let request = await fetch(`${endpoint}/api/linkmobile`);
    let json = await request.json();
    setLinkMobile(json);
    setLinkMobileLoaded(true);
  }


  ///////////////
  let initialFetch = async()=>{
     try {
        cacheImages();
        fetchBanner();
        fetchInstruktur();
        fetchOurClient();
        fetchDashboardText();
        fetchCredentials();
        fetchTrainingTerdekat();
        fetchKategoriTraining();
        fetchHubungiKamiHTML();
        fetchAlamatKamiHTML();
        fetchHalamanBantuan();
        fetchTentangJagoanK3();
        fetchLinkMobile();
     } catch (error) {
        alert(error.message);
     }
  }

  useEffect(()=>{
    initialFetch();
  },[])

  useEffect(()=>{
    if(chacheLoaded && bannerLoaded && instrukturLoaded && dashboardTextLoaded && ourClientLoaded && credentialsLoaded && trainingTerdekatLoaded && kategoriTrainingLoaded && hubungiKamiHTMLLoaded && alamatKamiHTMLLoaded && halamanBantuanLoaded && tentangJagoanK3Loaded && linkMobileLoaded){
      setComplete(true);
    }
  },[chacheLoaded,bannerLoaded,instrukturLoaded, dashboardTextLoaded, ourClientLoaded, credentialsLoaded, trainingTerdekatLoaded, kategoriTrainingLoaded, hubungiKamiHTMLLoaded, alamatKamiHTMLLoaded, halamanBantuanLoaded, tentangJagoanK3Loaded, linkMobileLoaded])


  if(isMobile && continueWeb===false){
    return (
      <div style={{position:"absolute",backgroundColor:"#23b697",display:"flex",width:"100%",paddingBottom:220,flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",backgroundColor:"#23b697"}}>
            
            <div style={{padding:50,textAlign:"center",color:"white"}}>
            <img src={`${Logo}`} style={{position:"relative",bottom:-50,width:250,height:250}}/>
            <div style={{paddingTop:20,fontWeight:"bold"}}>Please download android or ios app for this website.</div>
            </div>
            <div style={{marginTop:-20}}>
              <a href={linkmobile.android.link}><img src="https://midiatama.co.id/_nuxt/img/gp.79741d9.svg"></img></a>
                <a href={linkmobile.ios.link}><img src="https://midiatama.co.id/_nuxt/img/as.190ce99.svg"></img></a>
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
    <GlobalContext.Provider value={{previewLoaded,setPreviewLoaded, setMobileWidth, 
    banner, setBanner, instruktur, setInstruktur,dashboardText,setDashboardText,
    ourclient,setOurClient,trainingTerdekat,setTrainingTerdekat,kategoriTraining,setKategoriTraining,
    interval, pemesanan, setPemesanan, credentials, setCredentials, keranjangShop, setKeranjangShop,
    alamatKamiHTML,hubungiKamiHTML, halamanBantuan, tentangJagoanK3, linkmobile
    }}>
    
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
                <a href={linkmobile.android.link}><img src="https://midiatama.co.id/_nuxt/img/gp.79741d9.svg"></img></a>
                <a href={linkmobile.ios.link}><img src="https://midiatama.co.id/_nuxt/img/as.190ce99.svg"></img></a>
              </div>
              <div 
              onClick={()=>{
                setContinueWeb(true);
              }}
              style={{marginTop:30,fontSize:12,color:"white"}}>Continue To Web ...</div>
          </div>
         }

        <Route  path="/shop/checkout" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <PemesananShop/>;
          }} />

        <Route  path="/dashboard" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <Dashboard/>;
          }} />


        <Route path="/bantuan/hubungikami" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <HubungiKami/>;
          }} />


<Route path="/bantuan/syaratdanketentuan" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <SyaratDanKetentuan/>;
          }} />

<Route path="/bantuan/faq" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <FAQ/>;
          }} />

<Route path="/bantuan/sosialmedia" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <SosialMedia/>;
          }} />

          

          <Route  path="/artikel/:idartikel" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <DetailArtikel/>;
          }} />
        
          <Route path="/training/:idtraining/pemesanan" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <PemesananTraining/>;
          }} />

          <Route  path="/training/:idtraining" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <DetailTraining/>;
          }} />

          <Route  path="/instruktur/:instruktur" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <Detailnstruktur/>;
          }} />
            
          <Route  path="/login" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <Login/>
          }} />
            
          <Route  path="/artikel" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return  <Artikel/>
          }} />
           
          <Route  path="/galeri" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <Galeri/>;
          }} />
            
          <Route  path="/shop" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <Shop/>
          }} />
            
          <Route  path="/training" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return <Training/>
          }} />
            
          <Route  path="/jagoank3" render={()=>{
             Object.keys(interval).forEach((keys)=>{
              clearInterval(interval[keys]);
          })
            return  <AboutJagoanK3/>
          }} />

        <Route  path="/ebook" render={()=>{
            Object.keys(interval).forEach((keys)=>{
                clearInterval(interval[keys]);
            })

            return  <Ebook />
          }}/>
           

        <Route  path="/webinar" render={()=>{
            Object.keys(interval).forEach((keys)=>{
                clearInterval(interval[keys]);
            })

            return  <Webinar />
          }}/>
           
          <Route  path="/" render={()=>{
            Object.keys(interval).forEach((keys)=>{
                clearInterval(interval[keys]);
            })

            return  <Index />
          }}/>
           
        </Switch>
    </Router>
    </GlobalContext.Provider>
  );
}

export default App;
