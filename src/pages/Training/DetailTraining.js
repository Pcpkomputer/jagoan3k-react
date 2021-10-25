import { useEffect, useState, useContext } from 'react';

import { Container, Row, Col, Spinner, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DetailTrainingTabs from './DetailTrainingTabs';



import "../../custom.css";
import $ from 'jquery';

import { useMediaQuery } from 'react-responsive'
import Slider from "react-slick";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import {Helmet} from "react-helmet";

import { GlobalContext } from '../../App';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useLocation
} from "react-router-dom";

import Footer from '../../components/Footer';
import NavBar from '../../components/Navbar';

import endpoint from '../../utils/endpoint';

import { toLocaleTimestamp, formatRupiah, makeid} from '../../utils/function';


export default function DetailTraining(props){

 

  let history = useHistory();

  let [btnVoucherLoading, setBtnVoucherLoading] = useState(false);
  let [txtvoucher, setTxtVoucher] = useState("");

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();


  let globalContext = useContext(GlobalContext);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })

  let [dataLoaded, setDataLoaded] = useState(false);

  let [jumlahStok, setJumlahStok] = useState(0);
  let [stokTerpenuhi, setStokTerpenuhi] = useState(0);

  let [useVoucher, setUseVoucher] = useState(false);

  let params = useParams();

  let [videoLoaded, setVideoLoaded] = useState(false);

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


let settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: (max991) ? 1:(max1400) ? 2:3,
  slidesToScroll: (max991) ? 1:(max1400) ? 2:3,
  
};


  let [stickyHeaderShow, setStickyHeaderShow] = useState(false);

  let [selectedOffer, setSelectedOffer] = useState(0);


  useEffect(()=>{
    window.$ = $;
  },[])


  let url = useParams();

  let [selectedIndexPromo, setSelectedIndexPromo] = useState(0);

  let [training, setTraining] = useState(null);

  let fetchDetailTraining = async()=>{
    let request = await fetch(`${endpoint}/api/training/${url.idtraining}`);
    let json = await request.json();
    setTraining(json[0]);
    setDataLoaded(true);
  }

  useEffect(()=>  {
    fetchDetailTraining();
  },[])

  useEffect(()=>{
      globalContext.setPemesanan((prev)=>{
        return {
          ...prev,
          diskon:null,
          voucher:null
        }
      })
  },[])


  useEffect(()=>{
      if(training?.itemtraining?.length>0 && dataLoaded){
          training.itemtraining.forEach((item,index)=>{
            if(item.sedangpromo){
              globalContext.interval[`promodanpaket-${index}-${item.id_training}-${makeid(4)}`] = setInterval(() => {
                var now = new Date().getTime();
                
                var distance = new Date(item.tanggalpromoberakhir) - now;

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.querySelector(`#promodanpaket-${index} #countdownContainer`).innerHTML=
                `
        
                  <div>
                    <div style="background-color: green; color: white; font-size: 27px; margin-right: 15px; font-weight: bold; text-align: center; padding: 10px 15px; width: 65px; border-radius: 10px;">
                      ${days}
                    </div>
                    <div style="text-align: center; font-weight: bold; margin-top: 5px; margin-right: 15px;">
                      Hari
                    </div>
                  </div>
                  <div>
                    <div style="background-color: green; color: white; font-size: 27px; margin-right: 15px; font-weight: bold; text-align: center; padding: 10px 15px; width: 65px; border-radius: 10px;">
                      ${hours}
                    </div>
                    <div style="text-align: center; font-weight: bold; margin-top: 5px; margin-right: 15px;">
                      Jam
                    </div>
                  </div>
                  <div>
                    <div style="background-color: green; color: white; font-size: 27px; margin-right: 15px; font-weight: bold; text-align: center; padding: 10px 15px; width: 65px; border-radius: 10px;">
                      ${minutes}
                    </div>
                    <div style="text-align: center; font-weight: bold; margin-top: 5px; margin-right: 15px;">
                      Menit
                    </div>
                  </div>
                  <div>
                    <div style="background-color: green; color: white; font-size: 27px; margin-right: 15px; font-weight: bold; text-align: center; padding: 10px 15px; width: 65px; border-radius: 10px;">
                      ${seconds}
                    </div>
                    <div style="text-align: center; font-weight: bold; margin-top: 5px; margin-right: 15px;">
                      Detik
                    </div>
                  </div>

                `
            }, 1000);
            }
          })
      }
  },[training,dataLoaded])



  let fetchStokKursi = async (id_training, id_itemtraining)=>{
      let request = await fetch(`${endpoint}/api/getstokkursi`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({
          id_training,
          id_itemtraining
        })
      });
      let json = await request.json();
      
      setStokTerpenuhi(json.kursiterpenuhi);
      setJumlahStok(json.stokkursi);
  }

  useEffect(()=>{
    if(dataLoaded){
      let {id_training,id} = training.itemtraining[selectedIndexPromo];
      fetchStokKursi(id_training,id);
    }
  },[dataLoaded])
  

  return (
    <div style={{fontFamily:"Poppins, sans-serif"}}>
      <Helmet>
                <meta charSet="utf-8" />
                <script defer type="text/javascript" src="../jquery.js"/>
                <script type="text/javascript" src="../owl_carousel/owl.carousel.min.js"></script>
                <script>
                   window.$ = $;
                </script>
                <script>
                    console.log(document.querySelector("#promodanpaket-0"));
                </script>
            </Helmet>
        <Container fluid={true} style={{margin:0,padding:0,backgroundColor:"whitesmoke",background:"url('https://midiatama.co.id/_nuxt/img/bg-training.7cc257e.png')",height:300}}>
           <div style={{position:"absolute",zIndex:1,width:"100%",height:300,backgroundColor:"black",opacity:0.5}}></div>

           <div style={{width:"100%",position:"absolute",zIndex:100,height:300,display:"flex",justifyContent:"center",paddingLeft:(isTabletOrMobile) ? 80:150,paddingRight:150,flexDirection:"column"}}>
                <div style={{fontSize:35,letterSpacing:5,fontWeight:"bold",color:"white"}}>DETAIL TRAINING</div>
                <div style={{marginTop:10,display:"flex",alignItems:"center",flexDirection:"row"}}>
                    <div style={{color:"white", marginRight:10}}>Home</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white",marginRight:10}}>Training</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white"}}>Detail Training</div>
                </div>
           </div>
        </Container>

         {/* Sticky Header */}
         {
          (stickyHeaderShow) &&
          <NavBar sticky={true}/>
        }




         <NavBar/>

         {
           (!dataLoaded) &&
           <div style={{marginTop:(isTabletOrMobile) ? 80:100,marginBottom:(isTabletOrMobile) ? 80:100}}>
             <Container>
             <div style={{paddingTop:50,justifyContent:"center",alignItems:"center",display:"flex"}}>
                <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",padding:15,boxShadow:"2px 9px 25px 2px rgba(0,0,0,0.1)"}}> 
                Sedang Memuat Data
                <Spinner style={{marginLeft:15}} size="sm" animation="border" variant="primary" />
                </div>
            </div>
            </Container>
          </div>
         }


          {
             (dataLoaded) &&
             <div style={{marginTop:(isTabletOrMobile) ? 80:100,marginBottom:(isTabletOrMobile) ? 80:100}}>
             <Container>
                   <Row>
                      <Col lg={12} style={{marginBottom:30}}>
                          <Row style={{backgroundColor:"white",borderRadius:10,padding:30,boxShadow:"0 0 .25rem rgba(0,0,0,.1)"}}>
                             <Col lg={6} style={{marginBottom:30}}>
                               <img style={{width:"100%",borderRadius:10}} src={`${endpoint}/storage/public/training/${training.foto}`}/>
                             </Col>
                             <Col lg={6}>
                                 <div style={{fontWeight:"bold",fontSize:17}}>{training.namatraining}</div>
                                 <label style={{marginTop:15,fontSize:14}}>Pembinaan & Sertifikasi {training.subkategoritraining}</label>
                                 <div style={{marginTop:30,fontWeight:"bold",borderTop:"solid 1px black",borderBottom:"solid 1px black",paddingTop:20,paddingBottom:20}}>
                                     Jadwal Training : <span style={{color:"green"}}>{toLocaleTimestamp(training.jadwaltraining)}</span>
                                 </div>
                                 <div style={{marginTop:20}}>
                                       <div style={{fontWeight:"bold",fontSize:17}}>Diskon Saat Ini</div>
                                       {/* <div style={{marginTop:20,backgroundColor:"#eaffea",boxShadow:"0 0 .25rem rgba(0,0,0,.1)",borderRadius:10,padding:20}}>
                                           <div style={{padding:20,textAlign:"center",fontSize:15}}>Harga Early Bird Ahli K3 Umum Freshgraduate akan berakhir dalam</div>
                                           <div style={{display:"flex",justifyContent:"center",marginTop:10,alignItems:"center",borderBottom:"solid 1px black",paddingBottom:30}}>
                                               <div>
                                                     <div style={{backgroundColor:"green",color:"white",fontSize:27,marginRight:15,fontWeight:"bold",textAlign:"center",padding:"10px 15px 10px 15px",width:65,borderRadius:10}}>
                                                       1
                                                     </div>
                                                     <div style={{textAlign:"center",fontWeight:"bold",marginTop:5,marginRight:15}}>
                                                       Hari
                                                     </div>
                                               </div>
                                               <div>
                                                     <div style={{backgroundColor:"green",color:"white",fontSize:27,marginRight:15,fontWeight:"bold",textAlign:"center",padding:"10px 15px 10px 15px",width:65,borderRadius:10}}>
                                                       12
                                                     </div>
                                                     <div style={{textAlign:"center",fontWeight:"bold",marginTop:5,marginRight:15}}>
                                                       Jam
                                                     </div>
                                               </div>
                                               <div>
                                                     <div style={{backgroundColor:"green",color:"white",fontSize:27,marginRight:15,fontWeight:"bold",textAlign:"center",padding:"10px 15px 10px 15px",width:65,borderRadius:10}}>
                                                       32
                                                     </div>
                                                     <div style={{textAlign:"center",fontWeight:"bold",marginTop:5,marginRight:15}}>
                                                       Menit
                                                     </div>
                                               </div>
                                               <div>
                                                     <div style={{backgroundColor:"green",color:"white",fontSize:27,marginRight:15,fontWeight:"bold",textAlign:"center",padding:"10px 15px 10px 15px",width:65,borderRadius:10}}>
                                                       05
                                                     </div>
                                                     <div style={{textAlign:"center",fontWeight:"bold",marginTop:5,marginRight:15}}>
                                                       Detik
                                                     </div>
                                               </div>
                                           </div>
                                           <div style={{marginTop:20,display:(isTabletOrMobile) ? null:"flex"}}>
                                             <div style={{flex:1}}>
               
                                               <div style={{fontSize:18,letterSpacing:3,fontWeight:"bold",wordBreak:"break-word"}}>EARLY BIRD AHLI K3 UMUM PERUSAHAAN</div>
                                               <div style={{marginTop:20,padding:5,border:"solid 1px black",width:"fit-content",borderRadius:20,fontSize:12,color:"green",borderColor:"green"}}>Yang anda pilih</div>
                                             </div>
                                             <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                                 <div style={{textAlign:"right"}}>8.000.000</div>
                                                 <div style={{fontSize:23,fontWeight:"bold",width:250,textAlign:"right",color:"green"}}>IDR 5.500.00000</div>
                                             </div>
                                           </div>
                                       </div> */}
                                       {/* <div style={{marginTop:20,boxShadow:"0 0 .25rem rgba(0,0,0,.1)",borderRadius:10,padding:20}}>
                                 
                                           <div style={{marginTop:20,display:(isTabletOrMobile) ? null:"flex"}}>
                                             <div style={{flex:1}}>
               
                                               <div style={{fontSize:18,letterSpacing:3,fontWeight:"bold",wordBreak:"break-word"}}>EARLY BIRD AHLI K3 UMUM PERUSAHAAN</div>
                                               <div style={{marginTop:20,padding:5,border:"solid 1px black",width:"fit-content",borderRadius:20,fontSize:12,color:"green",borderColor:"green",opacity:0,pointerEvents:"none"}}>Yang anda pilih</div>
                                             </div>
                                             <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                                 <div style={{textAlign:"right"}}>8.000.000</div>
                                                 <div style={{fontSize:23,fontWeight:"bold",width:250,textAlign:"right",color:"green"}}>IDR 5.500.00000</div>
                                             </div>
                                           </div>
                                       </div> */}

                                       {
                                         (training.itemtraining).map((item,index)=>{
                                              if(!item.sedangpromo){
                                                return (
                                                  <div onClick={async ()=>{
                                                    await fetchStokKursi(training.id_training, item.id);
                                                    setSelectedIndexPromo(index);
                                                    }}  id={`promodanpaket-${index}`} style={{cursor:"pointer",backgroundColor:(index===selectedIndexPromo) ? "#eaffea":null,marginTop:20,boxShadow:"0 0 .25rem rgba(0,0,0,.1)",borderRadius:10,padding:20}}>
                                                  <div style={{marginTop:20,display:(isTabletOrMobile) ? null:"flex"}}>
                                                    <div style={{flex:1}}>
                      
                                                      <div style={{fontSize:18,letterSpacing:3,fontWeight:"bold",wordBreak:"break-word"}}>{item.namapaketpelatihan.toUpperCase()}</div>
                                                      <div style={{marginTop:20,padding:5,border:"solid 1px black",width:"fit-content",borderRadius:20,fontSize:12,color:"green",borderColor:"green",opacity:(index===selectedIndexPromo) ? 1:0,pointerEvents:"none"}}>Yang anda pilih</div>
                                                    </div>
                                                    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                                        <div style={{textAlign:"right"}}></div>
                                                        <div style={{fontSize:23,fontWeight:"bold",width:250,textAlign:"right",color:"green"}}>IDR {formatRupiah(item.hargapaketpelatihan)}</div>
                                                    </div>
                                                  </div>
                                              </div>
                                                )
                                              }
                                              else{

                                                return (
                                                  <div 
                                                  onClick={async ()=>{
                                                    await fetchStokKursi(training.id_training, item.id);
                                                    setSelectedIndexPromo(index)
                                                  }}
                                                  id={`promodanpaket-${index}`} style={{marginTop:20,cursor:"pointer",backgroundColor:(index===selectedIndexPromo) ? "#eaffea":null,boxShadow:"0 0 .25rem rgba(0,0,0,.1)",borderRadius:10,padding:20}}>
                                                      <div style={{padding:20,textAlign:"center",fontSize:15}}>Harga {item.namapaketpelatihan.toUpperCase()} akan berakhir dalam</div>
                                                      <div id="countdownContainer" style={{display:"flex",justifyContent:"center",marginTop:10,alignItems:"center",borderBottom:"solid 1px black",paddingBottom:30}}>
                                                          
                                                      </div>
                                                      <div style={{marginTop:20,display:(isTabletOrMobile) ? null:"flex"}}>
                                                        <div style={{flex:1}}>
                          
                                                          <div style={{fontSize:18,letterSpacing:3,fontWeight:"bold",wordBreak:"break-word"}}>{item.namapaketpelatihan.toUpperCase()}</div>
                                                          <div style={{marginTop:20,padding:5,border:"solid 1px black",width:"fit-content",borderRadius:20,fontSize:12,color:"green",opacity:(index===selectedIndexPromo) ? 1:0,borderColor:"green"}}>Yang anda pilih</div>
                                                        </div>
                                                        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                                            <div style={{textAlign:"right",textDecoration:"line-through"}}>{item.hargapaketpelatihan}</div>
                                                            <div style={{fontSize:23,fontWeight:"bold",width:250,textAlign:"right",color:"green"}}>IDR {formatRupiah(item.hargapromopaketpelatihan)}</div>
                                                        </div>
                                                      </div>
                                                  </div>
                                                )
                                              }
                                              
                                         })
                                       }
                                       <div style={{marginTop:20,position:"relative"}}>
                                           <label style={{position:"absolute",textAlign:"center",width:"100%",height:"100%",marginTop:6,color:"white",fontWeight:"bold"}}>Tersisa {jumlahStok-stokTerpenuhi} dari {jumlahStok}</label>
                                           <ProgressBar style={{height:35,borderRadius:50}} variant="success" now={100-(stokTerpenuhi/jumlahStok*100)} />
                                       </div>
                                       <div style={{padding:10,marginTop:20,border:"solid 2px #198753",borderRadius:10,textAlign:"center",color:"#198753",fontWeight:"bold"}}>{stokTerpenuhi}x Orang Sudah Pesan</div>
                                       <div style={{height:1,borderBottom:"solid 1px green",marginTop:30,marginBottom:20}}></div>
                                       <div>
                                           <label style={{fontWeight:"bold"}}>Kode Voucher</label>
                                           <div style={{display:"flex",flexDirection:"row",marginTop:13}}>
                                               <div style={{flex:1}}>
                                                    {
                                                      (useVoucher) ?
                                                      <input       
                                                      class="form-control" disabled readOnly value={globalContext.pemesanan.voucher.kode_voucher} placeholder="Kode Voucher" style={{width:"100%",padding:5,paddingLeft:10,paddingRight:10,outline:"none",boxShadow:"none",border:"solid 1px #d8d8d8"}} type="text"/>
                                                   
                                                      :
                                                      <input 
                                                      onChange={(e)=>{
                                                         setTxtVoucher(e.target.value);
                                                      }}
                                                      class="form-control" value={txtvoucher} placeholder="Kode Voucher" style={{width:"100%",padding:5,paddingLeft:10,paddingRight:10,outline:"none",boxShadow:"none",border:"solid 1px #d8d8d8"}} type="text"/>
                                                   
                                                    }
                                                </div>
                                               <div>
                                                 {
                                                   (btnVoucherLoading) ?
                                                   <div 
                                                   style={{paddingLeft:20,paddingRight:20,backgroundColor:"#198753",height:"100%",borderRadius:5,textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>
                                                     <Spinner size="sm" animation="border" variant="light" />
                                                   </div>
                                                   :
                                                   <div 
                                                   onClick={async ()=>{
                                                      if(txtvoucher.length===0){
                                                        alert("Masukkan kode voucher...");
                                                      }
                                                      else{
                                                        setBtnVoucherLoading(true);

                                                        let request = await fetch(`${endpoint}/api/checkvoucher`,{
                                                          method:"POST",
                                                          headers:{
                                                            "content-type":"application/json"
                                                          },
                                                          body:JSON.stringify({
                                                             kodevoucher:txtvoucher
                                                          })
                                                        });
                                                        let json = await request.json();
                                                        
                                                        if(json.success){
                                                          let {voucher} = json.data;
                                                          globalContext.setPemesanan((prev)=>{
                                                            return {
                                                              ...prev,
                                                              voucher:voucher,
                                                              diskon:voucher
                                                            }
                                                          });
                                                          setUseVoucher(true);
                                                        }
                                                        else{
                                                          alert(json.msg);
                                                        }

                                                        setBtnVoucherLoading(false);
                                                      }
                                                   }}
                                                   style={{paddingLeft:20,cursor:"pointer",paddingRight:20,backgroundColor:"#198753",height:"100%",borderRadius:5,textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>Proses</div>
                                                 }
                                               </div>
                                           </div>
                                       </div>
                                  
                                         <div onClick={()=>{
                                           globalContext.setPemesanan((prev)=>{
                                             return {
                                               ...prev,
                                               keranjang:[
                                                 {
                                                   training:training,
                                                   itemtraining:training.itemtraining[selectedIndexPromo]
                                                 }
                                               ]
                                             }
                                           });
                                           if(query.get("referral")){
                                             history.push(`${url.idtraining}/pemesanan?referral=${query.get("referral")}`);
                                           }
                                           else{
                                            history.push(`${url.idtraining}/pemesanan`);
                                           }
                                         }} style={{cursor:"pointer",marginTop:25,backgroundColor:"#27b394",color:"white",fontWeight:"bold",borderRadius:10,padding:10,textAlign:"center"}}>
                                             Proses Pemesanan
                                         </div>
                                 
                                 </div>
                             </Col>
                          </Row>
                      </Col>
                   </Row>
                   <Row style={{marginTop:30}}>
                     <DetailTrainingTabs training={training}/>
                   </Row>
               </Container>
           </div>
          }
          <Footer/>
    </div>
  )
}