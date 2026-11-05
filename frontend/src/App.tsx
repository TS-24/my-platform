import './App.css'
import portrait from './assets/timothy-shin-waterfront-selfie.jpg'

type ReportKind = "bug" | "feature";

type Report = {
  id : string;
  text : string;
  kind: ReportKind;
};

function App() {

   const sampleReport: Report = {
      id: "1",
      text: "fix the nav bar",
      kind: "bug"
   }

  return (
    <main className="profile">
      <div className="profile-intro">
        <h1>Timothy Shin</h1>
        <p>I"m a student currently studying Computer Science at Grove City College. </p>
      </div>
      
      <img src={portrait} alt="Timothy Shin at the waterfront at dusk" width={300} />
      <table>
        <section>
          <h2>Bugs & Feature Reqeusts</h2>
          <p>
            {sampleReport.text}
            {sampleReport.kind}
          </p>
        </section>
        
      </table>
    </main>
  )
}

export default App
