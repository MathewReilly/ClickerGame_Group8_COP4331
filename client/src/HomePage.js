import './HomePage.css';


const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <div>
                    <h1 className="HomePage-h1">Group 8</h1>
                </div>
                <div class="HomePage-login">
                    <form>
                        <p>Login: <br></br>
                            <input type="text" name="username" placeholder="Enter Username"></input> <br></br>
                            <input type="text" name="password" placeholder="Enter Password"></input>
                            <input type="submit" name="" value="Submit"></input>
                        </p>
                    </form>
                </div>
                <div>
                    <p>
                        Don't have an account: &nbsp;
                        <a
                            className="HomePage-link"
                            href="https://cdn.discordapp.com/attachments/1060706693610209281/1067100584693485638/IMG_0914.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Register
                        </a>
                    </p>
                </div>
            </header>
        </div>
    )
}

export default HomePage;