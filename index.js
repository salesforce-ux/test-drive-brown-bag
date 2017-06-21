const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./components/App')
const api = require('./api')

ReactDOM.render(<App api={api} />, document.querySelector('#react-target'))
