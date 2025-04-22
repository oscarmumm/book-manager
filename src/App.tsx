import { useContext } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import { UserContext } from './contexts/UserContext';
import { BrowserRouter as Router } from 'react-router';
import { AppRoutes } from './routes/Routes';

function App() {
    const userContext = useContext(UserContext);
    if (!userContext) return null;
    const { userData } = userContext;
    return (
        <Router>
            <main className='fixed overflow-auto h-screen w-full bg-gradient-to-b from-indigo-600 to-indigo-900'>
                <div className='flex flex-col items-center font-nunito'>
                    <Header />
                    {userData ? <AppRoutes /> : <Login />}
                </div>
            </main>
        </Router>
    );
}

export default App;
