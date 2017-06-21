module.exports = {
  getContent: () =>
    fetch('/content.md')
    .then(p => p.text())
}
