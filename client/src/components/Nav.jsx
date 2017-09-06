import React from 'react';

const navStyle = {
  marginBottom: '0',
  borderRadius: '0',
  height: '52px',
  background: '#002347'
};

const spanStyle = {
  color: 'white',
}

const Nav = () => (
  <div id="navbar" className="ui fixed menu">
    <a className="item">
      <span className="logo">NFL Draft Data</span>
    </a>
  </div>
)

export default Nav;