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
  List,
  ListItem,
  CheckBox,
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
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false
     //create a data file 
    };
  }
//handle all the toggles using only one function 
//find a way to save it to local storage 
  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1,
    });
  }



  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2,
    });
  }

  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3,
    });
  }

  toggleSwitch4() {
    this.setState({
      checkbox4: !this.state.checkbox4,
    });
  }
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
            <Title>Service Detail</Title>
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
         <List>

           <ListItem itemDivider>
              <Text>Requirements</Text>
            </ListItem> 
          <ListItem button onPress={() => this.toggleSwitch1()}>
            
            <Body>
              <Text>Four 3X4 photo  </Text>
            </Body>
            <Right>
              <CheckBox checked={this.state.checkbox1} onPress={() => this.toggleSwitch1()} />
            </Right>
          </ListItem>

          <ListItem button onPress={() => this.toggleSwitch3()}>
            
            <Body>
              <Text>copy of your ID </Text>
            </Body>
            <Right>
              <CheckBox checked={this.state.checkbox3} onPress={() => this.toggleSwitch3()} />
            </Right>
          </ListItem>
          
          <ListItem button onPress={() => this.toggleSwitch3()}>
            
            <Body>
              <Text>An Assurance Document from Your kebele Police </Text>
            </Body>
            <Right>
              <CheckBox checked={this.state.checkbox3} onPress={() => this.toggleSwitch3()} />
            </Right>
          </ListItem>

          <ListItem itemDivider>
              <Text>Procedures</Text>
            </ListItem> 


          <ListItem button onPress={() => this.toggleSwitch2()}>
            
            <Body>
              <Text>Go and pay 100 birr at the finance office </Text>
            </Body>
            <Right>
              <CheckBox checked={this.state.checkbox2} onPress={() => this.toggleSwitch2()} />
            </Right>
          </ListItem>

          <ListItem button onPress={() => this.toggleSwitch4()}>
            
            <Body>
              <Text> Give your data and info at registration office and come after 3 days.</Text>
            </Body>
            <Right>
              <CheckBox checked={this.state.checkbox4} onPress={() => this.toggleSwitch4()} />
            </Right>
          </ListItem>
          
          </List>
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
