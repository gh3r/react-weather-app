var React = require('react');
var Header = require('./Header');
var Home = require('./Home');

function App() {
  return (
    <div className='container'>
      <Header />
      <Home />
    </div>
  )
};

module.exports = App;
