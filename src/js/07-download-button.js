const downloadButton = document.getElementById('downloadButton')
const url = window.location.href
const lastIndex = url.lastIndexOf('/')
const newUrl = url.substring(0, lastIndex)

if (url.includes('IDTA-01001')) {
  downloadButton.addEventListener('click', function () {
    window.location.href = newUrl + '/part-1-metamodel.pdf'
  })
} else if (url.includes('IDTA-01002-3')) {
  downloadButton.addEventListener('click', function () {
    window.location.href = newUrl + '/part-2-api.pdf'
  })
} else if (url.includes('IDTA-01003-a')) {
  downloadButton.addEventListener('click', function () {
    window.location.href = newUrl + '/part-3a-data-specification-iec61360'
  })
} else if (url.includes('IDTA-01005')) {
  downloadButton.addEventListener('click', function () {
    window.location.href = newUrl + '/part-5-aasx-package-format.pdf'
  })
} else if (url.includes('home')) {
  downloadButton.addEventListener('click', function () {
    window.location.href = newUrl + '/specification-of-the-asset-administration-shell.pdf'
  })
}
