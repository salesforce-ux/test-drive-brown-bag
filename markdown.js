const italic = text =>
  text.replace(/_(.*?)_/ig, '<em>$1</em>')

const heading = text =>
  text.replace(/\#(\w+)/ig, '<h1>$1</h1>')

const rules = [italic, heading]

module.exports = text =>
  rules.reduce((result, rule) =>
    rule(result), text)
