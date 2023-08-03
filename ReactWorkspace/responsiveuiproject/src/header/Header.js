import './Header.css';
import {Navbar} from '../navbar/Navbar';
export function Header(){
    return (
        <header className="myHeader">
            <h1>Employee Management System</h1>
           <Navbar></Navbar>
        </header>
    );
}
