import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screen/HomeScreen";
import "./_app.scss";

function App() {
  return (
    <>
      <Header />
      <div className="app_container">
        <Sidebar />
        <Container fluid className="app_main">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
