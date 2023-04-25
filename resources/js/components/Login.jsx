import React from 'react';
 

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ovde dodajte funkcionalnost za slanje podataka za prijavu
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Prijava</h2>

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Lozinka:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Prijavi se</button>
      </form>
    </div>
  );
};

export default Login;
