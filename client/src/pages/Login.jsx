import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            console.log("ref") ;
            const URL='http://localhost:3001/login'
            const response = await axios.post(URL,{
                email,password
            });
            console.log(response) ;
            const json= response.data ;

            console.log(json);
            if(json.success){
                localStorage.setItem('auth-token',json.token);
            }
            // Navigate to the dashboard or any other page
            navigate('/dash');
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError('Invalid email or password');
            } else {
                setError('An error occurred during login. Please try again.');
            }
        }
    };
    return (
        <>
            {/* Navbar */}
            <div className="navbar">
                <div className="container flex">
                    <h1 className="nav">VITConnect</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <section className="showcase2">
                <div className="showcase-form card">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        {/* action */}
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div className="form-control">
                            <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="form-control">
                            <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <input type="submit" name="login" value="login" className="btn btn-primary" />
                    </form>
                    <br />
                    <div>
                        <a href="forgot.php">Forgot Password ?</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
