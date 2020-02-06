import reconcile from './reconcile'
import parseChildren from './parseChildren'
import Component from './Component'

let rootInstance = null

class OwnReact {
  /** @jsx createElement */
  static createElement(...args) {
    const [type, props, ...children] = args
    
    if (typeof type == 'function') {
      // const component = new type(props).render()

      // const componentProps = {
      //   ...props,
      //   ...component.props,
      //   children: [
      //     ...props.children || [],
      //     ...component.props.children || []
      //   ]
      // };

      // if (component.props.children.length) {
      //   componentProps.children = [
      //     ...componentProps.children,
      //     ...parseChildren(component.props.children)
      //   ];
      // }

      // return {
      //   type,
      //   props: componentProps
      // }
    }

    const resultProps = {
      ...props
    }

    if (children.length) {
      resultProps.children = parseChildren(children)
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

export default OwnReact






/**
 * test
 */

class TestClass extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      value: 1
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  render() {
    const { value } = this.state

    return (
      OwnReact.createElement(
        'span',
        { onClick: this.clickHandler, ...this.state, ...this.props },
        `TestClass ${value} ${this.props.propTestClass}`
      )
    )
  }

  clickHandler() {
    this.setState({
      value: 2
    })
  }
}

const rootDom = document.getElementById("root")
const parentElement = OwnReact.createElement(
  "p",
  null,
  OwnReact.createElement(TestClass, { propTestClass: "propTestClass" })
)

OwnReact.render(parentElement, rootDom)