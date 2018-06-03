import React from 'react'
import MainThemify from '../../themes/MainThemify'
import Spanify from '../../helpers/Spanify'

class Main extends React.Component {
  render() {
    return <div className="home justify-p">
      <img src="/static/mofface/2017.jpg" alt="" style={{
        maxHeight: "400px"
      }}/>
      <p className="img-desc">*srs faec*</p>

      <h1>The Fan Page needs Your Cuntribution!</h1>
      <p>This new page is setup for students to encourage students to contribute to
        open-source software. This can be simply providing ideas, content (memes are welcome), or 
        developing a requested feature to show off your front-end development 133t skills.</p>
      <p>Alistair is watching you, contribute now on <a href="https://github.com/bermuda-ut/algorithms-are-fun">Github</a>!</p>

      <hr/>

      <h1>Legendary Moffchivements</h1>

      <img src="/static/mofface/1998.jpg" alt="" style={{
        maxHeight: "400px"
      }}/>
      <p className="img-desc">Very seductive</p>

      <p>Here are some of Alistair's legendary work that is fairly unknown to the world:</p>

      <div className="card">
        <h1>O(1) Moffat Sort</h1>

        <div className="content">

          <p>Legend says, Moffat Sort developed by Alistair Moffat himself only takes O(1)
            complexity. Here is the pseudo code:</p>

          <div className="code">
            {
              Spanify([
                "func MoffSort(list)",
                "\tStudyAlgorithms(list)",
                "\tAttendAlistairLectures(list)",
                "\tAddASCIIartInProjects(list)",
                "\tDrawThomasDankEngineInExams(list)",
                "\tContributeToWebsite(list)",
                "\tanswer(list[42])",
              ])
            }
          </div>
        </div>
      </div>
    </div>
  }
}

export default MainThemify(Main);