import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { MainNavigation } from './components/MainNavigation';
import { CharacterList } from './components/CharacterList';
import { Character } from './components/Character';
import Catalog from './components/Catalog';
import Create from './components/Create';
import Details from './components/Details';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MainNavigation />

                <Routes>
                    <Route path='*' element={<h1>404</h1>} />
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/create' element={<Create />} /> 
                    <Route path='/characters/:characterId/*' element={<Character />} />                    
                    <Route path='/characters' element={<CharacterList />} />                    
                </Routes>
            </header>
        </div>
    );
}

export default App;
