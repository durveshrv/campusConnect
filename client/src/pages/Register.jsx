import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneno, setPhoneno] = useState(''); 
    const [gndr, setGnd] = useState('Male');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register", {
            name,
            email,
            phoneno,
            password,
            gndr,
        })
        .then(result => {
            console.log(result.data);
            navigate('/login');
        })
        .catch(err => {
            if (err.response) {
                console.error('Error response from server:', err.response.data);
            } else if (err.request) {
                console.error('No response received from server:', err.request);
            } else {
                console.error('Error during request setup:', err.message);
            }
        });
    };

    return (
        <div>
            <div className="navbar">
                <div className="container flex">
                    <h1 className="nav">VITConnect</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <section className='showcase2'>
                <div className="showcase-form card" style={{ height: '400px' }}>
                    <h2>Register</h2>
                    <form onSubmit={Submit}>
                        <div className="form-control">
                            <input type="text" name="fullname" placeholder="Full Name" onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-control">
                            <input type="text" name="email1" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-control">
                            <input type="text" name="phoneno" placeholder="Phone Number" onChange={(e) => setPhoneno(e.target.value)} required />
                        </div>
                        <div className="form-control">
                            <input type="password" name="password1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="gender-details">
                            <input type="radio" name="gndr" id="dot-1" value="Male" checked={gndr === 'Male'} onChange={() => setGnd('Male')} required />
                            <input type="radio" name="gndr" id="dot-2" value="Female" checked={gndr === 'Female'} onChange={() => setGnd('Female')} required />
                            <input type="radio" name="gndr" id="dot-3" value="Prefer not to say" checked={gndr === 'Prefer not to say'} onChange={() => setGnd('Prefer not to say')} required />
                            <span>Gender</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                <span className="dot one"></span>
                                <span className="gender">Male</span>
                                </label>
                                <label htmlFor="dot-2">
                                <span className="dot two"></span>
                                <span className="gender">Female</span>
                                </label>
                                <label htmlFor="dot-3">
                                <span className="dot three"></span>
                                <span className="gender">Prefer not to say</span>
                                </label>
                            </div>
                        </div>
                        <input type="submit" name="register" value="Register" className="btn btn-primary" />
                    </form>
                    <br />
                </div>
            </section>
        </div>
    );
}

export default Register;
