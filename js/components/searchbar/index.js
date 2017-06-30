import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import BlankPage2 from "../blankPage2";
import DrawBar from "../DrawBar";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Tab,
  Tabs,
  TabHeading,
  Item,
  Input,
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";

import { setIndex } from "../../actions/list";
import { openDrawer } from "../../actions/drawer";
import styles from "./styles";


class Home extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func
  };

  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  }

  render() {
    console.log(DrawNav, "786785786");
    return (
      <Container style={styles.container}>
        <Header searchBar rounded>
   
          <Button transparent small onPress={() => DrawerNav.navigate("DrawerOpen")}>
            <Icon active name="menu" />
          </Button>
       
        
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" />
           

            <Button transparent>
            <Text>Search</Text>
          </Button>
          </Item>
          
        </Header>

        <Content padder >
      
         <Text>Todo on the search list </Text>
         <Button onPress={() => this.props.navigation.navigate("ServiceDetail")}>
          <Text>Go to sellected item </Text>
        </Button>
        </Content>
        
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer())
  };
}
const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list
});

const HomeSwagger = connect(mapStateToProps, bindAction)(Home);
const DrawNav = DrawerNavigator(
  {
    Home: { screen: HomeSwagger },
    BlankPage2: { screen: BlankPage2 },
    
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({ navigation }) => {
  DrawerNav = navigation;
  return {
    header: null
  };
};
export default DrawNav;
