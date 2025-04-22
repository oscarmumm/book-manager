import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
    return (
        <div className="h-screen w-full fixed overflow-auto flex flex-col items-center justify-center font-nunito bg-gradient-to-b from-indigo-600 to-indigo-900">
            <Header />
            {/* <Login /> */}
            <Home />
        </div>
    )
}

export default App
