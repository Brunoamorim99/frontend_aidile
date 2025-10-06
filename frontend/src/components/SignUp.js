import React, { useState } from "react";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        alert(`Signed up as ${name} (${email})`);
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className='auth-container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input
                    type='text'
                    placeholder='Full Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
