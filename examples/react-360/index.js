import React from 'react';
import {
  AppRegistry,
  asset,
  Environment,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

export default class background_demo extends React.Component {
  backgrounds = ['1.png', '2.png', '3.png', '4.png', '5.png'];
  currentBackground = 0;

  componentDidMount() {
    this.changeBackground(0);
  }

  render() {
    return (
      <View>
        <View style={styles.panel}>
          <VrButton onClick={() => this.changeBackground(-1)} style={[styles.button, styles.buttonLeft]}>
            <Text style={styles.buttonText}>
              Prev
            </Text>
          </VrButton>

          <VrButton onClick={() => this.changeBackground(1)} style={[styles.button, styles.buttonRight]}>
            <Text style={styles.buttonText}>
              Next
          </Text>
          </VrButton>
        </View>
      </View>
    );
  }

  changeBackground(change) {
    this.currentBackground+=change;

    if(this.currentBackground < 0) {
      this.currentBackground = this.backgrounds.length - 1;
    } else if(this.currentBackground >= this.backgrounds.length) {
      this.currentBackground = 0;
    }
    
    Environment.setBackgroundImage(
      asset(this.backgrounds[this.currentBackground]),
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1024,
    height: 100,
    backgroundColor: 'rgba(256, 256, 256, .5)',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    alignItems: 'center',
    width: 256
  },
  buttonLeft: {
    left: 5,
  },
  buttonRight: {
    right: 5,
  },
  buttonText: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('background_demo', () => background_demo);
