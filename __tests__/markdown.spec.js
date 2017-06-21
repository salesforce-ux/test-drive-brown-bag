const markdown = require('../markdown')

describe('Markdown', () => {
  describe('italic', () => {
    it('makes italic things italic', () => {
      const md = 'i _am_ italic!'
      const result = markdown(md)
      expect(result).toEqual('i <em>am</em> italic!')
    })
  })

  describe('headings', () => {
    it('makes headings with #', () => {
      const md = '#Pound'
      const result = markdown(md)
      expect(result).toEqual('<h1>Pound</h1>')
    })
  })
})
