import React from "react"

class counter extends React.Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <div className="counter">
        <h3>click the button if you like the post</h3>
        <h3>likes {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click me
        </button>
      </div>
    )
  }
}

export default counter
