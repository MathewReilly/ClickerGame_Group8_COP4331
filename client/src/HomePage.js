import './HomePage.css';
import RegisterModal from "./RegisterModal";
import {useState} from 'react';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import suprise from "./Images/Suprise.jpg";
const HomePage = () => { 
    
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, setCookie] = useCookies(['access_token']);
    const navigate = useNavigate();

    const onLogin = async (event) => {
        event.preventDefault();
        const response = await fetch('http://cop4331-23.com:5001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await response.json();
        if (data.token) {
            setCookie('access_token', data.token);
            setCookie('nickname', data.nickname);
            setCookie('currScore', data.currScore);
            navigate('/game');
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <div>
                    <h1 className="HomePage-h1">Group 8</h1>
                </div>
                <div class="HomePage-login">
                <form onSubmit={onLogin}>
                    <input 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        /><br />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        /><br />
                    <button type="submit">Login</button>
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
                            href={suprise}
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