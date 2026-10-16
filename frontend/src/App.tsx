import './App.css'
import portrait from './assets/timothy-shin-waterfront-selfie.jpg'

function App() {
  return (
    <main className="profile">
      <div className="profile-intro">
        <h1>Timothy Shin</h1>
        <p>I"m a student currently studying Computer Science at Grove City College. </p>
      </div>
      <img src={portrait} alt="Timothy Shin at the waterfront at dusk" width={300} />
    </main>
  )
}

export default App
