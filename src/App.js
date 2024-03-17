import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginpage/LoginPage";
import { useState } from "react";
import "./_app.scss";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const authUser = useSelector((store) => store?.auth?.uid);
  console.log(authUser);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleToggleSidebar = () => setToggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar
          toggleSidebar={toggleSidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        <Route
          path="/search"
          element={
            <Layout>
              <h1>This is search page</h1>
            </Layout>
          }
        />
        <Route path={"/login"} element={<LoginPage />} />
        <Route
          path="*"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
