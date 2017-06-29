import React, { Component } from "react";
import Home1 from "../components/home1";
import Company from "../components/company/";
import Categories from "../components/categories";
import Service from "../components/service";
import BlankPage from "../components/blankPage";
import About from "../components/about";
import Searchbar from "../components/searchbar";
import ServiceDetail from "../components/serviceDetail";
import HomeDrawerRouter from "./HomeDrawerRouter";
import { StackNavigator } from "react-navigation";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";
HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null
});
export default (StackNav = StackNavigator({
  Home1: { screen: Home1 },
  Categories:{screen:Categories},
  Company: { screen: Company },
  Service: {screen:Service},
  BlankPage: { screen: BlankPage },
  Searchbar: {screen:Searchbar},
  About: {screen:About},
  ServiceDetail:{screen:ServiceDetail},
  
}));


