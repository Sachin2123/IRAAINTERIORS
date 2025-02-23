import { lazy } from "react";

const Header = lazy(() => import("../src/components/Header/Header"));
const UserDetails = lazy(() =>
  import("../src/components/UserDetails/UserDetails")
);
const Footer = lazy(() => import("../src/components/Footer/footer"));
const App = () => {
  return (
    <div className="App">
      <Header />
      <UserDetails />
      <Footer />
    </div>
  );
};

export default App;
