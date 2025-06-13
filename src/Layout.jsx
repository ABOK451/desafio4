import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <header style={{ padding: '15px 30px', backgroundColor: '#f13710', color: '#fff' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Mi Sitio</h1>
          <div>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '30px' }}>Home</Link>
            <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>Acerca de</Link>
          </div>
        </nav>
      </header>

      <main style={{ flexGrow: 1, padding: '40px', backgroundColor: '#f8f8f8' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '15px 30px', backgroundColor: '#f13710', color: '#fff', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>© 2025 - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Layout;
