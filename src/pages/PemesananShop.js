import { useEffect, useState, useContext } from 'react';

import { Container, Row, Col, Spinner, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GlobalContext } from '../App';

import { FaCheck } from "react-icons/fa";

import "../custom.css";
import $ from 'jquery';

import { useMediaQuery } from 'react-responsive'
import Slider from "react-slick";
import { useLocation } from 'react-router';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import {Helmet} from "react-helmet";

import Arrow from '../svg/Arrow';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";

import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import endpoint from '../utils/endpoint';

import { toLocaleTimestamp, formatRupiah } from '../utils/function';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default function PemesananTraining(props){

  let query = useQuery();
  let history = useHistory();

  

  let [txtKodeVoucher, setTxtKodeVoucher] = useState("");

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })
  
  let globalContext = useContext(GlobalContext);

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

  
  let [currentStep, setCurrentStep] = useState(2);

  let [jumlahBayar, setJumlahBayar] = useState(0);

  let [historyPemesanan, setHistoryPemesanan] = useState([]);


  useEffect(()=>{
    window.$ = $;
  },[])

  let [referral, setReferral] = useState(null);

  useEffect(()=>{
    let total = 0;

    globalContext.keranjangShop.map((item,index)=>{
            total = total+item.harga;
    });
    
 
    setJumlahBayar(total);

  },[]);

 
  let [pendaftaranLoading, setPendaftaranLoading] = useState(false);

  let [invoice, setInvoice] = useState(null);

  let checkReferral = async ()=>{
    let request = await fetch(`${endpoint}/api/checkreferral`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            referral:query.get("referral")
        })
    });
    let json = await request.json();
    if(json.exist){ 
        setReferral(query.get("referral"));
    }
    else{
        history.replace("/");
    }
  }

  useEffect(()=>{
    if(query.get("referral")){
        checkReferral();
    }else{
        setReferral(null);
    }
  },[query.get("referral")]);

  useEffect(()=>{ 
      if(globalContext.keranjangShop.length===0){
          history.replace("/");
      }
  },[])

  return (
    <div style={{fontFamily:"Poppins, sans-serif"}}>
      {/* <Helmet>
                <meta charSet="utf-8" />
                <script defer type="text/javascript" src="../jquery.js"/>
                <script type="text/javascript" src="../owl_carousel/owl.carousel.min.js"></script>
                <script>
                   window.$ = $;
                </script>
            </Helmet> */}
        <Container fluid={true} style={{margin:0,padding:0,backgroundColor:"whitesmoke",background:"url('https://midiatama.co.id/_nuxt/img/bg-karir.993f53c.png')",height:300}}>
           <div style={{position:"absolute",zIndex:1,width:"100%",height:300,backgroundColor:"black",opacity:0.5}}></div>

           <div style={{width:"100%",position:"absolute",zIndex:100,height:300,display:"flex",justifyContent:"center",paddingLeft:(isTabletOrMobile) ? 80:150,paddingRight:150,flexDirection:"column"}}>
                <div style={{fontSize:35,letterSpacing:5,fontWeight:"bold",color:"white"}}>SHOP JAGOAN K3</div>
                <div style={{marginTop:10,display:"flex",alignItems:"center",flexDirection:"row"}}>
                    <div style={{color:"white", marginRight:10}}>Home</div>
                    <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{color:"white"}}>Shop</div>
                    <div style={{marginLeft:10,width:5,height:5,backgroundColor:"white"}}></div>
                    <div style={{marginLeft:10,color:"white"}}>Checkout</div>
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
            <Container>
                  <Row style={{justifyContent:"center"}}>
                        <Col lg={3} style={{display:"flex",marginBottom:30,opacity:(currentStep>=1) ? 1:0.5,marginRight:20,justifyContent:"center",alignItems:"center",width:"100%",height:70,width:300}}>    
                            <Arrow style={{position:"absolute",zIndex:1}}/>
                            <div style={{position:"absolute",flexDirection:"row",justifyContent:"center",alignItems:"center",display:"flex",zIndex:999,color:"white",fontWeight:"bold"}}>
                                <div style={{marginRight:15,display:"flex",color:"#23b697",justifyContent:"center",alignItems:"center",borderRadius:999,backgroundColor:"white",width:35,height:35}}>
                                    {
                                        (currentStep>1) ?
                                        <FaCheck/>
                                        :
                                        1
                                    }
                                </div>
                                <div>Pilih Barang</div>
                            </div>
                        </Col>
                        <Col lg={3} style={{display:"flex",marginBottom:30,opacity:(currentStep>=2) ? 1:0.5,marginRight:20,justifyContent:"center",alignItems:"center",width:"100%",height:70,width:300}}>    
                            <Arrow style={{position:"absolute",zIndex:1}}/>
                            <div style={{position:"absolute",flexDirection:"row",justifyContent:"center",alignItems:"center",display:"flex",zIndex:999,color:"white",fontWeight:"bold"}}>
                                <div style={{marginRight:15,display:"flex",color:"#23b697",justifyContent:"center",alignItems:"center",borderRadius:999,backgroundColor:"white",width:35,height:35}}>
                                    {
                                        (currentStep>2) ?
                                        <FaCheck/>
                                        :
                                        2
                                    }
                                </div>
                                <div>Detail Kontak</div>
                            </div>
                        </Col>
                        <Col lg={3} style={{display:"flex",marginBottom:30,opacity:(currentStep>=3) ? 1:0.5,marginRight:20,justifyContent:"center",alignItems:"center",width:"100%",height:70,width:300}}>    
                            <Arrow style={{position:"absolute",zIndex:1}}/>
                            <div style={{position:"absolute",flexDirection:"row",justifyContent:"center",alignItems:"center",display:"flex",zIndex:999,color:"white",fontWeight:"bold"}}>
                                <div style={{marginRight:15,display:"flex",color:"#23b697",justifyContent:"center",alignItems:"center",borderRadius:999,backgroundColor:"white",width:35,height:35}}>
                                {
                                        (currentStep>3) ?
                                        <FaCheck/>
                                        :
                                        3
                                    }
                                </div>
                                <div>Pembayaran</div>
                            </div>
                        </Col>
                        <Col lg={3} style={{display:"flex",marginBottom:30,opacity:(currentStep>4) ? 1:0.5,marginRight:20,justifyContent:"center",alignItems:"center",width:"100%",height:70,width:300}}>    
                            <Arrow style={{position:"absolute",zIndex:1}}/>
                            <div style={{position:"absolute",flexDirection:"row",justifyContent:"center",alignItems:"center",display:"flex",zIndex:999,color:"white",fontWeight:"bold"}}>
                                <div style={{marginRight:15,display:"flex",color:"#23b697",justifyContent:"center",alignItems:"center",borderRadius:999,backgroundColor:"white",width:35,height:35}}>
                                {
                                        (currentStep>4) ?
                                        <FaCheck/>
                                        :
                                        4
                                    }
                                </div>
                                <div>Selesai</div>
                            </div>
                        </Col>
                  </Row>
                  {
                      (currentStep===2) &&
                      <Row style={{marginTop:30}}>
                      {
                          (globalContext.credentials) ?
                          <Col lg={8} style={{marginBottom:50,position:"relative"}}>
                          <div style={{fontWeight:"bold",fontSize:20,marginBottom:60}}>Data Peserta</div>
                            <Row style={{marginTop:20,justifyContent:"center",alignItems:"center"}}>
                                <Col lg={4} style={{fontWeight:"bold",fontSize:17,marginBottom:10}}>
                                    Nama Anda
                                </Col>
                                <Col lg={8} style={{paddingRight:10}}>
                                    <input readOnly value={globalContext.credentials.detail.nama} style={{width:"100%",padding:5,border:"solid 1px",borderRadius:5}} type="text"></input>
                                </Col>
                            </Row>
                            <Row style={{marginTop:20,justifyContent:"center",alignItems:"center"}}>
                                <Col lg={4} style={{fontWeight:"bold",fontSize:17,marginBottom:10}}>
                                      Email
                                </Col>
                                <Col lg={8} style={{paddingRight:10}}>
                                    <input readOnly value={globalContext.credentials.detail.email} style={{width:"100%",padding:5,border:"solid 1px",borderRadius:5}} type="text"></input>
                                </Col>
                            </Row>
                            <Row style={{marginTop:20,justifyContent:"center",alignItems:"center"}}>
                                <Col lg={4} style={{fontWeight:"bold",fontSize:17,marginBottom:10}}>
                                      No. Hp
                                </Col>
                                <Col lg={8} style={{paddingRight:10}}>
                                    <input readOnly value={globalContext.credentials.detail.notelepon} style={{width:"100%",padding:5,border:"solid 1px",borderRadius:5}} type="text"></input>
                                </Col>
                            </Row>
                            <div style={{marginTop:40}}>
                                <div 
                                onClick={()=>{
                                    setCurrentStep(3);
                                }}
                                style={{backgroundColor:"#e23b25",cursor:"pointer",letterSpacing:1,color:"white",borderRadius:5,textAlign:"center",width:200,padding:"10px 15px 10px 15px"}}>
                                    SELANJUTNYA
                                </div>
                            </div>
                            <div style={{height:1,marginTop:50,marginBottom:30,borderBottom:"solid 1px #e8e8e8"}}></div>
                            {/* <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
                              Sudah memiliki akun? <label style={{marginLeft:5,fontWeight:"bold"}}>Masuk</label>
                            </div> */}
                        </Col>
                        :
                        <Col lg={8} style={{marginBottom:50,position:"relative"}}>
                             <div style={{fontWeight:"bold",fontSize:20,marginBottom:60}}>Data Peserta</div>
                            <div style={{height:250,padding:"0px 30px 0px 30px",backgroundColor:"whitesmoke",borderRadius:10,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                Untuk melanjutkan pemesanan silakan <Link to={`/login?origin=pemesanan`}><b style={{marginLeft:5,color:"black",marginRight:5}}>login</b></Link> atau <Link to={`/login?origin=pemesanan`}><b style={{marginLeft:5,color:"black",marginRight:5}}>daftar</b></Link> terlebih dahulu...
                            </div>
                            <div style={{height:1,marginTop:50,marginBottom:30,borderBottom:"solid 1px #e8e8e8"}}></div>
                            <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
                              Sudah memiliki akun? <Link to={`/login?origin=pemesanan`}><label style={{marginLeft:5,fontWeight:"bold",color:"black",cursor:"pointer"}}>Masuk</label></Link>
                            </div>
                        </Col>
                      }
                      <Col lg={4} style={{paddingLeft:40,paddingRight:40}}>
                          <div style={{border:"solid 1px #e8e8e8",borderRadius:10,paddingTop:20,paddingBottom:20}}>
                              <div style={{fontWeight:"bold",borderBottom:"solid 1px #e8e8e8",paddingBottom:20,marginRight:20,marginLeft:20}}>Pemesanan Anda</div>
                              <div style={{marginTop:10,marginLeft:20,marginRight:20}}>
                                 {
                                     globalContext.keranjangShop.map((item,index)=>{
                                         return (
                                            <div style={{display:"flex",marginBottom:20}}>
                                                    <div style={{flex:1}}>
                                                        <div style={{fontWeight:"bold",overflow:"hidden",textOverflow:"ellipsis",wordBreak:"break-word",paddingRight:20}}>{item.nama_barang}</div>
                                                        <div style={{fontSize:13,marginTop:10}}>{toLocaleTimestamp(new Date())}</div>
                                                    </div>
                                                    <div style={{padding:5,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                        <img src={`${endpoint}/storage/public/shop/${item.gambar_barang}`} style={{width:90,borderRadius:10}}></img>
                                                    </div>
                                            </div>
                                         )
                                     })
                                 }
                                  
                              </div>
                              <div style={{marginTop:25,marginLeft:20,marginRight:20}}>
                                 
                                  <div style={{marginTop:20,paddingBottom:55,display:"flex",justifyContent:"space-between"}}>
                                        <div style={{fontWeight:"bold"}}>Jumlah Bayar</div>
                                        <div>Rp. {formatRupiah(jumlahBayar)}</div>
                                  </div>
                              </div>
                          </div>
                      </Col>
                  </Row>
                  }       
                  {
                      (currentStep===3) &&
                      <Row style={{marginTop:30}}>
                      <Col lg={8} style={{marginBottom:50}}>
                          <div style={{fontWeight:"bold",fontSize:20,marginBottom:60}}>Data Peserta</div>
                          <Row style={{marginTop:20,justifyContent:"center",alignItems:"center"}}>
                              <Col lg={4} style={{fontWeight:"bold",fontSize:17,marginBottom:10}}>
                                  Nama Anda
                              </Col>
                              <Col lg={8} style={{paddingRight:10}}>
                                  {globalContext.credentials.detail.nama}
                              </Col>
                          </Row>
                          <Row style={{marginTop:20,justifyContent:"center",alignItems:"center"}}>
                              <Col lg={4} style={{fontWeight:"bold",fontSize:17,marginBottom:10}}>
                                    Email
                              </Col>
                              <Col lg={8} style={{paddingRight:10}}>
                              {globalContext.credentials.detail.email}
                              </Col>
                          </Row>
                          <Row style={{marginTop:20,justifyContent:"center",alignItems:"center"}}>
                              <Col lg={4} style={{fontWeight:"bold",fontSize:17,marginBottom:10}}>
                                    No. Whatsapp
                              </Col>
                              <Col lg={8} style={{paddingRight:10}}>
                                {globalContext.credentials.detail.notelepon}
                              </Col>
                          </Row>
                          <div style={{marginTop:40}}>
                              <div 
                              onClick={()=>{
                                setCurrentStep(4);
                            }}
                              style={{backgroundColor:"#e23b25",cursor:"pointer",letterSpacing:1,color:"white",borderRadius:5,textAlign:"center",width:200,padding:"10px 15px 10px 15px"}}>
                                  SELANJUTNYA
                              </div>
                          </div>
                       
                      </Col>
                      <Col lg={4} style={{paddingLeft:40,paddingRight:40}}>
                          <div style={{border:"solid 1px #e8e8e8",borderRadius:10,paddingTop:20,paddingBottom:20}}>
                              <div style={{fontWeight:"bold",borderBottom:"solid 1px #e8e8e8",paddingBottom:20,marginRight:20,marginLeft:20}}>Pemesanan Anda</div>
                              <div style={{marginTop:10,marginLeft:20,marginRight:20}}>
                                 {
                                     globalContext.keranjangShop.map((item,index)=>{
                                         return (
                                            <div style={{display:"flex",marginBottom:20}}>
                                                    <div style={{flex:1}}>
                                                        <div style={{fontWeight:"bold",overflow:"hidden",textOverflow:"ellipsis",wordBreak:"break-word",paddingRight:20}}>{item.nama_barang}</div>
                                                        <div style={{fontSize:13,marginTop:10}}>{toLocaleTimestamp(new Date())}</div>
                                                    </div>
                                                    <div style={{padding:5,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                        <img src={`${endpoint}/storage/public/shop/${item.gambar_barang}`} style={{width:90,borderRadius:10}}></img>
                                                    </div>
                                            </div>
                                         )
                                     })
                                 }
                                  
                              </div>
                              <div style={{marginTop:25,marginLeft:20,marginRight:20}}>
                                 
                                  <div style={{marginTop:20,paddingBottom:55,display:"flex",justifyContent:"space-between"}}>
                                        <div style={{fontWeight:"bold"}}>Jumlah Bayar</div>
                                        <div>Rp. {formatRupiah(jumlahBayar)}</div>
                                  </div>
                              </div>
                          </div>
                      </Col>
                  </Row>
                  }
                  {
                      (currentStep===4) &&
                      <Row style={{marginTop:30}}>
                      <Col lg={8} style={{marginBottom:50}}>
                            <div style={{backgroundColor:"whitesmoke",padding:50,borderRadius:10}}>
                                    <div style={{fontSize:20,borderBottom:"dolis 1px black",textAlign:"center",borderBottom:"solid 1px grey",paddingBottom:20,fontWeight:"bold"}}>Rincian Belanja</div>
                                    <div style={{marginTop:30}}>
                                        <div>Kepada Yth:</div>
                                        <div style={{fontWeight:"bold",marginTop:5}}>{globalContext.credentials.detail.nama}</div>
                                    </div>
                                    <div style={{marginTop:50}}>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nama Barang</th>
                                            <th scope="col">Harga</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {
                                               globalContext.keranjangShop.map((item,index)=>{
                                         
                                                return (
                                                    <tr>
                                                    <th scope="row">{index+1}</th>
                                                    <td>{item.nama_barang}</td>
                                                    <td>Rp. {formatRupiah(item.harga)}</td>
                                                    </tr>
                                                   )
                                               })
                                           }
                                          
                                        </tbody>
                                        </table>
                                    </div>
                                    <div style={{marginTop:30,fontSize:23,textAlign:"right"}}>
                                        Total : Rp. {formatRupiah(jumlahBayar)}
                                    </div>
                                    <div style={{justifyContent:"center",marginTop:50,alignItems:"center",display:"flex"}}>
                                        {
                                            (pendaftaranLoading) ?
                                            <div                           
                                            style={{cursor:"pointer",backgroundColor:"#e23b25",letterSpacing:1,color:"white",borderRadius:5,textAlign:"center",width:200,padding:"10px 15px 10px 15px"}}>
                                               <Spinner style={{marginLeft:15}} variant="light" size="sm" animation="border" />
                                            </div>
                                            
                                            :
                                            (jumlahBayar===0) ?
                                            <div                
                                            style={{backgroundColor:"#e23b25",opacity:0.5,letterSpacing:1,color:"white",borderRadius:5,textAlign:"center",width:200,padding:"10px 15px 10px 15px"}}>
                                                SELANJUTNYA
                                            </div>
                                            :
                                            <div 
                                            onClick={async ()=>{

                                                setPendaftaranLoading(true);

                                                let payload = {
                                                    credentials:globalContext.credentials,
                                                    pemesanan:globalContext.keranjangShop,
                                                    totaldibayarfrontend:jumlahBayar
                                                }

                                                let request = await fetch(`${endpoint}/api/createinvoiceshop`,{
                                                    method:"POST",
                                                    headers:{
                                                        "content-type":"application/json",
                                                        "authorization":`Bearer ${globalContext.credentials.token}`
                                                    },
                                                    body:JSON.stringify(payload)
                                                });
                                                let json = await request.json();

                                                setPendaftaranLoading(false);

                                                if(json.success){
                                                    setHistoryPemesanan(globalContext.keranjangShop);
                                                    globalContext.setKeranjangShop([]);
                                                    setInvoice(json);
                                                    
                                                    setCurrentStep(5);
                                                }
                                                else{
                                                    alert(json.msg);
                                                }
                                                
                                                // setPendaftaranLoading(true);
                                                // let payload = {
                                                //     pemesanan:globalContext.pemesanan,
                                                //     credentials:globalContext.credentials,
                                                //     referral:referral,
                                                //     totaldibayarfrontend:jumlahBayar

                                                // };
                                                  
                                                // let request = await fetch(`${endpoint}/api/createinvoice`,{
                                                //     method:"POST",
                                                //     headers:{
                                                //         "content-type":"application/json",
                                                //         "authorization":`Bearer ${globalContext.credentials.token}`
                                                //     },
                                                //     body:JSON.stringify(payload)
                                                // });
                                                // let json = await request.json();

                                                // setPendaftaranLoading(false);

                            
                                                
                                                // if(json.success){
                                                //     console.log(json);
                                                //     setInvoice(json);
                                                    
                                                //     setCurrentStep(5);
                                                // }
                                                // else{
                                                //     alert(json.msg);
                                                // }
                                               
                                                
                                            }}                                        
                                            style={{cursor:"pointer",backgroundColor:"#e23b25",letterSpacing:1,color:"white",borderRadius:5,textAlign:"center",width:200,padding:"10px 15px 10px 15px"}}>
                                                SELANJUTNYA
                                            </div>
                                        }
                                       
                                    </div>
                            </div>
                      </Col>
                      <Col lg={4} style={{paddingLeft:40,paddingRight:40}}>
                          <div style={{border:"solid 1px #e8e8e8",borderRadius:10,paddingTop:20,paddingBottom:20}}>
                              <div style={{fontWeight:"bold",borderBottom:"solid 1px #e8e8e8",paddingBottom:20,marginRight:20,marginLeft:20}}>Pemesanan Anda</div>
                              <div style={{marginTop:10,marginLeft:20,marginRight:20}}>
                                 {
                                     globalContext.keranjangShop.map((item,index)=>{
                                         return (
                                            <div style={{display:"flex",marginBottom:20}}>
                                                    <div style={{flex:1}}>
                                                        <div style={{fontWeight:"bold",overflow:"hidden",textOverflow:"ellipsis",wordBreak:"break-word",paddingRight:20}}>{item.nama_barang}</div>
                                                        <div style={{fontSize:13,marginTop:10}}>{toLocaleTimestamp(new Date())}</div>
                                                    </div>
                                                    <div style={{padding:5,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                        <img src={`${endpoint}/storage/public/shop/${item.gambar_barang}`} style={{width:90,borderRadius:10}}></img>
                                                    </div>
                                            </div>
                                         )
                                     })
                                 }
                                  
                              </div>
                              <div style={{marginLeft:20,marginRight:20,paddingTop:30,paddingBottom:30,borderBottom:"solid 1px #e8e8e8",borderBottom:"solid 1px #e8e8e8"}}>
                                 <div style={{display:"flex",flexDirection:"row",marginBottom:5,fontSize:13}}>
                                     Nama : {globalContext.credentials.detail.nama}
                                 </div>
                                 <div style={{display:"flex",flexDirection:"row",marginBottom:5,fontSize:13}}>
                                     No. Whatsapp :  {globalContext.credentials.detail.notelepon}
                                 </div>
                                 <div style={{display:"flex",flexDirection:"row",marginBottom:5,fontSize:13}}>
                                    Email :  {globalContext.credentials.detail.email}
                                 </div>
                              </div>
                              <div style={{marginTop:25,marginLeft:20,marginRight:20}}>
                                 
                                  <div style={{marginTop:20,paddingBottom:55,display:"flex",justifyContent:"space-between"}}>
                                        <div style={{fontWeight:"bold"}}>Jumlah Bayar</div>
                                        <div>Rp. {formatRupiah(jumlahBayar)}</div>
                                  </div>
                              </div>
                          </div>
                      </Col>
                  </Row>
                  }
                  {
                      (currentStep===5) &&
                      <Row style={{marginTop:20}}>
                          <Row>
                              <Col style={{backgroundColor:"whitesmoke",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:20,padding:"20px 40px 40px 40px"}} lg={12}>
                                  <div style={{fontSize:40,marginTop:20,paddingBottom:40,fontWeight:"bold",textAlign:"center",borderBottom:"solid 1px black",width:"100%"}}>Terima kasih</div>
                                  <div style={{marginTop:15,width:"100%",display:"flex",justifyContent:"space-between"}}>
                                      <div>Status</div>
                                      <div>Menunggu Pembayaran</div>
                                  </div>
                              </Col>
                          </Row>

                          <Row style={{marginTop:30}}>
                              <Col style={{backgroundColor:"whitesmoke",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:20,padding:"20px 40px 40px 40px"}} lg={12}>
                                  <div style={{fontSize:25,marginTop:20,paddingBottom:20,fontWeight:"bold",textAlign:"center",borderBottom:"solid 1px black",width:"100%"}}>Detail Pembayaran</div>
                                  <div style={{marginTop:15,width:"100%",display:"flex",borderBottom:"solid 1px #e8e8e8",paddingBottom:10,justifyContent:"space-between"}}>
                                      <div>Tanggal</div>
                                      <div>{toLocaleTimestamp(new Date())}</div>
                                  </div>
                                  <div style={{marginTop:15,width:"100%",display:"flex",borderBottom:"solid 1px #e8e8e8",paddingBottom:10,justifyContent:"space-between"}}>
                                      <div>Metode Pembayaran</div>
                                      <div>Bank Mandiri</div>
                                  </div>
                                  <div style={{marginTop:15,width:"100%",display:"flex",borderBottom:"solid 1px #e8e8e8",paddingBottom:10,justifyContent:"space-between"}}>
                                      <div>Nomor Rekening</div>
                                      <div>24-00-0994-4514 an PT LIMA PRIMA SOLUSINDO</div>
                                  </div>
                                  <div style={{marginTop:15,width:"100%",display:"flex",borderBottom:"solid 1px #e8e8e8",paddingBottom:10,justifyContent:"space-between"}}>
                                      <div>Total Pembayaran</div>
                                      <div>Rp. {formatRupiah(invoice.totaldibayar)}</div>
                                  </div>
                              </Col>
                          </Row>

                          <Row style={{marginTop:30}}>
                              <Col style={{backgroundColor:"whitesmoke",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:20,padding:"20px 40px 40px 40px"}} lg={12}>
                                  <div style={{fontSize:25,marginTop:20,paddingBottom:20,fontWeight:"bold",textAlign:"center",borderBottom:"solid 1px black",width:"100%"}}>Konfirmasi Pembayaran</div>
                                  <div style={{marginTop:15,width:"100%",display:"flex",borderBottom:"solid 1px #e8e8e8",paddingBottom:10,justifyContent:"center",alignItems:"center"}}>
                                      <div style={{textAlign:"center"}}>Untuk konfirmasi pembayaran dan pemesanan silakan melakukan whatsapp ke nomer ini dengan menyertakan nomor invoice <br/>+62-811-6565-850</div>
                                  </div>
                            
                              </Col>
                          </Row>


                          <Row style={{marginTop:30}}>
                              <Col style={{backgroundColor:"whitesmoke",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:20,padding:"20px 40px 40px 40px"}} lg={12}>
                                  <div style={{fontSize:25,marginTop:20,paddingBottom:20,fontWeight:"bold",textAlign:"center",borderBottom:"solid 1px black",width:"100%"}}>Rincian Belanja</div>
                                  
                                  <div style={{display:"flex",justifyContent:"space-between",width:"100%",marginBottom:20,marginTop:20}}>
                                      <div>
                                          <div>Kepada Yth.</div>
                                          <div style={{marginTop:5,fontWeight:"bold"}}>{invoice.data.credentials.detail.nama}</div>
                                      </div>
                                      <div>
                                          <div style={{fontWeight:"bold",textAlign:"right"}}>Nomor Invoice : {invoice.kodeinvoice}</div>
                                          <div style={{marginTop:5,textAlign:"right"}}>Simpan nomor invoice untuk pengecekan status invoice di kemudian hari</div>
                                      </div>
                                  </div>
                                  
                                  <div style={{width:"100%",marginTop:40}}>
                                  <table class="table">
                                  <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Barang</th>
                                            <th scope="col">Harga</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                               historyPemesanan.map((item,index)=>{
                                         
                                                return (
                                                    <tr>
                                                    <th scope="row">{index+1}</th>
                                                    <td>{item.nama_barang}</td>
                                                    <td>Rp. {formatRupiah(item.harga)}</td>
                                                    </tr>
                                                   )
                                               })
                                           }
                                        </tbody>
                                        </table>
                                  </div>
                              </Col>
                          </Row>


                      </Row>
                  }
              </Container>
          </div>
          <Footer/>
    </div>
  )
}