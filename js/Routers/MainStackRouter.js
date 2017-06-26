import React, { Component } from "react";
import Login from "../components/login/";
import Home from "../components/home/";
import BlankPage from "../components/blankPage";
import Signup from "../components/signup";
// import TabOne from "../components/home";
// import TabTwo from "../components/home";
import TenderCatagories from "../components/tenderCatagories";
import HomeDrawerRouter from "./HomeDrawerRouter";
import { StackNavigator } from "react-navigation";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";
HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null
});
export default (StackNav = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  BlankPage: { screen: BlankPage },
  Signup: {screen:Signup},
  // TabOne:{screen:TabOne},
  // TabTwo:{screen:TabTwo},
  TenderCatagories: {screen:TenderCatagories},
}));
