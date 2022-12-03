import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

function Login() {
    const [ formData, setFormData ] = useState ({
        email: "",
        password: "",
    });
    
    const { email, password } = formData;
    
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name] : e.target.value
        }));
     };
    const onClick = () => { };
    const onSubmit = (e) => {
        e.preventDefault();
     };

  return (
    <>
        <section className="heading">
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>Please login for setting goals</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                        type="email" 
                        className="from-control" 
                        id="email" 
                        name="email" 
                        value={email} 
                        placeholder="Email" 
                        onChange={onChange} 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        className="from-control" 
                        id="password" 
                        name="password" 
                        value={password} 
                        placeholder="Password" 
                        onChange={onChange} 
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block" onClick={onClick}>Submit</button>
                </div>
            </form> 
        </section>
    </>
  )
};

export default Login;