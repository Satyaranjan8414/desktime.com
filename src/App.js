import "./App.css";
import AllRoute from "./AllRoutes/AllRoute";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute />
      <Box mt="2rem">
        <Footer />
      </Box>
    </div>
  );
}

export default App;
