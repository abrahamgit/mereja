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
  ListView
} from 'react-native';

var MOCKED_DATA = [
  {title: 'Deep Thought #1', content: "If there's no 'there' there, where is it and what's there?"},
];

var REQUEST_URL = 'http://192.168.2.35/deep-thoughts.dev/wp-json/wp/v2/posts/';


export default class BlankPage1 extends Component {

    constructor () {
    super()
      this.state = {
        thought: MOCKED_DATA,
        index:1,
        list: {
				results: []
			}
      }
  }

  componentDidMount() {
      this.fetchData();
    }

  fetchData() {
    // this.state.index = this.state.index + 1;
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
//new  //use this to ritrive list of datas and 
      // const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
			// 	const dataSource = ds.cloneWithRows(this.props.list.results);
			// 	this.setState({
			// 		list: this.props.list,
			// 		dataSource,
			// 		isLoading: false 
//new
       
        this.setState({
            thought: { title: responseData[this.state.index].title.rendered, content:responseData[this.state.index].content.rendered },

            
        });
        // this.setState({results: this.state.results.concat([thought])});
        // this.setState({ results: [...this.state.results, ...thought] });
 
      //console.log(results);
    })
    .done();    
}

// //news
// 			_retrieveNextPage(type) {
// 		if (this.state.currentPage !== this.props.list.total_pages) {
// 			this.setState({
// 				currentPage: this.state.currentPage + 1
// 			});

// 			axios.get(REQUEST_URL)
// 				.then(res => {
// 					const data = this.state.list.results;
// 					const newData = res.data.results;

// 					newData.map((item, index) => data.push(item));

// 					this.setState({
// 						dataSource: this.state.dataSource.cloneWithRows(this.state.list.results)
// 					});
// 				}).catch(err => {
// 					console.log('next page', err); // eslint-disable-line
// 				});
// 		}
// 	}
//new end


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
        <View style={styles.buttonContainer}>

       


          <TouchableHighlight
            style={styles.button}
            underlayColor='#ccc'
            
            onPress={this.fetchData()}
          >
            <Text style={styles.buttonText}>Hmmmmm...</Text>
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



