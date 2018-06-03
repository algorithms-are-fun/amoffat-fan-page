import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/theme/maintheme.scss'

export default function MainThemify(Content) {
  return class extends React.Component {
    render() {
      return <div>
        <div className="headerwrapper">
          <Header/>
        </div>
          <div className="container">
            <Content/>
          </div>
        <Footer/>
      </div>
    }
  }
}