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
  View,
  ListItem,
  List
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import { setIndex } from "../../actions/list";
import { openDrawer } from "../../actions/drawer";
import styles from "./styles";

//the api is here 
import { mergaApi } from "../../utils/api.js" 
const datas = [ 'Replace Lost examination certificate'];


class Home extends Component {

//constractor added 
  constructor(props){
    super(props);
    this.state ={
      //for the refreshign perpose 
      refreshing:true,
    }
  }





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
        <Header style={{backgroundColor:'#7cb4b4'}} searchBar rounded>
        
          <Button transparent small onPress={() => DrawerNav.navigate("DrawerOpen")}>
            <Icon active name="menu" />
          </Button>
       
        
          <Item style={{width: 100}}>
            <Icon active name="search" />
            <Input placeholder="Search" />

             <Button transparent>
            <Text>Search</Text>
          </Button>
          </Item>
          
           
        
          
        </Header>

        <Content padder >
      
         <List
            dataArray={datas} renderRow={data =>
              <ListItem>
                  <TouchableOpacity style={styles.rowItem}
                  onPress={() => this.props.navigation.navigate("ServiceDetail")}>
                    <Text style={styles.itemName}>{data}</Text>
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
