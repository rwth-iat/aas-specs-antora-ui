function truncateUrl(url) {
    const protocolEndIndex = url.indexOf('://');
    if (protocolEndIndex === -1) {
        return url;
    }
    const protocol = url.substring(0, protocolEndIndex + 3);
    const restOfUrl = url.substring(protocolEndIndex + 3);
    const segments = restOfUrl.split('/').filter(segment => segment.length > 0);
        if (segments.length >= 4) {
        return protocol + segments.slice(0, 4).join('/');
    } else {
        return url;
    }
}
const downloadButton = document.getElementById('downloadButton')
const url = window.location.href
const newUrl = truncateUrl(url)
var titleContent = document.querySelector('h3.title').textContent
const fileName = titleContent.toLowerCase().replace(/[\(\):\-\[\]\{\}&]/g, '').replace(/\s+/g, ' ').replace(/\s/g, '-') + '.pdf';
downloadButton.addEventListener('click', function () {
  window.location.href = newUrl + '/' + fileName
})
