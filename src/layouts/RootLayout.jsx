import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}
      <main className="min-h-[calc(100vh-124px)]">
        <Outlet />
      </main>
      {!isLoginPage && <Footer />}
    </>
  );
};

export default RootLayout;
