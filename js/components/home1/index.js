import React, { Component } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Icon,
  View,
  Text,
  Right
} from "native-base";
import { Field, reduxForm } from "redux-form";
import { setUser } from "../../actions/user";
import styles from "./styles";

const background = require("../../../images/shadow.png");



class Home1 extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    setUser: React.PropTypes.func
  };
  constructor(props) {
    super(props);
    };
 


    

  render() {
    return (
      <Container >
        <View style={styles.container}>
          <Content style={{backgroundColor:"#c7e4eb"}}>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
                
                
               
                
                <Button full success
                  style={styles.btn}
                  onPress={() => this.props.navigation.navigate("Categories")}
                >
                  <Text>Search By company Name</Text>
                </Button>


                 <Button full primary
                      style={styles.btnface}
                      onPress={() => this.props.navigation.navigate("Searchbar")}
                 >
                  <Text>Search By Service</Text>
                </Button>
                
                   <Button  transparent
                onPress={() => this.props.navigation.navigate("About")}
                >
              <Text>About the App</Text>
               </Button>
               
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}

export default Home1;
