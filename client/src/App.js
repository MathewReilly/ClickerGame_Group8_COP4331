import {Routes, Route} from 'react-router-dom'
import HomePage from './HomePage.js'
import GamePage from './GamePage.js'

function App()
{
  return(
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="game" element={<GamePage />} />
        <Route path="/logout" element={<HomePage />} />
    </Routes>
  );
}

export default App;
