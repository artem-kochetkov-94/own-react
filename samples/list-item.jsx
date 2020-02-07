import OwnReact from '../src'
import Component from '../src/Component'

export default class ListItem extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return <li>{this.props.children}</li>
  }
}