import React from 'react'
import '../styles/theme/header.scss'

const menuItems = [
  {
    name: "Home",
    link: "/home"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Who is Alistair Moffat?",
    link: "/amoffat"
  },
  {
    name: "Contribute",
    link: "/contribute"
  },
]

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
    };

    for(var repeat = 0; repeat < 3; repeat++) {
      for(var i = 0; i < menuItems.length; i++) {
        this.state.menu.push(
          <a href={menuItems[i].link} key={"item-" + repeat + i}>
            {menuItems[i].name}
          </a>);
      }
    }
    console.log(this.state.menu)
  }

  render() {
    return <div className="header">
      <h2>Algorithms are Fun! Programming is fun! Algorithms are Fun! Programming is fun! Algorithms are Fun! Programming is fun! Algorithms are Fun! Programming is fun! Algorithms are Fun! Programming is fun! Algorithms are Fun! Programming is fun!</h2>
      <h1>What is that is Fun?</h1>
      <h2>{this.state.menu}</h2>
    </div>
  }
}