import React from 'react';
 

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ovde dodajte funkcionalnost za slanje podataka za registraciju
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Registracija</h2>

        <label htmlFor="name">Ime:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Lozinka:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Registruj se</button>
      </form>
    </div>
  );
};

export default Register;
