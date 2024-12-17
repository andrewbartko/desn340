// import * as React from 'react';
// import './navbar.css';
//
//
// function NavBar() {
//     return (
//         <div style={{
//             backgroundColor: 'white',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             padding: '10px 20px',
//             height: '4rem'
//         }}>
//             <div style={{ display: 'flex', alignItems: 'center', padding: '1rem 2rem' }}>
//                 <img
//                     src="src/assets/logo.svg"
//                     alt="Bike Edmonton Logo"
//                 />
//             </div>
//             <div style={{ display: 'flex', padding: '1rem 2rem' }}>
//                 <button style={buttonStyle}>Home</button>
//                 <button style={buttonStyle}>About Us</button>
//                 <button style={buttonStyle}>Bikes</button>
//                 <button style={buttonStyle}>Locations</button>
//                 <button style={buttonStyle}>Learn More</button>
//                 <button style={{ ...buttonStyle, backgroundColor: '#ACD0D6', borderRadius: '0.5rem', color:'white' }}>Blog</button>
//             </div>
//         </div>
//     );
// }
//
// const buttonStyle = {
//     background: 'none',
//     border: 'none',
//     color: '#333',
//     fontSize: '1rem',
//     fontWeight: '500',
//     cursor: 'pointer',
//     outline: 'none',
// };
//
// export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
    return (
        <div style={{
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            height: '4rem'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '1rem 2rem' }}>
                <img
                    src="src/assets/logo.svg"
                    alt="Bike Edmonton Logo"
                />
            </div>
            <div id="Hamburger" style={{display: 'flex', padding: '1rem 2rem'}}>
                <></>
            </div>
            <div style={{display: 'flex', padding: '1rem 2rem'}}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/about" style={linkStyle}>About Us</Link>
                <Link to="/bikes" style={linkStyle}>Bikes</Link>
                <Link to="/locations" style={linkStyle}>Locations</Link>
                <Link to="/learn-more" style={linkStyle}>Learn More</Link>
                <Link to="/blog" style={{
                    ...linkStyle,
                    backgroundColor: '#ACD0D6',
                    borderRadius: '0.5rem',
                    color: 'white',
                    padding: '0.5rem 1rem'
                }}>
                    Blog
                </Link>
            </div>
        </div>
    );
}

const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    margin: '0 10px',
};

export default NavBar;

