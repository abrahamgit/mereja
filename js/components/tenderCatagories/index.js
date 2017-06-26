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
  List,
  ListItem,
  CheckBox,
  
} from "native-base";
import styles from "./styles";

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
          <List>
            <ListItem itemDivider>
              <Text>Catagoriy A</Text>
            </ListItem>  

            <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>inside categoriy one</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Inside catetory</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>inside categoriy one</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Inside catetory</Text>
            </Body>
          </ListItem>


            <ListItem itemDivider>
              <Text>Catagory B</Text>
            </ListItem>  

            <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>inside categoriy one</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Inside catetory</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>inside categoriy one</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Inside catetory</Text>
            </Body>
          </ListItem>
          </List>
          <Button full success
                  style={styles.btnSucces}
                >
                  <Text>Get Started</Text>
                </Button>

        </Content>
      </Container>
    );
  }
}

export default BlankPage2;
