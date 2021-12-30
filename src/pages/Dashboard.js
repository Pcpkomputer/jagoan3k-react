import { useEffect, useState, useRef, useContext } from 'react';

import { Container, Row, Col, Spinner, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../css/Shop.css";


import {BiSearchAlt} from 'react-icons/bi';
import { FaChevronRight } from "react-icons/fa";

import "../custom.css";

import { useMediaQuery } from 'react-responsive'
import Slider from "react-slick";
import { useLocation } from 'react-router';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaShareAlt, FaShoppingCart } from "react-icons/fa";

import { GlobalContext } from '../App';


import SidebarMobile from '../components/SidebarMobile';

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

import {toLocaleTimestamp, groupBy, formatRupiah} from '../utils/function';

let intervalRef = null;

export default function Dashboard(props){

  let globalContext = useContext(GlobalContext);

  let history = useHistory();

  let [dashboardLoaded, setDashboardLoaded] = useState(false);
  let [sectionLoading, setSectionLoading] = useState(false);
  let [selectedMenu, setSelectedMenu] = useState(0);


  let params = useParams();


  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })

  let [riwayatPemesanan, setRiwayatPemesanan] = useState(null);
  let [modulPemesanan, setModulPemesanan] = useState([]);

  let [updateLoading, setUpdateLoading] = useState(false);
  
  function hitungSaldo(arr){
    let saldo = 0;
    arr.forEach((item)=>{
        saldo=saldo+item.nominalpenerimareferral
    });
    return saldo;
  }

  let [saldoDashboard, setSaldoDashboard] = useState([]);
  let [saldoDashboardLoaded, setSaldoDashboardLoaded] = useState(false);
  let fetchSaldoDashboard = async ()=>{
        let credentials = window.localStorage.getItem("credentials");
        credentials = JSON.parse(credentials);
        let request = await fetch(`${endpoint}/api/getsaldodashboard`,{
            method:"POST",
            headers: {
                "content-type":"application/json",
                "authorization":`Bearer ${credentials.token}`
            }
        })
        let json = await request.json();
        console.log(json);
        setSaldoDashboard(json);
        setSaldoDashboardLoaded(true);
  }


  let [akunKamu, setAkunKamu] = useState(null);
  let [akunKamuLoaded, setAkunKamuLoaded] = useState(false);
  let fetchAkunKamu = async ()=>{
      let credentials = window.localStorage.getItem("credentials");
      credentials = JSON.parse(credentials);
      let request = await fetch(`${endpoint}/api/akunkamu`,{
          method:"POST",
          headers: {
              "content-type":"application/json",
              "authorization":`Bearer ${credentials.token}`
          },
          body:JSON.stringify({
              token:credentials.token
          })
      })
      let json = await request.json();
      console.log(json);
      setAkunKamu(json);
      setAkunKamuLoaded(true);
  }

  useEffect(()=>{
    if(globalContext.credentials){
        fetchAkunKamu();
        fetchSaldoDashboard();
    }
    else{
        history.replace("Login");
    }
  },[])

  useEffect(()=>{
    if(akunKamu && saldoDashboardLoaded){
        setDashboardLoaded(true);
    }
  },[akunKamu,saldoDashboardLoaded])


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


    if(!dashboardLoaded){
        return (
            <div style={{fontFamily:"Poppins, sans-serif"}}>
                
                {
        (isTabletOrMobile && mobileSidebarOpened) &&
        <SidebarMobile setMobileSidebarOpened={setMobileSidebarOpened}/>
      }

            <Container fluid={true} style={{margin:0,overflow:"hidden",padding:0,backgroundColor:"whitesmoke",background:"url('https://midiatama.co.id/_nuxt/img/bg-artikel.14b54ae.png')",height:300}}>
           <div style={{position:"absolute",zIndex:1,width:"100%",height:300,backgroundColor:"black",opacity:0.5}}></div>

           <div style={{width:"100%",position:"absolute",zIndex:100,height:300,display:"flex",justifyContent:"center",paddingLeft:(isTabletOrMobile) ? 80:150,paddingRight:150,flexDirection:"column"}}>
                   <div style={{fontSize:35,letterSpacing:5,fontWeight:"bold",color:"white"}}>DASHBOARD USER</div>
                   <div style={{marginTop:10,display:"flex",alignItems:"center",flexDirection:"row"}}>
                       <div style={{color:"white", marginRight:10}}>Home</div>
                       <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                       <div style={{color:"white",marginRight:10}}>Dashboard</div>

                   </div>
           </div>
           </Container>

           {/* Sticky Header */}
        {
          (stickyHeaderShow) &&
          <NavBar setMobileSidebarOpened={setMobileSidebarOpened} sticky={true}/>

        }

        
        <NavBar setMobileSidebarOpened={setMobileSidebarOpened}/>

           <div style={{marginTop:(isTabletOrMobile) ? 80:100,marginBottom:(isTabletOrMobile) ? 80:100}}>
               <Container>
                   <Row>
                    <div style={{paddingTop:10,justifyContent:"center",alignItems:"center",display:"flex"}}>
                            <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",padding:15,boxShadow:"2px 9px 25px 2px rgba(0,0,0,0.1)"}}> 
                            Sedang Memuat Data
                            <Spinner style={{marginLeft:15}} size="sm" animation="border" variant="primary" />
                            </div>
                        </div> 
                   </Row>
               </Container>
           </div>
           <Footer/>

       </div>
        )
    }

    return (
        <div style={{fontFamily:"Poppins, sans-serif"}}>

        {
        (isTabletOrMobile && mobileSidebarOpened) &&
        <SidebarMobile setMobileSidebarOpened={setMobileSidebarOpened}/>
      }


             <Container fluid={true} style={{margin:0,overflow:"hidden",padding:0,backgroundColor:"whitesmoke",background:"url('https://midiatama.co.id/_nuxt/img/bg-artikel.14b54ae.png')",height:300}}>
            <div style={{position:"absolute",zIndex:1,width:"100%",height:300,backgroundColor:"black",opacity:0.5}}></div>

            <div style={{width:"100%",position:"absolute",zIndex:100,height:300,display:"flex",justifyContent:"center",paddingLeft:(isTabletOrMobile) ? 80:150,paddingRight:150,flexDirection:"column"}}>
                    <div style={{fontSize:35,letterSpacing:5,fontWeight:"bold",color:"white"}}>DASHBOARD USER</div>
                    <div style={{marginTop:10,display:"flex",alignItems:"center",flexDirection:"row"}}>
                        <div style={{color:"white", marginRight:10}}>Home</div>
                        <div style={{marginRight:10,width:5,height:5,backgroundColor:"white"}}></div>
                        <div style={{color:"white",marginRight:10}}>Dashboard</div>

                    </div>
            </div>
            </Container>

            {/* Sticky Header */}
            {
            (stickyHeaderShow) &&
            <NavBar setMobileSidebarOpened={setMobileSidebarOpened} sticky={true}/>
            }


            <NavBar setMobileSidebarOpened={setMobileSidebarOpened}/>

            <div style={{marginTop:(isTabletOrMobile) ? 80:100,marginBottom:(isTabletOrMobile) ? 80:100}}>
                <Container>
                    <Row>
                        <Col lg={4} style={{marginBottom:20}}>
                            <div style={{marginBottom:20}}>
                                <div style={{fontWeight:"bold"}}>Saldo Kamu : Rp. {formatRupiah(hitungSaldo(saldoDashboard))}</div>
                                <div style={{marginTop:5}}>Gunakan kode referral {akunKamu.referral_code} untuk mendapatkan saldo gratis...</div>
                            </div>
                            <div 
                            onClick={async ()=>{
                                setSectionLoading(true);
                                let credentials = window.localStorage.getItem("credentials");
                                credentials = JSON.parse(credentials);
                                let request = await fetch(`${endpoint}/api/akunkamu`,{
                                    method:"POST",
                                    headers: {
                                        "content-type":"application/json",
                                        "authorization":`Bearer ${credentials.token}`
                                    },
                                    body:JSON.stringify({
                                        token:credentials.token
                                    })
                                })
                                let json = await request.json();
                                setAkunKamu(json);
                                setSelectedMenu(0);
                                setSectionLoading(false);
                            }}
                            style={{backgroundColor:"whitesmoke",cursor:"pointer",paddingLeft:15,paddingRight:15,marginBottom:5,borderRadius:5,padding:"5px 10px 5px 10px"}}>
                                <FaChevronRight size={11} style={{marginRight:5,color:(selectedMenu===0) ? "black":"grey"}}/>
                                <label style={{fontSize:14,cursor:"pointer",color:(selectedMenu===0) ? "black":"grey"}}>Akun Kamu</label>
                            </div>
                            <div 
                            onClick={async ()=>{
                                setSectionLoading(true);
                                let credentials = window.localStorage.getItem("credentials");
                                credentials = JSON.parse(credentials);
                                let request = await fetch(`${endpoint}/api/getriwayatpemesanan`,{
                                    method:"POST",
                                    headers: {
                                        "content-type":"application/json",
                                        "authorization":`Bearer ${credentials.token}`
                                    }
                                })
                                let json = await request.json();

                                setRiwayatPemesanan(json);
                                
                                setSelectedMenu(1);
                                setSectionLoading(false);
                            }}
                            style={{backgroundColor:"whitesmoke",cursor:"pointer",paddingLeft:15,paddingRight:15,marginBottom:5,borderRadius:5,padding:"5px 10px 5px 10px"}}>
                                <FaChevronRight size={11} style={{marginRight:5,color:(selectedMenu===1) ? "black":"grey"}}/>
                                <label style={{fontSize:14,cursor:"pointer",color:(selectedMenu===1) ? "black":"grey"}}> Riwayat Pemesanan</label>
                            </div>
                            <div 
                            onClick={async ()=>{
                                setSectionLoading(true);
                                let credentials = window.localStorage.getItem("credentials");
                                credentials = JSON.parse(credentials);
                                let request = await fetch(`${endpoint}/api/getmodulpemesanan`,{
                                    method:"POST",
                                    headers: {
                                        "content-type":"application/json",
                                        "authorization":`Bearer ${credentials.token}`
                                    }
                                })
                                let json = await request.json();
                                
                                let modul = [...json];

                                const grouped = groupBy(modul, "id_training");

                                let modulmodified = Object.keys(grouped).map((keys,index)=>{
                                    let parsed = JSON.parse(grouped[keys][0].modulyoutube);
                                    return {
                                        namatraining:grouped[keys][0].namatraining,
                                        modul:parsed
                                    }
                                })

                                setModulPemesanan(modulmodified);
                                
                                setSelectedMenu(2);
                                setSectionLoading(false);
                            }}
                            style={{backgroundColor:"whitesmoke",cursor:"pointer",paddingLeft:15,paddingRight:15,marginBottom:5,borderRadius:5,padding:"5px 10px 5px 10px"}}>
                                <FaChevronRight size={11} style={{marginRight:5,color:(selectedMenu===2) ? "black":"grey"}}/>
                                <label style={{fontSize:14,cursor:"pointer",color:(selectedMenu===2) ? "black":"grey"}}> Modul Pemesanan</label>
                            </div>
                            <div 
                            onClick={async ()=>{
                                setSectionLoading(true);
                                let credentials = window.localStorage.getItem("credentials");
                                credentials = JSON.parse(credentials);
                                let request = await fetch(`${endpoint}/api/getriwayatpemesanan`,{
                                    method:"POST",
                                    headers: {
                                        "content-type":"application/json",
                                        "authorization":`Bearer ${credentials.token}`
                                    }
                                })
                                let json = await request.json();

                                setRiwayatPemesanan(json);
                                
                                setSelectedMenu(3);
                                setSectionLoading(false);
                            }}
                            style={{backgroundColor:"whitesmoke",cursor:"pointer",paddingLeft:15,paddingRight:15,marginBottom:5,borderRadius:5,padding:"5px 10px 5px 10px"}}>
                                <FaChevronRight size={11} style={{marginRight:5,color:(selectedMenu===3) ? "black":"grey"}}/>
                                <label style={{fontSize:14,cursor:"pointer",color:(selectedMenu===3) ? "black":"grey"}}> Ambil Sertifikat</label>
                            </div>
                            <div style={{borderBottom:"solid 1px grey",marginTop:15,marginBottom:15}}>
                            </div>
                            <div 
                            onClick={async ()=>{
                                globalContext.setCredentials(null);
                                window.localStorage.removeItem("credentials");
                                history.replace("login");
                                
                            }}
                            style={{backgroundColor:"whitesmoke",cursor:"pointer",paddingLeft:15,paddingRight:15,marginBottom:5,borderRadius:5,padding:"5px 10px 5px 10px"}}>
                                <FaChevronRight size={11} style={{marginRight:5,color:(selectedMenu===4) ? "black":"grey"}}/>
                                <label style={{fontSize:14,cursor:"pointer",color:(selectedMenu===4) ? "black":"grey"}}> Keluar</label>
                            </div>
                            
                        </Col>
                       {
                           (!sectionLoading) ? 
                        (selectedMenu===0) ? 
                        <Col lg={8}>
                        <div style={{backgroundColor:"white",paddingTop:0}}>
                            <div style={{marginTop:0}}>
                                <div style={{fontWeight:"bold"}}>Nama</div>
                                <Form.Control 
                                onChange={(e)=>{
                                    setAkunKamu((prev)=>{
                                        return {
                                            ...prev,
                                            nama:e.target.value
                                        }
                                    })
                                }}
                                id="inputID" value={akunKamu.nama} style={{marginTop:10,fontSize:15}} type="text" placeholder="Masukkan Nama" />
                            </div>
                            <div style={{marginTop:20}}>
                                <div style={{fontWeight:"bold"}}>Username</div>
                                <Form.Control 
                                 onChange={(e)=>{
                                    setAkunKamu((prev)=>{
                                        return {
                                            ...prev,
                                            username:e.target.value
                                        }
                                    })
                                }}
                                id="inputID" value={akunKamu.username} style={{marginTop:10,fontSize:15}} type="text" placeholder="Masukkan Username" />
                            </div>
                            <div style={{marginTop:20}}>
                                <div style={{fontWeight:"bold"}}>Nickname</div>
                                <Form.Control 
                                 onChange={(e)=>{
                                    setAkunKamu((prev)=>{
                                        return {
                                            ...prev,
                                            nickname:e.target.value
                                        }
                                    })
                                }}
                                id="inputID" value={akunKamu.nickname} style={{marginTop:10,fontSize:15}} type="text" placeholder="Masukkan Nickname" />
                            </div>
                            <div style={{marginTop:20}}>
                                <div style={{fontWeight:"bold"}}>Email</div>
                                <Form.Control 
                                 onChange={(e)=>{
                                    setAkunKamu((prev)=>{
                                        return {
                                            ...prev,
                                            email:e.target.value
                                        }
                                    })
                                }}
                                id="inputID" value={akunKamu.email} style={{marginTop:10,fontSize:15}} type="text" placeholder="Masukkan Email" />
                            </div>
                            <div style={{marginTop:20}}>
                                <div style={{fontWeight:"bold"}}>No. Telepon</div>
                                <Form.Control 
                                 onChange={(e)=>{
                                    setAkunKamu((prev)=>{
                                        return {
                                            ...prev,
                                            no_telepon:e.target.value
                                        }
                                    })
                                }}
                                id="inputID" value={akunKamu.no_telepon} style={{marginTop:10,fontSize:15}} type="text" placeholder="Masukkan No. Telepon" />
                            </div>
                            <div style={{marginTop:30,marginBottom:20}}>
                                {
                                    (updateLoading) ?
                                    
                                    <div 
                                    style={{backgroundColor:"#23b697",color:"white",borderRadius:10,textAlign:"center",padding:5,paddingTop:10,paddingBottom:10}}>
                                        <Spinner style={{marginLeft:15}} variant="light" size="sm" animation="border" />
                                    </div>
                                    :
                                    <div 
                                    onClick={async ()=>{
                                        setUpdateLoading(true);

                                        let AllFilled = true;

                                        Object.keys(akunKamu).forEach((item)=>{
                                            if(akunKamu[item].length===0){
                                                AllFilled = false;
                                            }
                                        })

                                        if(AllFilled){
                                            let credentials = window.localStorage.getItem("credentials");
                                            credentials = JSON.parse(credentials);
                                            
                                            let j = JSON.stringify(akunKamu);
                                            
                                            let request = await fetch(`${endpoint}/api/updateakunkamu`,{
                                                method:"POST",
                                                headers: {
                                                    "content-type":"application/json",
                                                    "authorization":`Bearer ${credentials.token}`
                                                },
                                                body:j
                                            })
                                            let json = await request.json();

                                           
                                            if(json.success){
                                                alert("Akun berhasil diupdate...");
                                                globalContext.setCredentials({
                                                    ...globalContext.credentials,
                                                    ...json.data
                                                });
                                                window.localStorage.setItem("credentials",JSON.stringify({
                                                    ...globalContext.credentials,
                                                    ...json.data
                                                }));

                                                setUpdateLoading(false);
                                            }
                                            else{
                                                alert(json.msg);
                                                setUpdateLoading(false);
                                            }

                                           
                                        }
                                        else{
                                            alert("Isikan semua data...");
                                        }
                                        

                                        
                                    }}
                                    style={{backgroundColor:"#23b697",cursor:"pointer",color:"white",borderRadius:10,textAlign:"center",padding:5,paddingTop:10,paddingBottom:10}}>
                                        Ubah
                                    </div>
                                }
                              
                            </div>
                        </div>
                    </Col>
                    :
                    (selectedMenu===1) ?
                    <Col lg={8}>
                        {
                            riwayatPemesanan.map((el,index)=>{
                                return (
                                    <div style={{backgroundColor:"whitesmoke",marginBottom:15,padding:15,paddingLeft:25,paddingRight:25,borderRadius:5}}>
                                        <div style={{marginBottom:5}}>Kode Invoice : <b>{el.kode_invoice}</b></div>
                                        <div style={{marginBottom:5}}>Nama Training : <b>{el.namatraining}</b></div>
                                        <div style={{marginBottom:5}}>Tipe Training : <b>{el.tipetraining}</b></div>
                                        <div style={{marginBottom:5}}>Tanggal Pemesanan : <b>{toLocaleTimestamp(el.tanggalpemesanan)}</b></div>
                                        <div style={{marginBottom:5}}>Status Pemesanan : <b>{el.status}</b></div>
                                    </div>
                                )
                            })
                        }
                    </Col>
                    :
                    (selectedMenu===2) ?
                    <Col lg={8}>
                       {
                           (modulPemesanan).map((el,index)=>{
                               return (
                                <div>
                                    <div style={{borderBottom:"solid 1px black",paddingBottom:15}}>Nama Training : <b>{el.namatraining}</b></div>
                                    {
                                        el.modul.map((url)=>{
                                            return (
                                                <iframe     
                                                width="100%" height="450" style={{padding:15,paddingLeft:0}}
                                                src={`https://www.youtube.com/embed/${url}`}>
                                                </iframe>
                                            )
                                        })
                                    }
                                </div>
                               )
                           })
                       }
                    </Col>
                    :
                    (selectedMenu===3) ?
                    <Col lg={8}>
                    <form id="formgeneratesertifikat" target="_blank" style={{display:"none"}} method="POST" action={`${endpoint}/api/generatesertifikat`}>
                        <input name="id_invoice" id="id_invoice"></input>
                        <input name="token" id="token" value={`${globalContext.credentials.token}`} type="text"></input>
                        <input name="iditemtraining" id="iditemtraining" type="text" value=""></input>
                    </form>
                    {
                        riwayatPemesanan.map((el,index)=>{
                            if(el.status==="Sudah Dibayar"){
                                return (
                                    <div style={{backgroundColor:"whitesmoke",marginBottom:15,padding:15,paddingLeft:25,paddingRight:25,borderRadius:5}}>
                                        <div style={{marginBottom:5}}>Kode Invoice : <b>{el.kode_invoice}</b></div>
                                        <div style={{marginBottom:5}}>Nama Training : <b>{el.namatraining}</b></div>
                                        <div style={{marginBottom:5}}>Tipe Training : <b>{el.tipetraining}</b></div>
                                        <div style={{marginBottom:5}}>Tanggal Pemesanan : <b>{toLocaleTimestamp(el.tanggalpemesanan)}</b></div>
                                        <div style={{marginBottom:5}}>Status Pemesanan : <b>{el.status}</b></div>
                                        <div style={{marginTop:15}}>{new Date(el.tanggalpemesanan).getTime()<new Date().getTime() ? 
                                            <div 
                                            onClick={async ()=>{
                                                window.document.querySelector("#id_invoice").value=el.id_invoicetraining;
                                                window.document.querySelector("#iditemtraining").value=el.id_itemtraining;
                                                window.document.querySelector("#formgeneratesertifikat").submit();
                                                
                                            }}
                                            class="btn btn-primary">
                                                Ambil Sertifikat
                                            </div>
                                        :
                                            <div style={{opacity:0.4}} class="btn btn-danger">
                                                Sertifikat Masih Belum Bisa Diambil
                                            </div>
                                        }
                                        </div>
                                    </div>
                                )
                            }
                          
                        })
                    }
                </Col>
                    :
                    null
                       :
                       <Col lg={8}>
                           <div style={{paddingTop:10,justifyContent:"center",alignItems:"center",display:"flex"}}>
                                <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",padding:15,boxShadow:"2px 9px 25px 2px rgba(0,0,0,0.1)"}}> 
                                Sedang Memuat Data
                                <Spinner style={{marginLeft:15}} size="sm" animation="border" variant="primary" />
                                </div>
                            </div> 
                       </Col>
                       }
                    </Row>
                </Container>
            </div>
            <Footer/>

        </div>
    )
}