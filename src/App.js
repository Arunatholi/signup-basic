import Signup from "./components/Signup";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    // <div>
    //   <Signup/>
    // </div>
    <Router>
      <Routes>
        <Route path="/"element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
