import { useEffect, useRef } from 'react'
import portrait from './assets/personal-website/portrait.png'
import line96 from './assets/personal-website/line-96.svg'
import line262 from './assets/personal-website/line-262.svg'
import line48 from './assets/personal-website/line-48.svg'
import line32Vertical from './assets/personal-website/line-32-vertical.svg'
import line32 from './assets/personal-website/line-32.svg'
import line56 from './assets/personal-website/line-56.svg'
import './App.css'

function App() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scene = sceneRef.current
    const content = contentRef.current
    if (!scene || !content) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const update = () => {
      frame = 0
      const scroll = Math.max(0, -scene.getBoundingClientRect().top / window.innerHeight)
      const progress = reducedMotion.matches ? 0 : Math.min(1, scroll)
      const projectsProgress = reducedMotion.matches ? 0 : Math.min(1, Math.max(0, scroll - 1))
      scene.style.setProperty('--scroll-progress', String(progress))
      scene.style.setProperty('--projects-progress', String(projectsProgress))
      scene.querySelectorAll('[data-profile-content]').forEach(element => {
        element.setAttribute('aria-hidden', String(!reducedMotion.matches && projectsProgress >= 0.5))
      })
      scene.querySelectorAll('[data-project-content]').forEach(element => {
        const hidden = !reducedMotion.matches && projectsProgress < 0.5
        element.setAttribute('aria-hidden', String(hidden))
        if (element.matches('.projects-section')) element.toggleAttribute('inert', hidden)
      })
      const card = scene.querySelector('main')
      const bar = scene.querySelector('.personal-details-line')
      if (card && bar) {
        scene.style.setProperty('--projects-heading-top', `${bar.getBoundingClientRect().top - card.getBoundingClientRect().top}px`)
      }
      card?.setAttribute('aria-labelledby',
        projectsProgress >= 0.5 ? 'projects-heading' : 'personal-name')
    }
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    const measure = () => {
      scene.style.setProperty('--card-width', `${content.offsetWidth}px`)
      scene.style.setProperty('--card-height', `${content.offsetHeight}px`)
      const scale = Math.min(
        scene.clientWidth / content.offsetWidth,
        Math.max(window.innerHeight, content.offsetHeight + 48) / content.offsetHeight,
      )
      scene.style.setProperty('--content-growth', String(Math.max(0, scale - 1)))
      scheduleUpdate()
    }
    const observer = new ResizeObserver(measure)
    observer.observe(content)
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', measure)
    reducedMotion.addEventListener('change', scheduleUpdate)
    measure()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', measure)
      reducedMotion.removeEventListener('change', scheduleUpdate)
      window.cancelAnimationFrame(frame)
    }
  }, [])
  return (
    <div className="personal-scroll" ref={sceneRef}>
      <div className="personal-stage">
        <div className="personal-background" aria-hidden="true">
          <p className="personal-background-top">CharlotteNorthClar</p>
          <div className="personal-background-bottom">
            <p className="personal-state">North Carolina</p>
            <p className="personal-city">Charlotte</p>
            <p className="personal-role">CS Student</p>
            <p className="personal-handle">@tshin24</p>
          </div>
        </div>
        <main className="personal-card" aria-labelledby="personal-name">
          <div className="personal-card-content" ref={contentRef}>
            <figure className="personal-portrait" data-profile-content>
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
              <div className="personal-details-copy" data-profile-content>
                <p className="personal-state">North Carolina</p>
                <p className="personal-city">Charlotte</p>
                <p className="personal-role">CS Student</p>
                <p className="personal-handle">@tshin24</p>
              </div>
              <div className="projects-details" data-project-content aria-hidden="true">
                <p className="personal-state" data-project="senior">Senior Project</p>
                <p className="personal-city" data-project="restyle">ReStyle</p>
                <p className="personal-role" data-project="folio">Folio</p>
                <p className="personal-role">*</p>
              </div>
              <img src={line262} alt="" className="personal-line personal-line-vertical personal-details-line" />
            </div>
            <h1 id="personal-name" className="personal-name" data-profile-content><span>TIMOTHY</span><span>SHIN</span></h1>
            <p className="personal-college">Grove City College</p>
          </div>
          <section className="projects-section" data-project-content aria-hidden="true" inert aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="projects-heading">PROJECTS</h2>
            <div className="project-previews">
              <figure className="project-preview" data-project="senior" tabIndex={0}>
                <div className="project-visual senior-visual" aria-hidden="true">
                  <div className="senior-box"><span /></div>
                </div>
                <figcaption>Senior Project</figcaption>
              </figure>
              <figure className="project-preview" data-project="restyle" tabIndex={0}>
                <div className="project-visual restyle-visual" aria-hidden="true">
                  {Array.from({ length: 9 }, (_, index) => <span key={index} />)}
                </div>
                <figcaption>ReStyle</figcaption>
              </figure>
              <figure className="project-preview" data-project="folio" tabIndex={0}>
                <div className="project-visual folio-visual" aria-hidden="true">
                  {Array.from({ length: 8 }, (_, index) => <span className="folio-streak" key={index} />)}
                </div>
                <figcaption>Folio</figcaption>
              </figure>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
