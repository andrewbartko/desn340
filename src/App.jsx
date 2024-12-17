import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bikes from './pages/Bikes';
import Events from './pages/Events';
import Locations from './pages/Locations';

function App() {
    return (
        <>
            <nav style={navStyle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="src/assets/logo.svg" alt="Bike Edmonton Logo" style={{ marginRight: '10px' }} />
                </div>
                <div>
                    <Link to="/" style={linkStyle}>Home</Link>
                    <Link to="/about" style={linkStyle}>About Us</Link>
                    <Link to="/bikes" style={linkStyle}>Bikes</Link>
                    <Link to="/locations" style={linkStyle}>Locations</Link>
                    <Link to="/learn-more" style={linkStyle}>Learn More</Link>
                    <Link to="/blog" style={{ ...linkStyle, backgroundColor: '#ACD0D6', borderRadius: '0.5rem', color: 'white', padding: '0.5rem 1rem' }}>
                        Blog
                    </Link>
                </div>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bikes" element={<Bikes />} />
                <Route path="/events" element={<Events />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </>
    );
}

const navStyle = {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    height: '4rem'
};

const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
    fontWeight: '500',
    margin: '0 10px',
};

export default App;
