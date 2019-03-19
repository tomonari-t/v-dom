// ref: https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060
/**
 * v-dom
 */

function h(type, props, ...children) {
  return { type, props, children }
}

function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node)
  }

  const $el = document.createElement(node.type)
  node.children.map(createElement).forEach($childEl => {
    $el.appendChild($childEl)
  })
  return $el
}

/** @jsx h */
window.onload= () => {
  const hoo = (
    <ul className="jjjj">
     <li>item 1</li>
     <li>item 2</li>
    </ul>
  )

  const $root = document.getElementById('root')
  console.log($root)
  $root.appendChild(createElement(hoo))
}