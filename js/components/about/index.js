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
  Body
} from "native-base";
import styles from "./styles";

class About extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { props: { name, index, list } } = this;
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor:'#7cb4b4'}}>

          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>About page</Title>
          </Body>

          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <Text>
            Create Something Awesome from About page . . .
          </Text>
        </Content>
      </Container>
    );
  }
}

export default About;
