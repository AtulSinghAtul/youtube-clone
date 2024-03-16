import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginpage/LoginPage";
import { useState } from "react";
import "./_app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";

function Layout({ children }) {
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
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/signup"} element={<SignupPage />} />
          <Route
            path="/search"
            element={
              <Layout>
                <h1>This is search page</h1>
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
