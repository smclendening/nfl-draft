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
  <div id="navbar" className="ui fixed menu" style={navStyle}>
    <a className="item" /*style={spanStyle}*/>
      <span style={spanStyle}>NFL Draft Data</span>
    </a>
  </div>
)

export default Nav;