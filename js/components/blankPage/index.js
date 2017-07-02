/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import axios from 'axios';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  ListView,
  List,
  ListItem,
} from 'react-native';

//import api from './data.js';
var MOCKED_DATA = [
  {title: 'Deep Thought #1', content: "If there's no 'there' there, where is it and what's there?"},
];

// var REQUEST_URL = 'http://192.168.43.29/deep-thoughts.dev/wp-json/wp/v2/posts/';


export default class BlankPage1 extends Component {


    constructor () {
    super(props);
      this.state = {
        thought: MOCKED_DATA,
        index:1,
        list: {
				rovers: []
			}
      }
  }

  componentDidMount() {
      //this.fetchData();
    }

  fetchData() {
    // this.state.index = this.state.index + 1;
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
        this.setState({
            thought: { title: responseData[this.state.index].title.rendered, content:responseData[this.state.index].content.rendered },           
        });

    })
    .done();    
}

componentWillMount(){
  api.getRovers().then((res)=> {
    this.setState({
      rovers: res.rovers
    })
  });
}




 renderLoadingView () {
    return (
      <View style={styles.container}>
        <Text>
          Thinking thoughts...
        </Text>
      </View>
    );
  }

  render() {
    console.log("Rovers: ", this.state.rovers);
    if ( !this.state.thought ) {
      return this.renderLoadingView();
    }

 
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
           {this.state.thought.title}
          </Text>
          <Text style={styles.text}>
            {this.state.thought.content}
          </Text>
        </View>

        <List
            dataArray={datas} renderRow={data =>
              <ListItem>
                  <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate("Company")}
                  style={styles.rowItem}>
                    <Text style={styles.title}>
                      {this.state.thought.title}
                    </Text>
                      <Text style={styles.text}>
                        {this.state.thought.content}
                    </Text>
                    <View style={{flex:1}}/>
                  </TouchableOpacity>
                  
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
          }
          />
        <View style={styles.buttonContainer}>



       


          <TouchableHighlight
            style={styles.button}
            underlayColor='#ccc'
            
            onPress={this.fetchData() }
          >
            <Text style={styles.buttonText}>Next...</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

// var Dimensions = require('Dimensions');
// var windowSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    bottom: 0,
    flex: .1,
    // width: windowSize.width,
    backgroundColor: '#eee',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#666666',
  },
});



