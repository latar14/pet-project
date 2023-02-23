import React from "react";
import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import { Suspense } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRouter } from "./providers/ThemeProvider/router";
import { Navbar } from "widgets/Navbar";


const App = () => {
const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE</button>
      <Navbar/>
      <AppRouter/>
    </div>
  );
};

export default App;



