/*
https://gitlab.com/fedora/docs/docs-website/ui-bundle
*/
'use strict'

module.exports = (editUrl, type) => {
  if (!editUrl || !type) return false
    if (type === 'issue') return editUrl.replace(/\/blob\/(\w+)\/(.*)$/, '/issues/new?title=[$1] Doc issue in file $2')
    if (type === 'history') return editUrl.replace(/\/blob\//, '/commits/')
  return false
}
