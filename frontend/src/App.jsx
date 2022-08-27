import './App.css';
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from './pages/mainpage';
import {SplashScreen,AppTheme, NavBar, NavBarLink, NavSearchSuggestion, NavThemeSwitcher} from "react-windows-ui";

const App = () => {

/*    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e) => setName(e.target.value);
    const updateResultText = (result) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }*/
    const [splash, setSplash] = useState(true);

    useEffect(() => {
        setSplash(false);
    }, [])


    return (

            <Router basename={"/"}>
                <SplashScreen
                    duration={1000} /* Add additional delay before page loads */
                    isVisible={splash}
                    title={"App Name"}
                />

                <AppTheme // To make app reactive with theme
                    scheme="system" // Available props - 'light', 'dark' or 'system'
                />

                <NavBar
                    title="App Name"
                    shadowOnScroll={true}
                    titleBarMobile={
                        <div style={{display: "flex", justifyContent: "space-between", width: "calc(100% - 60px)"}}>
                            <span className="app-navbar-name">React-windows-ui</span>
                            <span className="app-navbar-name">Subtitle</span>
                        </div>}
                >
                    {/* Optional component - emphasizes navbar Search funtionality */}
                    <NavSearchSuggestion
                        placeholder="Search Your Pages.."
                        tooltip="Search Tooltip"
                        data={[
                            {label: 'home', link: '/', icon: <i className="icons10-home"></i>},
                        ]}
                    />
                    <NavThemeSwitcher/>

                    <h1>Pages</h1>
                    <div className="app-hr"></div>

                    <NavBarLink
                        to="/"
                        exact={true}
                        text="Home"
                        icon={<i className="icons10-home"></i>}
                    />

                    <NavBarLink
                        to="/page1"
                        text="Page1"
                        icon={<i className="icons10-grid-2"></i>}
                    />

                    <NavBarLink
                        to="/page2"
                        text="Page2"
                        icon={<i className="icons10-columns"></i>}
                    />

                </NavBar>
                <Routes>
                    <Route path="/" element={<Mainpage first={false} />} exact />
{/*                    <Route path="/page1" element={} />
                    <Route path="/page2" element={} />*/}
                </Routes>
            </Router>
    )
}

export default App
