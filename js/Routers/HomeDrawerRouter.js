import React, { Component } from "react";
import Categories from "../components/categories";
import BlankPage2 from "../components/blankPage2";
import About from "../components/about";
import Home1 from "../components/home1";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";
export default (DrawNav = DrawerNavigator(
  {
    Categories: { screen: Categories },
    BlankPage2: { screen: BlankPage2 },
    About: {screen: About},
    Home1: {screen: Home1},
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
