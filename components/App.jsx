const React = require('react')
const Markdown = require('../markdown')

class App extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  getMarkdown() {
    return this.props.api.getContent()
  }

  render() {
    return (
      <div>
        <button onClick={ () =>
          this.getMarkdown().then(m =>
            this.setState({text: Markdown(m)})
          )
        }>Click me</button>
        <span>{this.state.text}</span>
      </div>
    )
  }
}

module.exports = App
