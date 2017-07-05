import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Image,
  StyleSheet,
  ListItem
} from "native-base";


class BlankPage2 extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props){
    super(props);
    let ds = new ListItem.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      jsonUrl:'http://192.168.0.72/test/wp-json/wp/v2/posts/?filter[orderby]=rand&filter[per_page]=1',
      dataSource: ds.cloneWithRows(['row 1', 'row 2'])
    }
  }
  componentDidMount(){
    this.loadJSONData();
  }
  loadJSONData(){
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
    <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {this.state.thought.title}
          </Text>
          <Text style={styles.text}>
            {this.state.thought.content}
          </Text>
        </View>
    </View>
  );
}
  render() {
    return (

      <View style={styles.container}>

         <ListItem
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
            />
      </View>

    );
  }
}


export default BlankPage2;
