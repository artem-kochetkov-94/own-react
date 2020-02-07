import OwnReact from '../src'
import Component from '../src/Component'

export default class List extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        {this.props.children}
      </ul>
    )
  }
}