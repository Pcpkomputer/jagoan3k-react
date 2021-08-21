import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';

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
  state = {
    index: 0,
  };

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
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            slide n°2
            <Select value={10} autoWidth={false}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
            </Select>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>slide44444</div>
        </SwipeableViews>
      </div>
    );
  }
}

export default DetailTrainingTabs;