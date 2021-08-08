import { useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../custom.css";

import { useMediaQuery } from 'react-responsive'
import Slider from "react-slick";



function Index() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 638px)' })
  const max991 = useMediaQuery({ query: '(max-width: 991px)' })
  const max1400 = useMediaQuery({ query: '(max-width: 1400px)' })


    let settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: (max991) ? 1:(max1400) ? 2:3,
      slidesToScroll: (max991) ? 1:(max1400) ? 2:3
    };

    let settingsInstruktur = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: (max991) ? 1:(max1400) ? 3:4,
      slidesToScroll: (max991) ? 1:(max1400) ? 3:4
    };


    let settingsOurClient = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: (max991) ? 2:(max1400) ? 4:5,
      slidesToScroll: (max991) ? 2:(max1400) ? 4:5
    };




    useEffect(()=>{
      setTimeout(() => {
        window.$('.owl-carousel').owlCarousel({
          loop:false,
          nav:false,
          dots:true,
          items:1,
          dotsContainer:".dotsContainer"
      });
      //window.scroll(0,0)
      }, 100);
    },[])


    return (
      <div style={{overflow:"hidden"}}>
          <div style={{flex:1}}>
              <div class="dotsContainer" style={{position:"absolute",transform:"bottom",bottom:(isTabletOrMobile) ? 80:100,left:80,zIndex:999}}>
              </div>
              <div class="owl-carousel">
                
                {
                  ([1,2,3,4,5]).map(()=>{
                    return (
                      <div class="item">
                          <div style={{position:"absolute",backgroundColor:"black",opacity:0.3,width:"100%",height:"100%",zIndex:100}}></div>
                          <div style={{display:"flex",alignItems:"center",backgroundImage:`url("https://apimicca.midiatama.co.id/storage/slider/20210424102039.jpg")`,height:"100vh"}}>
                              {
                                (isTabletOrMobile) ?
                                  <div style={{position:"absolute",paddingRight:100,width:300,marginLeft:80,fontSize:40,zIndex:999,color:"white"}}>
                                    <div style={{fontWeight:"bold"}}>Supervisor Perancah</div>
                                    <div style={{fontSize:25,marginTop:20,wordBreak:"break-word"}}>Pembinaan dan sertifikasi ahli k3</div>
                                </div>
                                :
                                <div style={{position:"absolute",paddingRight:100,width:500,marginLeft:80,fontSize:40,zIndex:999,color:"white"}}>
                                    <div style={{fontWeight:"bold"}}>Supervisor Perancah</div>
                                    <div style={{fontSize:25,marginTop:20,wordBreak:"break-word"}}>Pembinaan dan sertifikasi ahli k3</div>
                                </div>
                              } 
                          </div>
                    </div>
                    )
                  })
                }
                
              </div>
          </div>
          <div style={{backgroundColor:"#24b798"}}>
              <Container style={{height:"100%",padding:20}}>
                  <Row style={{height:"100%"}}>
                      <Col lg={(max991) ? 12:1} style={{alignItems:"center",display:"flex"}}>
                          {
                            (max991) ?
                            <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:40,position:"absolute",border:"solid 5px #23b697",marginTop:20,height:80,width:80,borderRadius:999,zIndex:100}}>
                              <div>Logo</div>
                            </div> 
                            :
                            <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:40,position:"absolute",border:"solid 5px #23b697",height:80,width:80,borderRadius:999,zIndex:100}}>
                             <div>Logo</div>
                          </div> 
                          }
                      </Col>
                      {
                        (max991) ?
                        <Col style={{alignItems:"center",color:"white",height:"100%",display:"flex",justifyContent:"flex-end",flexDirection:"row"}}>
                          <div style={{marginRight:30}}>Burger Menu</div>
                      </Col>
                        :
                        <Col style={{alignItems:"center",paddingLeft:50,paddingRight:50,color:"white",height:"100%",display:"flex",justifyContent:"space-around",flexDirection:"row"}}>
                          <div>Home</div>
                          <div>Jagoan K3</div>
                          <div>Training</div>
                          <div>Karir</div>
                          <div>Galeri</div>
                          <div>Artikel</div>
                          <div>Login</div>
                      </Col>
                      }
                  </Row>
              </Container>
          </div>
          <div style={{paddingTop:50,paddingBottom:70,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div style={{fontSize:30,fontWeight:"bold"}}>TENTANG KAMI</div>
                <div style={{width:(isTabletOrMobile) ? 320:800,textAlign:"center",marginTop:30,paddingRight:30,paddingLeft:30}}>
                HSE Prime adalah Mitra Terbaik Anda untuk Pelatihan dan Sertifikasi K3, dan sebagai center Pengembangan Kompetensi Safety atau K3 Nomor 1 di Indonesia, didedikasikan untuk para penggiat keselamatan kerja, praktisi, tenaga ahli dan perusahaan, juga sebagai pusat informasi dan berbagi pengetahuan seputar K3.
                </div>
          </div>
          <div style={{backgroundColor:"#23b697",paddingTop:50,paddingBottom:50,paddingLeft:30,paddingRight:30}}>
              <Container>
                      <Row>
                          <Col lg={3} style={{marginBottom:50}}>
                              <div style={{fontSize:35,fontWeight:"bold",color:"white"}}>Training</div>
                              <div style={{fontSize:35,fontWeight:"bold",color:"white"}}>Terdekat</div>
                              <div style={{marginTop:20,fontSize:20,color:"white"}}>
                              Temukan pelatihan dengan jadwal paling dekat dari tanggal hari ini
                              </div>
                          </Col>
                          <Col lg={9} style={{paddingLeft:50,paddingRight:50}}>
                              

                          <Slider {...settings} style={{padding:10}}>
                                {
                                  [1,2,3,4,5].map(()=>{
                                    return (
                                      <div style={{backgroundColor:"white",height:"100%"}}>
                                          <div style={{borderRadius:10,display:"flex",justifyContent:"center",marginRight:20,height:330}}>
                                            <img src="https://apimicca.midiatama.co.id/storage/cover/midiatama-98210609110601.png" style={{backgroundColor:"whitesmoke",width:250,height:140,borderRadius:5,position:"absolute"}}></img>
                                            <div style={{backgroundColor:"white",boxShadow:"1px 2px 12px -1px rgba(0,0,0,0.51)",padding:20,width:220,position:"absolute",bottom:12,height:210,borderRadius:5}}>
                                                <div style={{textAlign:"center",fontWeight:"bold"}}>Ahli K3 Listrik Batch 13</div>
                                                <div  style={{textAlign:"center",fontSize:10,marginTop:8}}>Pembinaan & Sertifikasi Ahli K3 Listrik Kemnaker RI</div>
                                                <div style={{textAlign:"center",marginTop:10}}>20 Agustus 2021</div>
                                            </div>
                                            <div style={{position:"absolute",fontWeight:"bold",color:"#343434",bottom:0,textAlign:"center",width:180,borderRadius:10,paddingTop:5,paddingBottom:5,backgroundColor:"#fee906"}}>
                                                  Read More
                                              </div>
                                          </div>
                                      </div>
                                    )
                                  })
                                }
                              </Slider>
                
                          </Col>
                      </Row>
              </Container>
          </div>
          <div style={{backgroundColor:"white",paddingBottom:30}}>
              <Container>
                  <Row>
                      <Col lg={6} style={{paddingLeft:(isTabletOrMobile) ? 30:null,paddingRight:(isTabletOrMobile) ? 30:null}}>
                        <div style={{paddingTop:50}}>
                              <div>
                                  <h2 style={{fontWeight:"bold"}}>25000+ Peserta</h2>
                                  <h3 style={{fontWeight:"bold"}}>Sudah Mengikuti Sertifikasi K3 Bersama Kami</h3>
                                  <div style={{marginTop:30}}>
                                  Midiatama Academy merupakan sebuah perusahaan yang bergerak di bidang Pelatihan (Pembinaan), Sertifikasi dan Konsultansi K3 yang telah ditunjuk oleh Kementrian Ketenagakerjaan RI berupa Surat Keterangan Penunjukkan (SKP). Midiatama memberikan Kepastian pelaksanaan dengan Jaminan Kompetensi yang sesuai dengan bidang dan bakat seseorang untuk dapat bekerja di sebuah perusahaan besar seperti BUMN, Konstruksi, Pertambangan, Minyak, Gas Bumi dan Manufaktur
                                  </div>
                              </div>
                              <div style={{marginTop:80,marginBottom:(isTabletOrMobile) ? 80:0}}>
                                  <h2 style={{fontWeight:"bold"}}>25000+ Peserta</h2>
                                  <h3 style={{fontWeight:"bold"}}>Sudah Mengikuti Sertifikasi K3 Bersama Kami</h3>
                                  <div style={{marginTop:30}}>
                                  Midiatama Academy merupakan sebuah perusahaan yang bergerak di bidang Pelatihan (Pembinaan), Sertifikasi dan Konsultansi K3 yang telah ditunjuk oleh Kementrian Ketenagakerjaan RI berupa Surat Keterangan Penunjukkan (SKP). Midiatama memberikan Kepastian pelaksanaan dengan Jaminan Kompetensi yang sesuai dengan bidang dan bakat seseorang untuk dapat bekerja di sebuah perusahaan besar seperti BUMN, Konstruksi, Pertambangan, Minyak, Gas Bumi dan Manufaktur
                                  </div>
                              </div>
                        </div>
                      </Col>
                      <Col lg={6} style={{display:"flex",justifyItems:"center",alignItems:"center"}}>
                        <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                              {
                                (max991) ?
                                <img  style={{width:350,height:350,marginTop:(isTabletOrMobile) ? 10:40,marginBottom:0}} src="https://apimicca.midiatama.co.id/storage/konten-home/gambar1/bageur-901210621043226.png"></img>
                                :
                                <img  style={{width:480,height:480,marginBottom:0}} src="https://apimicca.midiatama.co.id/storage/konten-home/gambar1/bageur-901210621043226.png"></img>
                              }
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
          <div>
            <Container>
                  <Row>
                      <Col lg={6} style={{paddingLeft:(isTabletOrMobile) ? 30:null,paddingRight:(isTabletOrMobile) ? 30:null}}>
                         <div style={{width:"100%",height:"100%",display:"flex",paddingRight:60,justifyContent:"center",alignItems:"center"}}>
                              {
                                (max991) ?
                                null
                                :
                                <img  style={{width:480,height:480}} src="https://apimicca.midiatama.co.id/storage/konten-home/gambar1/bageur-901210621043226.png"></img>
                              }
                          </div>
                      </Col>
                      <Col lg={6} style={{paddingLeft:(isTabletOrMobile) ? 30:null,paddingRight:(isTabletOrMobile) ? 30:null}}>
                            <div style={{paddingTop:50}}>
                                    <div>
                                        <h2 style={{fontWeight:"bold"}}>25000+ Peserta</h2>
                                        <h3 style={{fontWeight:"bold"}}>Sudah Mengikuti Sertifikasi K3 Bersama Kami</h3>
                                        <div style={{marginTop:30}}>
                                        Midiatama Academy merupakan sebuah perusahaan yang bergerak di bidang Pelatihan (Pembinaan), Sertifikasi dan Konsultansi K3 yang telah ditunjuk oleh Kementrian Ketenagakerjaan RI berupa Surat Keterangan Penunjukkan (SKP). Midiatama memberikan Kepastian pelaksanaan dengan Jaminan Kompetensi yang sesuai dengan bidang dan bakat seseorang untuk dapat bekerja di sebuah perusahaan besar seperti BUMN, Konstruksi, Pertambangan, Minyak, Gas Bumi dan Manufaktur
                                        </div>
                                    </div>
                                    <div style={{marginTop:80,marginBottom:80}}>
                                        <h2 style={{fontWeight:"bold"}}>25000+ Peserta</h2>
                                        <h3 style={{fontWeight:"bold"}}>Sudah Mengikuti Sertifikasi K3 Bersama Kami</h3>
                                        <div style={{marginTop:30}}>
                                        Midiatama Academy merupakan sebuah perusahaan yang bergerak di bidang Pelatihan (Pembinaan), Sertifikasi dan Konsultansi K3 yang telah ditunjuk oleh Kementrian Ketenagakerjaan RI berupa Surat Keterangan Penunjukkan (SKP). Midiatama memberikan Kepastian pelaksanaan dengan Jaminan Kompetensi yang sesuai dengan bidang dan bakat seseorang untuk dapat bekerja di sebuah perusahaan besar seperti BUMN, Konstruksi, Pertambangan, Minyak, Gas Bumi dan Manufaktur
                                        </div>
                                    </div>
                              </div>
                      </Col>
                  </Row>
              </Container>
          </div>
          <div style={{backgroundColor:"#24b596",paddingLeft:(isTabletOrMobile) ? 20:null}}>
              <Container style={{paddingTop:50,paddingBottom:60,background:"url(https://midiatama.co.id/_nuxt/img/keunggulan.7cfd70d.png)",backgroundPosition: "right",backgroundRepeat: "no-repeat",backgroundSize: "contain"}}>
                    <Col lg={12}>
                            <div style={{width:(isTabletOrMobile) ? 360:650}}>
                                <div style={{fontSize:30,fontWeight:"bold",marginBottom:25}}>Kebijakan K3LM Midiatama</div>
                                  <div style={{borderBottom:"solid 1px white",paddingBottom:15,color:"white"}}>
                                  Kami manajemen & karyawan berkomitmen menjadi perusahaan Jasa K3LM No.l di Indonesia dengan berusaha untuk:
                                  </div>
                                  <div style={{borderBottom:"solid 1px white",paddingBottom:15,color:"white",paddingTop:15}}>
                                  Kami manajemen & karyawan berkomitmen menjadi perusahaan Jasa K3LM No.l di Indonesia dengan berusaha untuk:
                                  </div>
                                  <div style={{borderBottom:"solid 1px white",paddingBottom:15,color:"white",paddingTop:15}}>
                                  Kami manajemen & karyawan berkomitmen menjadi perusahaan Jasa K3LM No.l di Indonesia dengan berusaha untuk:
                                  </div>
                            </div>
                    </Col>
              </Container>
          </div>
          <div style={{paddingTop:50,paddingBottom:40,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div style={{fontSize:30,fontWeight:"bold"}}>Instruktur Berbakat</div>
                <div style={{width:(isTabletOrMobile) ? 320:800,textAlign:"center",marginTop:30,paddingRight:30,paddingLeft:30}}>
                Training akan dibimbing oleh banyak sekali instruktur yang
ahli di bidangnya masing-masing
                </div>
                <Container style={{marginTop:50,marginBottom:50,paddingLeft:(isTabletOrMobile) ? 50:null}}>
                <Slider {...settingsInstruktur} style={{padding:10}}>
                          {
                            [1,2,4,5,5].map(()=>{
                              return (
                                <div style={{backgroundColor:"white",height:"100%"}}>
                                    <div style={{backgroundColor:"whitesmoke",borderRadius:10,overflow:"hidden",marginRight:20}}>
                                        <img style={{width:"100%",height:300}} src="https://apimicca.midiatama.co.id/storage/muhammad1882/avatar/midiatama-65210427034902.png"></img>
                                        <div style={{textAlign:"center",paddingLeft:30,paddingRight:30,paddingTop:20,paddingBottom:50,fontWeight:"bold"}}>Yudi Mariandi Mari Mandi. SE SE SE SE</div>
                                    </div> 
                                </div>
                              )
                            })
                          }
                    </Slider>
                </Container>
          </div>
          <div style={{paddingBottom:50,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div style={{fontSize:30,fontWeight:"bold"}}>Our Client</div>
                <Container style={{marginTop:50,marginBottom:50,paddingLeft:(isTabletOrMobile) ? 50:null}}>
                <Slider {...settingsOurClient} style={{padding:10}}>
                    
                      {
                        [1,2,3,4,5,6,7,8,9].map(()=>{
                            return (
                              <div style={{backgroundColor:"white",height:"100%"}}>
                                  <img style={{width:200,height:100}} src="https://apimicca.midiatama.co.id/storage/bageur.id/our-client/bageur-207210624084541.png"/>
                              </div>
                            )
                        })
                      }
                    </Slider>
                </Container>
          </div>
          <div>
            <Container fluid={true} style={{padding:0,backgroundColor:"#26b495",paddingTop:30}}>
                  <Container>
                      <Row style={{paddingBottom:40}}>
                            <Col lg={4} style={{color:"white",marginBottom:40,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                              <div style={{fontSize:25,color:"white",fontWeight:"bold"}}>
                                  Hubungi Kami
                              </div>
                              <div style={{display:"grid",marginTop:20,gridRowGap:20,gridTemplateColumns:"100px auto"}}>
                                  <div style={{fontWeight:"bold"}}>TELEPON</div>
                                  <div>(021) 22545432 (Jam Kerja)<br></br>(021) 21263820 (24 Jam)</div>
                                  
                                  <div style={{fontWeight:"bold"}}>WHATSAPP 24 JAM</div>
                                  <div>
                                  0815-32705432<br></br>
                                  0812-73708811<br></br>
                                  0815-17278777<br></br>
                                  0821-25012338<br></br>
                                  </div>

                                  <div style={{fontWeight:"bold"}}>EMAIL</div>
                                  <div>pjk3midiatama@gmail.com<br></br>info@midiatama.co.id</div>
                              </div>
                            </Col>
                            <Col lg={4} style={{color:"white",marginBottom:40,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                            <div style={{fontSize:25,color:"white",fontWeight:"bold"}}>
                                  Alamat Kami
                              </div>
                              <div style={{display:"grid",marginTop:20,gridRowGap:20,gridTemplateColumns:"auto"}}>
                                  <div>PT. Mitra Dinamis Yang Utama (PJK3 Midiatama Academy) Gedung Wisma Presisi, Lantai 1 No. 4, Jalan Taman Aries RT.5/RW.2 Meruya Utara Kembangan Jakarta Barat 11620</div>

                                  <div style={{display:"grid",gridTemplateColumns:"100px auto"}}>
                                      <div style={{fontWeight:"bold"}}>Website</div>
                                      <div>
                                      https://midiatama.co.id/<br></br>
                                      </div>
                                  </div>

                                  <div style={{display:"grid",gridTemplateColumns:"100px auto"}}>
                                      <div style={{fontWeight:"bold"}}>Jam Kerja</div>
                                      <div>
                                      08.00 WIB - 17.00 WIB<br></br>
                                      </div>
                                  </div>
                              </div>
                            </Col>
                            <Col lg={4} style={{color:"white"}}>
                                <Row>
                                    <Col lg={6} style={{marginBottom:40,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                                    <div style={{fontSize:25,color:"white",fontWeight:"bold"}}>
                                        Bantuan
                                    </div>
                                    <div style={{display:"flex",flexDirection:"column",marginTop:20}}>
                                        <a>Hubungi Kami</a>
                                        <a>Syarat dan Ketentuan</a>
                                        <a>FAQ</a>
                                        <a>SOSIAL MEDIA</a>
                                    </div>
                                    </Col>
                                    <Col lg={6} style={{marginBottom:40,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                                    <div style={{fontSize:25,color:"white",fontWeight:"bold"}}>
                                        Sosial Media
                                    </div>
                                    <div style={{display:"flex",flexDirection:"column",marginTop:20}}>
                                        <div style={{display:"flex",marginBottom:15,flexDirection:"row"}}>
                                            <img style={{marginRight:10}} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjYiIGN5PSIyNiIgcj0iMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIyNiIgY3k9IjI2IiByPSIxOC43NDQyIiBmaWxsPSIjMzQ1MzlCIi8+CjxwYXRoIGQ9Ik0yNy4wNTgzIDIzLjk1OTRWMjEuODQzMUMyNy4wNTgzIDIxLjI1OSAyNy41MzIzIDIwLjc4NSAyOC4xMTY0IDIwLjc4NUgyOS4xNzQ2VjE4LjEzOTZIMjcuMDU4M0MyNS4zMDQ5IDE4LjEzOTYgMjMuODgzOSAxOS41NjA3IDIzLjg4MzkgMjEuMzE0MVYyMy45NTk0SDIxLjc2NzZWMjYuNjA0OEgyMy44ODM5VjM1LjA2OTlIMjcuMDU4M1YyNi42MDQ4SDI5LjE3NDZMMzAuMjMyNyAyMy45NTk0SDI3LjA1ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"></img>
                                            <img style={{marginRight:10}} src="https://midiatama.co.id/_nuxt/img/wa.86a926d.svg"></img>
                                            <img style={{marginRight:10}} src="https://midiatama.co.id/_nuxt/img/ig.9259718.svg"></img>
                                        </div>
                                        <div style={{display:"flex",flexDirection:"row"}}>
                                            <img style={{marginRight:10}} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjYiIGN5PSIyNiIgcj0iMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIyNiIgY3k9IjI2IiByPSIxOC43NDQyIiBmaWxsPSIjMzQ1MzlCIi8+CjxwYXRoIGQ9Ik0yNy4wNTgzIDIzLjk1OTRWMjEuODQzMUMyNy4wNTgzIDIxLjI1OSAyNy41MzIzIDIwLjc4NSAyOC4xMTY0IDIwLjc4NUgyOS4xNzQ2VjE4LjEzOTZIMjcuMDU4M0MyNS4zMDQ5IDE4LjEzOTYgMjMuODgzOSAxOS41NjA3IDIzLjg4MzkgMjEuMzE0MVYyMy45NTk0SDIxLjc2NzZWMjYuNjA0OEgyMy44ODM5VjM1LjA2OTlIMjcuMDU4M1YyNi42MDQ4SDI5LjE3NDZMMzAuMjMyNyAyMy45NTk0SDI3LjA1ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"></img>
                                            <img style={{marginRight:10}} src="https://midiatama.co.id/_nuxt/img/wa.86a926d.svg"></img>
                                            <img style={{marginRight:10}} src="https://midiatama.co.id/_nuxt/img/ig.9259718.svg"></img>
                                        </div>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} style={{paddingLeft:(isTabletOrMobile) ? 25:null}}>
                                        <div style={{fontSize:25,color:"white",fontWeight:"bold"}}>
                                            Download Aplikasi
                                        </div>
                                        <div style={{marginTop:20}}>
                                          <img src="https://midiatama.co.id/_nuxt/img/gp.79741d9.svg"></img>
                                          <img src="https://midiatama.co.id/_nuxt/img/as.190ce99.svg"></img>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                      </Row>
                      <Row style={{borderBottom:"solid 2px white"}}></Row>
                      <Row style={{paddingTop:30,paddingBottom:30,paddingLeft:(isTabletOrMobile) ? 25:null}}>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                            <div style={{color:"white"}}>© 2021 All rights reserved. HSE PRIME</div>
                            <div style={{color:"white"}}>Powered by Midiatama</div>

                            </div>
                           
                      </Row>
                  </Container>
            </Container>
          </div>
      </div>
    );
  }
  
  export default Index;
  