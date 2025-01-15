;(function (w, d) {
  'use strict'
  w.addEventListener('load', (e) => {
    var codeBlocks = d.getElementsByClassName('highlightjs')
    for (const block of codeBlocks) {
      if (block.firstChild.className.includes('language-none')) { continue }
      const code = block.firstChild
      const table = document.createElement('tbody')
      const tr = document.createElement('tr')
      table.appendChild(tr)
      const tdNums = document.createElement('td')
      tdNums.setAttribute('class', 'source nums')
      tr.appendChild(tdNums)
      const numCol = document.createElement('code')
      numCol.setAttribute('class', 'linenums')
      for (let i = 1; i <= code.innerHTML.split('\n').length; i++) {
        const numColEntry = document.createElement('span')
        numColEntry.setAttribute('class', 'hljs-linenum')
        numColEntry.innerText = i + '\n'
        numCol.appendChild(numColEntry)
      }
      tdNums.appendChild(numCol)
      const tdCode = document.createElement('td')
      tdCode.appendChild(code)
      tdCode.setAttribute('class', 'source lines')
      tr.appendChild(tdCode)
      block.appendChild(table)
    }
  })
}(window, document))

// ;(function (w, d) {
//   'use strict';
//   w.addEventListener('load', (e) => {
//     var codeBlocks = d.getElementsByClassName('highlightjs')
//     const spacer = '   '
//     for (let block of codeBlocks) {
//       if (block.firstChild.className.includes('language-none')) {continue}
//       const code = block.firstChild
//       let i = 1
//       const newHTML = []
//       for (let line of code.innerHTML.split('\n')) {
//         var numColEntry = document.createElement('span')
//         numColEntry.setAttribute('class','hljs-linenum')
//         numColEntry.innerText = i
//         newHTML.push(numColEntry.outerHTML + spacer + line)
//         numColEntry.remove()
//         i++
//       }
//       code.innerHTML = newHTML.join('\n')
//     }
//   })
// }(window, document));
