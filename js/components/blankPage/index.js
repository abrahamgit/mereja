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
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Button,
  List, 
  ListItem, 
  Icon, 
  Content,
  
} from 'react-native';

var MOCKED_DATA = [
  {title: 'Deep Thought #1', content: "If there's no 'there' there, where is it and what's there?"},
];

var REQUEST_URL = 'http://192.168.0.83/deep-thoughts.dev/wp-json/wp/v2/posts/';


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
   axios.get(REQUEST_URL)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
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
    if ( !this.state.thought ) {
      return this.renderLoadingView();
    }

 
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor:'#7cb4b4'}}>


          <Left>
            <Button
              transparent
              onPress={() => DrawerNav.navigate("DrawerOpen")}
            >
              <Icon active name="menu" />
            </Button>
          </Left>

          <Body>
            <Title>Categories</Title>
          </Body>

          <Right>

            <Button
              transparent
              onPress={() => {
                DrawerNav.dispatch(
                  NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: "Home" })]
                  })
                );
                DrawerNav.goBack();
              }}
            >
              <Icon active name="power" />
            </Button>
          </Right>


        </Header>

        <Content>
          <Text>Todo Category List</Text>

          <List
            dataArray={datas} renderRow={data =>
              <ListItem>
                  <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate("Company")}
                  style={styles.rowItem}>
                    <Text style={styles.itemName}>{data}</Text>
                    <View style={{flex:1}}/>
                  </TouchableOpacity>
                  
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
          }
          />
{/*
          <Button onPress={() => this.props.navigation.navigate("Company")}>
          <Text>Go to category</Text>
        </Button>*/}

        </Content>
        
      </Container>
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





