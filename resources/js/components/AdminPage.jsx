import React from 'react';

const AdminPage = ({porudzbine}) => {
    console.log(porudzbine)
  return (
    <div>
      <h1>Admin panel</h1>
      <div className="admin-menu">
        <div className="admin-menu-item">
          <h2>Proizvodi</h2>
          <ul>
            <li>Dodaj novi proizvod</li>
            <li>Izmeni postojeći proizvod</li>
            <li>Obriši proizvod</li>
          </ul>
        </div>
        <div className="admin-menu-item">
          <h2>Kategorije</h2>
          <ul>
            <li>Dodaj novu kategoriju</li>
            <li>Izmeni postojeću kategoriju</li>
            <li>Obriši kategoriju</li>
          </ul>
        </div>
        <div className="admin-menu-item">
          <h2>Narudžbine</h2>
          <ul>
            <li>Pregledaj narudžbine</li>
            <li>Obradi narudžbine</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
