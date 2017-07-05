/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Tab,
  Tabs,
  TabHeading,
  List,
  ListItem,
  Thumbnail,

} from "native-base";
import styles from "./styles";

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class BlankPage extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props){
    super(props);
    this.state={
        jsonURL: 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json',
        dataSource: ds.cloneWithRows(['row 1', 'row 2'])
    }
  }
   componentDidMount(){
      this.loadJSONData();
}

   loadJSONData() {

     fetch(this.state.jsonURL, {method: "GET"})
     .then((response) => response.json())
     .then((responseData) =>
     {
          this.setState({ 
            dataSource: this.state.dataSource.cloneWithRows(responseData.movies)
          });
     })
     .done();
   }

renderMovie(movie) {
  return (
    <View style={styles.row}>
      <Text>{movie.title}</Text>
      <Text>{movie.year}</Text>
    </View>
  );
}
  render() {
    return (

      <View style={styles.container}>

         <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderMovie}
            />
      </View>

    );
  }


}

const styles=StyleSheet.create({
  container:{
    flex:1,
  }
});


AppRegistry.registerComponent('BlankPage', () => BlankPage);
