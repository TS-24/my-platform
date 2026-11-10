import portrait from './assets/personal-website/portrait.png'
import line96 from './assets/personal-website/line-96.svg'
import line262 from './assets/personal-website/line-262.svg'
import line48 from './assets/personal-website/line-48.svg'
import line32Vertical from './assets/personal-website/line-32-vertical.svg'
import line32 from './assets/personal-website/line-32.svg'
import line56 from './assets/personal-website/line-56.svg'
import './App.css'

function App() {
  return (
    <>
      <main className="personal-card" aria-labelledby="personal-name">
        <figure className="personal-portrait">
          <div className="personal-portrait-crop">
            <img src={portrait} alt="Timothy Shin smiling in Boston" />
          </div>
          <img src={line56} alt="" className="personal-line personal-portrait-top" />
          <img src={line96} alt="" className="personal-line personal-line-vertical personal-portrait-left" />
          <img src={line96} alt="" className="personal-line personal-line-vertical personal-portrait-right" />
          <img src={line48} alt="" className="personal-line personal-portrait-bottom" />
          <img src={line32Vertical} alt="" className="personal-line personal-line-vertical personal-portrait-outer-right" />
          <img src={line32} alt="" className="personal-line personal-portrait-outer-bottom" />
          <figcaption>In Boston</figcaption>
        </figure>
        <div className="personal-details">
          <p className="personal-state">North Carolina</p>
          <p className="personal-city">Charlotte</p>
          <p className="personal-role">CS Student</p>
          <p className="personal-handle">@tshin24</p>
          <img src={line262} alt="" className="personal-line personal-line-vertical personal-details-line" />
        </div>
        <h1 id="personal-name" className="personal-name"><span>TIMOTHY</span><span>SHIN</span></h1>
        <p className="personal-college">Grove City College</p>
      </main>
    </>
  )
}

export default App
