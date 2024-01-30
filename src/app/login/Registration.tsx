import React from 'react';

const Registration = ({
    username,
    email,
    phone,
    password,
    setUsername,
    setEmail,
    setPhone,
    setPassword,
    rePassword,
    setRePassword,
    handleRegistration,
}) => {
    return (
        <div className="form px-4">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                name="rePassword"
                className="form-control"
                placeholder="Re-Password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
            />
            {password !== rePassword && (
                <div className="alert alert-danger mt-2" role="alert">
                    Passwords do not match
                </div>
            )}
            <button className="btn btn-dark btn-block" onClick={handleRegistration}>
                Signup
            </button>
        </div>
    );
};

export default Registration;
