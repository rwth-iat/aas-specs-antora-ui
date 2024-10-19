/*
From the Merge Request
https://gitlab.com/antora/antora-ui-default/-/merge_requests/126/
By Alexander Schwartz
https://gitlab.com/ahus1
*/

;(function () {
  'use strict'
  var lightbox
  var config = (document.getElementById('site-script') || { dataset: {} }).dataset
  var content

  function init () {
    if (!lightbox) {
      lightbox = document.createElement('div')
      lightbox.setAttribute('aria-modal', 'true')
      lightbox.className = 'modal'
      
      var closeLink = document.createElement('button');
      closeLink.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      closeLink.style.position = 'absolute';
      closeLink.style.top = '25px';
      closeLink.style.right = '25px';
      closeLink.style.zIndex = '1000';
      closeLink.href = '#'
      
      lightbox.appendChild(closeLink)
      
      content = document.createElement('div')
      content.className = 'content'
      lightbox.appendChild(content)


      var body = document.getElementsByTagName('body')[0]
      body.appendChild(lightbox)
      body.addEventListener('keydown', function (e) {
        if (e.code === 'Escape' && isOpen()) {
          close(e)
        }
      })

      content.addEventListener('click', close)
      closeLink.addEventListener('click', function (e) {
        close(e)
        e.preventDefault()
      })
      closeLink.addEventListener('keydown', function (e) {
        if (e.code === 'Space' || e.code === 'Enter') {
          close(e)
          e.preventDefault()
        }
      })
    }
  }

  function open () {
    lightbox.style.display = 'block'
  }

  function isOpen () {
    return lightbox && lightbox.style.display === 'block'
  }

  function close (e) {
    lightbox.style.display = 'none'
    content.firstChild.remove()
    // don't prevent default here, as that will allow links in SVGs to work
  }

  // depending on ratio of source vs target element, make the lightbox content 90% of height or width
  function setImageSize (img, source, target) {
    var ratioSource = source.offsetWidth / source.offsetHeight
    var ratioTarget = target.offsetWidth / target.offsetHeight
    if (ratioSource < ratioTarget) {
      img.style.height = '50vh'
    } else {
      img.style.width = '50vw'
    }
  }

  document.querySelectorAll('.imageblock img').forEach(function (element) {
    if (element.parentNode.nodeName === 'A') {
      // if parent node is an anchor, keep the anchor instead of opening lightbox
      return
    }
    element.parentNode.className += ' lightbox'
    if (typeof element.parentNode.classList.remove === 'function') {
      element.parentNode.addEventListener('mouseover', function (e) {
        if (element.naturalWidth <= element.offsetWidth && element.naturalHeight <= element.offsetHeight) {
          element.parentNode.classList.remove('lightbox')
        } else {
          element.parentNode.classList.add('lightbox')
        }
      })
    }
    element.addEventListener('click', function (e) {
      //if (element.naturalWidth <= element.offsetWidth && element.naturalHeight <= element.offsetHeight) {
      //  // don't open lightbox is already shown at 100% or more
      //  return
      //}
      init()
      var img = document.createElement('img')
      img.src = e.currentTarget.src
      img.alt = e.currentTarget.alt
      setImageSize(img, element.parentNode, content.parentNode)
      content.appendChild(img)
      open()
    })
  })

  document.querySelectorAll('.imageblock object').forEach(function (element) {
    if (element.parentNode.nodeName === 'A') {
      // if parent node is an anchor, keep the anchor instead of opening lightbox
      return
    }
    element.parentNode.className += ' lightbox'
    element.parentNode.addEventListener('click', function (e) {
      init()
      var img = document.createElement('object')
      img.type = element.type
      img.data = element.data
      open()
      setImageSize(img, element, content.parentNode)
      if (element.getSVGDocument() && element.getSVGDocument().querySelectorAll('a').length === 0) {
        // if the SVG doesn't contain any links, allow user to click on image to close the image
        img.style.pointerEvents = 'none'
      }
      content.appendChild(img)
      // prevent links in SVGs to open, as this should only open the lightbox
      e.preventDefault()
    })
  })
  document.querySelectorAll('.imageblock svg').forEach(function (element) {
    if (element.parentNode.nodeName === 'A') {
      // if parent node is an anchor, keep the anchor instead of opening lightbox
      return
    }
    element.parentNode.className += ' lightbox'
    element.parentNode.addEventListener('click', function (e) {
      init()
      var img = element.cloneNode(true)
      open()
      // override height/width from cloned element
      img.style.height = 'auto'
      img.style.width = 'auto'
      // need to select element's parent node, as offsetWidth/offsetHeight not available on SVG
      setImageSize(img, element.parentNode, content.parentNode)
      content.appendChild(img)
     
      // prevent links in SVGs to open, as this should only open the lightbox
      e.preventDefault()
    })
  })
})()
