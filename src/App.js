import Header from "../src/components/Header/Header";
import UserDetails from "../src/components/UserDetails/UserDetails";
import Footer from "../src/components/Footer/footer";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Sidebar /> */}
      <UserDetails />
      <Footer />
    </div>
  );
}

export default App;
