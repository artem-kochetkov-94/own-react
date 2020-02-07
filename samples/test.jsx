import OwnReact from '../src'
import Component from '../src/Component'
import List from './list.jsx'
import ListItem from './list-item.jsx'

export default class Test extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <List>
        {this.props.alphabet.map(letter => <ListItem>{letter}</ListItem>)}
      </List>
    )
  }
}