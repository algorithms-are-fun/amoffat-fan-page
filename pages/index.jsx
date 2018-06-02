import React from 'react'
import '../styles/index/index.scss'
import '../styles/index/speech.scss'
import Quotes from '../helpers/MoffatQuotes.jsx'
import Titles from '../helpers/MoffatTitles.jsx'

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    let idx = Math.floor(Math.random() * Quotes.length);
    let idx2 = Math.floor(Math.random() * Titles.length);
    this.state = {
      phrase: Quotes[idx],
      moffat: Titles[idx2]
    }
  }

  render() {
    return <div className="landing">
      <div className="title">
        <h1>ALGORITHMS ARE FUN</h1>
        <h2>Lord Alistair has blessed us with Algorithms and Programming</h2>
      </div>

        <div className="moffsay">
          <a href="/home">
              <img src="/static/mofface/1999.jpg" alt=""/>

              <div className="talk-bubble tri-right left-in">
                <div className="talktext">
                  <h2>{this.state.phrase}</h2>
                </div>
              </div>

              <h3>Click {this.state.moffat} to continue</h3>
          </a>
        </div>
    </div>
  }
}