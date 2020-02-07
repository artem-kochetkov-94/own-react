import reconcile from './reconcile'
import parseChildren from './parseChildren'

let rootInstance = null

export default class OwnReact {
  /** @jsx createElement */
  static createElement(type, props, ...children) {
    const resultProps = {
      ...props
    }

    if (children.length) {
      const copyChildren = [].concat(...children)
      resultProps.children = parseChildren(copyChildren)
    }

    return {
      type,
      props: resultProps
    }
  }

  static renderToString() {}
  
  static render(element, container) {
    const prevInstance = rootInstance
    const nextInstance = reconcile(container, prevInstance, element)
    rootInstance = nextInstance
  }
}