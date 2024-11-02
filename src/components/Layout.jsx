import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="mainContainer">
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

export default Layout;