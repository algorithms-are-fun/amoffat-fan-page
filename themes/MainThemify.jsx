import React from 'react'
import Header from './header'
import Footer from './footer'
import "../styles/master.scss"
import '../styles/theme/maintheme.scss'

export default function MainThemify(Content) {
  return class extends React.Component {
    render() {
      return <div>
        <div className="headerwrapper">
          <Header/>
        </div>
          <div className="main-container">
            <Content/>
          </div>
        <Footer/>
      </div>
    }
  }
}