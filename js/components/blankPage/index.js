import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  // Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";

// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';

class BlankPage2 extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { props: { name, index, list } } = this;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Blank page</Title>
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
          <Title>
            Create Something Awesome . . .
          </Title>
        </Content>
      </Container>
    );
  }
}

export default BlankPage2;
