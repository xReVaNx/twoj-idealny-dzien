import "./App.scss";

import EnterOverlay from "./Animations/EnterOverlay/EnterOverlay";

import { BrowserRouter as Router } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./Layouts/Navbar/Navbar";
import Routing from "./Routes/Routing";
import Footer from "./Layouts/Footer/Footer";

function App() {
  return (
    <NextUIProvider>
            <EnterOverlay/>
      <Router>
        <Navbar />
        <Routing />
        <Footer />
      </Router>
    </NextUIProvider>
  );
}

export default App;
