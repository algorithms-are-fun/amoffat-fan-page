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
  }

  componentDidMount() {
    var menu = [];

    for(var repeat = 0; repeat < 3; repeat++) {
      for(var i = 0; i < menuItems.length; i++) {
        var cls = "";

        if(window.location.pathname.indexOf(menuItems[i].link) == 0) {
          cls = "active"
        }

        menu.push(
          <a className={cls} href={menuItems[i].link} key={"item-" + repeat + i}>
            {menuItems[i].name}
          </a>);
      }
    }

    this.setState({menu: menu});
  }

  render() {
    return <div className="header">
      <h2>Algorithms are Fun! Programming is fun! Algorithms are Fun! Programming is fun! Algorithms are Fun! Programming is fun! Algorithms are Fun! Programming is fun! Algorithms are Fun! Programming is fun! Algorithms are Fun! Programming is fun!</h2>
      <h1>What is that is Fun?</h1>
      <h2>{this.state.menu}</h2>
    </div>
  }
}