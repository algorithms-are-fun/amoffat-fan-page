import React from 'react'
import '../styles/theme/footer.scss'

export default class extends React.Component {
  render() {
    return <div className="footer">
      <h3>ALISTAIR MOFFAT FAN PAGE</h3>
      <p>Start contributing today on <a href="https://github.com/algorithms-are-fun/amoffat-fan-page">Github</a>!</p>
      <p>Created by Max Lee, maintained by his students with ♥</p>
    </div>
  }
}