import React, { Component } from "react";
import BlankPage2 from "../components/blankPage2";
import About from "../components/about";
import Home1 from "../components/home1";
import Searchbar from "../components/searchbar";
import Categories from "../components/categories";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";
export default (DrawNav = DrawerNavigator(
  {
    Categories: { screen: Categories },
    // BlankPage2: { screen: BlankPage2 },
    About: {screen: About},
    Home1: {screen: Home1},
    Searchbar: {screen: Searchbar},
    

  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
