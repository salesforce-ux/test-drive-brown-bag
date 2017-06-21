const React = require('react')
const App = require('../../components/App')
const {mount} = require('enzyme')

const fakeApi = {
  getContent: () =>
    Promise.resolve('I am _fake_')
}

describe('App', () => {
  it('shows the marked down text after click', done => {
    const app = mount(<App api={fakeApi} />)
    app.find('button').simulate('click')
    setTimeout(() => {
      expect(app.find('span').text()).toEqual('I am <em>fake</em>')
      done()
    }, 200)
  })
})
