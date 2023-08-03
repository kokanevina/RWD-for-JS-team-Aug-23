import logo from './logo.svg';
import './App.css';
import { Header } from './header/Header';
import { EmployeeGrid } from './employeegrid/EmployeeGrid';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
function App() {
  return (
    <>
      <Header></Header>
      <EmployeeGrid></EmployeeGrid>
    </>
  );
}
export default App;

