import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import BlankPage2 from "../blankPage2";
import About from "../about";
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
  List,
  ListItem,
} from "native-base";
import {
  View,

} from "react-native";
import { Grid, Row } from "react-native-easy-grid";

import { setIndex } from "../../actions/list";
import { openDrawer } from "../../actions/drawer";
import styles from "./styles";

const datas = ['Education', 'Finance', ' Buisness ', 'Transportation '];

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
                <Button onPress={() => this.props.onAdd()}>
                  <Text>{data}</Text>
                </Button>
                
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
          }
          />

          <Button onPress={() => this.props.navigation.navigate("Company")}>
          <Text>Go to category</Text>
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
    About: {screen:About},

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
