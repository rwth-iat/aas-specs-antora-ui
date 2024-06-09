const downloadButton = document.getElementById('downloadButton')
const url = window.location.href
const lastIndex = url.lastIndexOf('/')
const newUrl = url.substring(0, lastIndex)

var titleContent = document.querySelector('h3.title').textContent
const fileName = titleContent.toLowerCase().replace(/[\(\):\-\[\]\{\}]/g, '').replace(/\s+/g, ' ').replace(/\s/g, '-') + '.pdf'

downloadButton.addEventListener('click', function () {
  window.location.href = newUrl + '/' + fileName
})
