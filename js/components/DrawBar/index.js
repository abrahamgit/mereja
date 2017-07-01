import React from "react";
import { AppRegistry, Image, TouchableOpacity } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Images,
  Icon
} from "native-base";
<<<<<<< HEAD
const routes = ["Home1", "Categories","Searchbar", "About","Blankpage2"];
=======
const routes = ["Home1", "Categories","Searchbar", "About","BlankPage"];
>>>>>>> b08a8c7204880d123dde2876957807d0e77a4f32

const tabbar = require("../../../images/tab/tabBar.png");


export default class DrawBar extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Content style={{backgroundColor:"#c7e4eb"}} >
          <Image
          
            source={require("../../../images/tab/tabBar.png")
              
            }
            style={{
              height: 120,
              backgroundColor:"yellow",
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{
                height: 120,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.props.navigation.navigate("DrawerClose")}
            >
              <Image
                
                style={{ height: 80, width: 200 }}
                    source={require("../../../images/tab/logo.png")}
              />
            </TouchableOpacity>
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
