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
} from 'react-native';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class BlankPage1 extends Component {
  constructor(props){
    super(props);
    this.state={
        jsonURL: 'http://demo.morgenrot-wolf.de/qubidu/test.json',
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
            dataSource: this.state.dataSource.cloneWithRows(responseData)
          });
     })
     .done();
   }

renderRow(rowData) {
  return (
    <View style={styles.row}>
      <Text>{rowData.Gattung}</Text>
      <Text>{rowData.ab}</Text>
      <Text>{rowData.bis}</Text>
    </View>
  );
}
  render() {
    return (

      <View style={styles.container}>

         <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
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


AppRegistry.registerComponent('BlankPage1', () => BlankPage1);
