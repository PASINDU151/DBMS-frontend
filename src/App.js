import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import AddEmployee from "./component/Employee/AddEmployee";
import EditEmployee from "./component/Employee/EditEmployee";
import EmployeeView from "./component/Employee/EmployeeView";
import EmployeeProfile from "./component/Employee/EmployeeProfile";
import { NavBar } from "./component/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const auth = true;

function App() {
  return (
    <main className="container mt-5 bg-[url('annie-spratt-wuc-KEIBrdE-unsplash.jpg')] bg-cover bg-center">
      <Router>
      <NavBar/>
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-Employee" element={<EmployeeView />}></Route>
          {(auth) ? <Route exact path="/add-Employee" element={<AddEmployee />}></Route> : null}
          <Route exact path="/edit-Employee/:id" element={<EditEmployee />}></Route>
          <Route exact path="/Employee-Profile/:id" element={<EmployeeProfile />}></Route>
      </Routes>
      </Router>
    </main>
  );
}

export default App;
