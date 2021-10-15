import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';

import endpoint from '../../utils/endpoint';

const styles = {
  tabs: {
    background: '#fff',
  },
  slide: {
    padding: 15,
    color: '#fff',
  },
  slide1: {
    backgroundColor: 'white',
  },
  slide2: {
    backgroundColor: 'white',
  },
  slide3: {
    backgroundColor: 'white',
  },
};

class DetailTrainingTabs extends React.Component {

  constructor(props){
    super(props);
    this.fetchTestimoni = async()=>{
      try {
        let parsed = JSON.parse(props.training.testimoni);
        let id = parsed.map((item)=>parseInt(item.id_pelatihantestimoni));
        let request = await fetch(`${endpoint}/api/gettestimoni`,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({
            id_testimoni:[1,2,3,4,5]
          })
        });
        let json = await request.json();
        this.setState({
          testimoni:json
        })
      } catch (error) {
        console.log(error);
      }
    }
  }

  state = {
    index: 0,
    testimoni : []
  };

  

  componentDidMount(){
    this.fetchTestimoni();
  }

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;
    

    return (
      <div>
        <Tabs
         variant="scrollable"
         scrollButtons="auto"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#23b697"
           }
          }}
        value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
          <Tab label="Deskripsi" />
          <Tab label="Persyaratan" />
          <Tab label="Materi" />
          <Tab label="Instruktur" />
          <Tab label="Fasilitas" />
          <Tab label="Info Pendaftaran" />
          <Tab label="Galeri" />
          <Tab label="Testimoni" />
          <Tab label="Ulasan" />
        </Tabs>
        <SwipeableViews index={index} style={{marginTop:15}} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide, styles.slide1, {color:"black"})} dangerouslySetInnerHTML={{ __html: this.props.training.deskripsipenuh }}></div>
          <div style={Object.assign({}, styles.slide, styles.slide1, {color:"black"})} dangerouslySetInnerHTML={{ __html: this.props.training.persyaratan }}></div>
          <div style={Object.assign({}, styles.slide, styles.slide1, {color:"black"})} dangerouslySetInnerHTML={{ __html: this.props.training.materi }}></div>
          <div style={Object.assign({}, styles.slide, styles.slide1, {color:"black"})} dangerouslySetInnerHTML={{ __html: this.props.training.instruktur }}></div>
          <div style={Object.assign({}, styles.slide, styles.slide1, {color:"black"})} dangerouslySetInnerHTML={{ __html: this.props.training.fasilitas }}></div>
          <div style={Object.assign({}, styles.slide, styles.slide1, {color:"black"})} dangerouslySetInnerHTML={{ __html: this.props.training.infopendaftaran }}></div>
          <div style={Object.assign({}, styles.slide, styles.slide1, {color:"black"})}>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gridGap:30}}>
                  {
                    JSON.parse(this.props.training.galeri).map((item,index)=>{
                      return (
                        <div>
                            <img src={`${endpoint}/storage/public/galeri/${item.url}`} style={{width:"100%",height:250,backgroundColor:"whitesmoke",borderRadius:10}}></img>
                        </div>
                      )
                    })
                  }                  
              </div>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide1, {color:"black"})}>
                {
                  this.state.testimoni.map((item,index)=>{
                    return (
                      <div style={{padding:25,backgroundColor:"whitesmoke",borderRadius:10,marginBottom:20}}>
                          <div style={{fontWeight:"bold"}}>{item.nama}</div>
                          <div style={{marginTop:5}}>{item.testimoni}</div>
                      </div>
                    )
                  })
                }
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide1, {color:"black"})} dangerouslySetInnerHTML={{ __html: this.props.training.ulasan }}></div>
        </SwipeableViews>
      </div>
    );
  }
}

export default DetailTrainingTabs;