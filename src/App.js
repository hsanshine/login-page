import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = (infoObject) => {
    //check if email and password are correct
    console.log(`${infoObject.email} and ${infoObject.password}`);
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    //log someone out
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      <MainHeader isAutheticated={isLoggedIn} onLogOut={handleLogOut} />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogIn={handleLogIn} />}
      </main>
    </div>
  );
}

export default App;
