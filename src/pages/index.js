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



    let settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: (max991) ? 1:4,
      slidesToScroll: (max991) ? 1:4
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
      <div>
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
                            <div style={{backgroundColor:"white",marginLeft:40,position:"absolute",border:"solid 5px #23b697",marginTop:20,height:80,width:80,borderRadius:999,zIndex:100}}>
                              Logoss
                            </div> 
                            :
                            <div style={{backgroundColor:"white",marginLeft:40,position:"absolute",border:"solid 5px #23b697",height:80,width:80,borderRadius:999,zIndex:100}}>
                            Logoss
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
                                <div style={{backgroundColor:"white",height:"100%"}}>
                                    <div style={{backgroundColor:"white",borderRadius:10,marginRight:20,height:300}}>
                                      asdasd
                                    </div>
                                </div>
                                <div style={{backgroundColor:"white",height:"100%"}}>
                                    <div style={{backgroundColor:"white",borderRadius:10,marginRight:20,height:300}}>
                                      asdasd
                                    </div>
                                </div>
                                <div style={{backgroundColor:"white",height:"100%"}}>
                                    <div style={{backgroundColor:"white",borderRadius:10,marginRight:20,height:300}}>
                                      asdasd
                                    </div>
                                </div>
                                <div style={{backgroundColor:"white",height:"100%"}}>
                                    <div style={{backgroundColor:"white",borderRadius:10,marginRight:20,height:300}}>
                                      asdasd
                                    </div>
                                </div>
                                <div style={{backgroundColor:"white",height:"100%"}}>
                                    <div style={{backgroundColor:"white",borderRadius:10,marginRight:20,height:300}}>
                                      asdasd
                                    </div>
                                </div>
                                <div style={{backgroundColor:"white",height:"100%"}}>
                                    <div style={{backgroundColor:"white",borderRadius:10,marginRight:20,height:300}}>
                                      asdasd
                                    </div>
                                </div>
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
                                (isTabletOrMobile) ?
                                <img  style={{width:350,height:350,marginBottom:60}} src="https://apimicca.midiatama.co.id/storage/konten-home/gambar1/bageur-901210621043226.png"></img>
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
                         <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                              {
                                (isTabletOrMobile) ?
                                <img  style={{width:350,height:350}} src="https://apimicca.midiatama.co.id/storage/konten-home/gambar1/bageur-901210621043226.png"></img>
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
              <Container style={{paddingTop:50,paddingBottom:60,background: "url(https://midiatama.co.id/_nuxt/img/keunggulan.7cfd70d.png)",backgroundPosition: "right",backgroundRepeat: "no-repeat",backgroundSize: "contain"}}>
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
                <Container style={{marginTop:50,marginBottom:50}}>
                <Slider {...settings} style={{padding:10}}>
                      <div style={{backgroundColor:"white",height:"100%"}}>
                          <div style={{backgroundColor:"whitesmoke",borderRadius:10,marginRight:20,height:300}}>
                            asdasd
                          </div>
                      </div>
                      <div style={{backgroundColor:"white",height:"100%"}}>
                          <div style={{backgroundColor:"whitesmoke",borderRadius:10,marginRight:20,height:300}}>
                            asdasd
                          </div>
                      </div>
                      <div style={{backgroundColor:"white",height:"100%"}}>
                          <div style={{backgroundColor:"whitesmoke",borderRadius:10,marginRight:20,height:300}}>
                            asdasd
                          </div>
                      </div>
                      <div style={{backgroundColor:"white",height:"100%"}}>
                          <div style={{backgroundColor:"whitesmoke",borderRadius:10,marginRight:20,height:300}}>
                            asdasd
                          </div>
                      </div>
                      <div style={{backgroundColor:"white",height:"100%"}}>
                          <div style={{backgroundColor:"whitesmoke",borderRadius:10,marginRight:20,height:300}}>
                            asdasd
                          </div>
                      </div>
                      <div style={{backgroundColor:"white",height:"100%"}}>
                          <div style={{backgroundColor:"whitesmoke",borderRadius:10,marginRight:20,height:300}}>
                            asdasd
                          </div>
                      </div>
                    </Slider>
                </Container>
          </div>
          <div style={{paddingBottom:50,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div style={{fontSize:30,fontWeight:"bold"}}>Our Client</div>
                <Container style={{marginTop:50,marginBottom:50}}>
                <Slider {...settings} style={{padding:10}}>
                      <div style={{backgroundColor:"white",height:"100%"}}>
                          <div style={{backgroundColor:"whitesmoke",borderRadius:10,marginRight:20,height:100}}>
                            asdasd
                          </div>
                      </div>
                      <div style={{backgroundColor:"white",height:"100%"}}>
                          <div style={{backgroundColor:"whitesmoke",borderRadius:10,marginRight:20,height:100}}>
                            asdasd
                          </div>
                      </div>
                      <div style={{backgroundColor:"white",height:"100%"}}>
                          <div style={{backgroundColor:"whitesmoke",borderRadius:10,marginRight:20,height:100}}>
                            asdasd
                          </div>
                      </div>
                      <div style={{backgroundColor:"white",height:"100%"}}>
                          <div style={{backgroundColor:"whitesmoke",borderRadius:10,marginRight:20,height:100}}>
                            asdasd
                          </div>
                      </div>
                      <div style={{backgroundColor:"white",height:"100%"}}>
                          <div style={{backgroundColor:"whitesmoke",borderRadius:10,marginRight:20,height:100}}>
                            asdasd
                          </div>
                      </div>
                      <div style={{backgroundColor:"white",height:"100%"}}>
                          <div style={{backgroundColor:"whitesmoke",borderRadius:10,marginRight:20,height:100}}>
                            asdasd
                          </div>
                      </div>
                    </Slider>
                </Container>
          </div>
          <div>
            <Container fluid={true} style={{padding:0,backgroundColor:"#26b495",paddingTop:30}}>
                  <Container>
                      <Row style={{paddingBottom:40}}>
                            <Col lg={4} style={{color:"white"}}>
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
                            <Col lg={4} style={{color:"white"}}>
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
                            <Col lg={4} style={{color:"white"}}>
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
                      </Row>
                      <Row style={{borderBottom:"solid 2px white"}}></Row>
                      <Row style={{paddingTop:30,paddingBottom:30}}>
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
  