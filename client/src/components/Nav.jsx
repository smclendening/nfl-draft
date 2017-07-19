import React from 'react';

const navStyle = {
  marginBottom: '0',
  borderRadius: '0',
  height: '52px',
  background: '#002347'
};

const spanStyle = {
  color: 'white',
  textAlign: 'center',
  verticalAlign: 'middle'
}

const Nav = () => (
  <div id="navbar" className="ui fixed menu" style={navStyle}>
    <p style={spanStyle}>
      NFL Draft Data
    </p>
  </div>
)

export default Nav;