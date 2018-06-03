import React from 'react'
import MainThemify from '../../themes/MainThemify'
import Spanify from '../../helpers/Spanify'

class Main extends React.Component {
  render() {
    return <div className="contribute">
      <h1>Submit your Memes, Quotes, Moffat-Moments.. Or something special ;)</h1>

      <p>
        The fan page is aimed to be fun open-source website where anybody can contribute.
        The main aim of the website was to provide an easy project for students to work together
        in, and building habit into contributing in open-source software.
      </p>

      <p>
        You have all the freedom - you can suggest good ideas or just implement wanted features
        to show off your front-end development skills.
      </p>

      <p>
        Contribute now on <a href="https://github.com/algorithms-are-fun/amoffat-fan-page">Github</a>!
      </p>

      <img src="/static/mofface/2012.jpg" alt="" style={{
        height: "400px"
      }}/>
      <p style={{textAlign:"center"}}>Alistair is Watching you.. What would you do?</p>
    </div>
  }
}

export default MainThemify(Main);