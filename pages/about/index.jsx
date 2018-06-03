import React from 'react'
import MainThemify from '../../themes/MainThemify'
import Spanify from '../../helpers/Spanify'

class Main extends React.Component {
  render() {
    return <div className="about">
      <h1>This Website</h1>

      <p>
        Computer Science students and alumni of University of Melbourne have joined
        together to deliever to the world how amazing Alistair Moffat is as a lecturer.
      </p>

      <p>Take a moment to appriciate Alistair Moffat's paper-holding skills:</p>
      <img src="/static/mofface/2001.jpg" alt="" style={{height:'400px'}}/>

      <p>
        Initially, a fanpage existed under a different domain and maintained by someone
        else. However, now that webpage has become deprecated, Max Lee took charge and
        decided to create one himself.
      </p>

      <p>
        Now this new fan website is open-source and encourages collaborative development from
        students and alumni around the world.
      </p>
    </div>
  }
}

export default MainThemify(Main);