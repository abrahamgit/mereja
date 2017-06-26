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
  Body,
  Form,
  Label,
  Input,
  Item,
} from "native-base";
import styles from "./styles";

class Signup extends Component {
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
          <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Enter Password</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>ReEnter your Password</Label>
                <Input />
              </Item>

              <Button  full success
                style={styles.signup}
                onPress={() => this.props.navigation.navigate("TenderCatagories")}
              >
                <Text> Sign Up </Text>
              </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Signup;
