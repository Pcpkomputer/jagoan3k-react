import Index from "./pages/Index"
import AboutJagoanK3 from './pages/AboutJagoanK3';
import Training from "./pages/Training";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {useEffect, useState} from 'react';

function App() {

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
     await setComplete(true);
  }

  useEffect(()=>{
    cacheImages();
  },[])

  if(!complete){
    return (
      <div>
        asdasdasd
      </div>
    )
  }

  return (
    <Router>
       <Switch>
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
  );
}

export default App;
