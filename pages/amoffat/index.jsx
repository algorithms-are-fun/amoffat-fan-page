import React from 'react'
import MainThemify from '../../themes/MainThemify'
import Spanify from '../../helpers/Spanify'
import '../../styles/amoffat.scss'

class Main extends React.Component {
  render() {
    return <div className="about">
      <div className="profile row">
        <div className="pic col-md-6">
          <img src="/static/mofface/2004.jpg" alt=""/>
          <p className="img-desc">Moffat.smile()</p>
        </div>
        <div className="details col-md-6">
          <h2>Sir Lord Master</h2>
          <h1>Alistair Moffat</h1>
          <h3>Meme at the University of Melbourne</h3>
          <hr/>
          <p><a href="https://people.eng.unimelb.edu.au/ammoffat/">UniMelb Profile</a></p>
        </div>
      </div>

      <div className="hidden">
        <h1>Bibles</h1>
        <p>Collect them all if you truly love him. I surely don't.</p>
        <div className="row">
          <div className="book col-md-6">
            <img src="/static/moffbook/bible.jpg" alt=""/>
            <p>Programming, Problem Solving, and Abstraction with C</p>
          </div>

          <div className="book col-md-6">
            <img src="/static/moffbook/compression.jpg" alt=""/>
            <p>Compression and Coding Algorithms</p>
          </div>

          <div className="book col-md-6">
            <img src="/static/moffbook/giga.jpg" alt=""/>
            <p>Managing Gigabytes</p>
          </div>
        </div>
      </div>

      <h1>Teaching</h1>
      <div className="subject">
        <p>COMP10002 Foundations of Algorithms</p>
      </div>
      <div className="subject">
        <p>COMP20005 Engineering Computation</p>
      </div>
    </div>
  }
}

export default MainThemify(Main);