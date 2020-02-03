import React from "react";
import "./App.css";
import { About, Footer, Header, Resume } from "./components";

const App = () => {
    return (
        <div className="App">
            <Header />
            <About />
            <Resume />
            {/* <Portfolio /> */}
            {/* <Contactus /> */}
            <Footer />
        </div>
    );
};

export default App;
