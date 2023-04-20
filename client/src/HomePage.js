import './HomePage.css';
import RegisterModal from "./RegisterModal";
import {useState} from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => { 
    
    const[openModal, setOpenModal] = useState(false);


    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <div>
                    <h1 className="HomePage-h1">Group 8</h1>
                </div>
                <div class="HomePage-login">
                    <form>
                        <p>Login: <br></br>
                            <input type="text" name="username" placeholder="Enter Username" ></input> <br></br>
                            <input type="text" name="password" placeholder="Enter Password"></input><br></br>
                            <Link to="/game">Submit</Link>
                        </p>
                    </form>
                </div>
                <div>
                    <p>
                        Don't have an account: &nbsp;
                        <button className="openModalBtn" onClick={() =>{setOpenModal(true)}}>Register Here</button>
                        { openModal && <RegisterModal closeModal={setOpenModal}/>} 
                    </p>
                    <a
                            className="HomePage-link"
                            href="https://cdn.discordapp.com/attachments/1060706693610209281/1067100584693485638/IMG_0914.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Click Here for fun
                        </a>
                </div>
            </header>
        </div>
        
    )
}

export default HomePage;