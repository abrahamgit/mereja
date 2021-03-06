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
  View,
  ListItem,
  Thumbnail,

} from "native-base";
import { Grid, Row } from "react-native-easy-grid";

import { setIndex } from "../../actions/list";
import { openDrawer } from "../../actions/drawer";
import styles from "./styles";


const pratik = require('../../../img/contacts/pratik.png');
const sanket = require('../../../img/contacts/sanket.png');
const megha = require('../../../img/contacts/megha.png');
const atul = require('../../../img/contacts/atul.png');
const saurabh = require('../../../img/contacts/saurabh.png');
const varun = require('../../../img/contacts/varun.png');


const datas = [
  {
    img: pratik,
    text: 'Ministry of Education ',
    note: 'some of the service we proviede . .',
    time: '3:43 pm',
  },
  {
    img: sanket,
    text: 'Ethiopian National Examination Agency ',
    note: 'some of the service we proviede . .',
    time: '1:12 pm',
  },
  {
    img: megha,
    text: ' Ethiopia search and Education Network',
    note: 'some of the service we proviede . .',
    time: '10:03 am',
  },
  {
    img: atul,
    text: 'Minstry of Education',
    note: 'some of the service we proviede . .',
    time: '5:47 am',
  },
  {
    img: saurabh,
    text: 'Ethiopian Revenue Agency',
    note: 'some of the service we proviede . .',
    time: '11:11 pm',
  },
  {
    img: varun,
    text: 'Ethiopian Emigration',
    note: 'some of the service we proviede . .',
    time: '8:54 pm',
  },
];



const datasF = [
  {
    img: pratik,
    text: 'Ministry of Education ',
    note: 'some of the service we proviede . .',
    time: '3:43 pm',
  },
  {
    img: sanket,
    text: 'Ethiopian National Examination Agency ',
    note: 'some of the service we proviede . .',
    time: '1:12 pm',
  },
  {
    img: megha,
    text: ' Ethiopia search and Education Network',
    note: 'some of the service we proviede . .',
    time: '10:03 am',
  },
  {
    img: atul,
    text: 'Minstry of Education',
    note: 'some of the service we proviede . .',
    time: '5:47 am',
  },
  {
    img: saurabh,
    text: 'Ethiopian Revenue Agency',
    note: 'some of the service we proviede . .',
    time: '11:11 pm',
  },
  {
    img: varun,
    text: 'Ethiopian Emigration',
    note: 'some of the service we proviede . .',
    time: '8:54 pm',
  },
];

const datasC = [
  {
    img: pratik,
    text: 'Ministry of Education ',
    note: 'some of the service we proviede . .',
    time: '3:43 pm',
  },
  {
    img: sanket,
    text: 'Ethiopian National Examination Agency ',
    note: 'some of the service we proviede . .',
    time: '1:12 pm',
  },
  {
    img: megha,
    text: ' Ethiopia search and Education Network',
    note: 'some of the service we proviede . .',
    time: '10:03 am',
  },
  {
    img: atul,
    text: 'Minstry of Education',
    note: 'some of the service we proviede . .',
    time: '5:47 am',
  },
  {
    img: saurabh,
    text: 'Ethiopian Revenue Agency',
    note: 'some of the service we proviede . .',
    time: '11:11 pm',
  },
  {
    img: varun,
    text: 'Ethiopian Emigration',
    note: 'some of the service we proviede . .',
    time: '8:54 pm',
  },
];


 const datasT = [
  {
    img: pratik,
    text: 'Ministry of Education ',
    note: 'some of the service we proviede . .',
    time: '3:43 pm',
  },
  {
    img: sanket,
    text: 'Ethiopian National Examination Agency ',
    note: 'some of the service we proviede . .',
    time: '1:12 pm',
  },
  {
    img: megha,
    text: ' Ethiopia search and Education Network',
    note: 'some of the service we proviede . .',
    time: '10:03 am',
  },
  {
    img: atul,
    text: 'Minstry of Education',
    note: 'some of the service we proviede . .',
    time: '5:47 am',
  },
  {
    img: saurabh,
    text: 'Ethiopian Revenue Agency',
    note: 'some of the service we proviede . .',
    time: '11:11 pm',
  },
  {
    img: varun,
    text: 'Ethiopian Emigration',
    note: 'some of the service we proviede . .',
    time: '8:54 pm',
  },
];

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
            <Title>Company Names </Title>
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
          <Text> ToDO Company Name List </Text>
           <List
            dataArray={datas} renderRow={data =>
              <ListItem>
                  <TouchableOpacity style={styles.rowItem} 
                  onPress={() => this.props.navigation.navigate("Service")}>
                    <Text style={styles.itemName}>{data.text}</Text>
                    <Text numberOfLines={1} note>{data.note}</Text>
                    
                    <View style={{flex:1}}/>
                  </TouchableOpacity>
                  
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
          }
          />
          
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
