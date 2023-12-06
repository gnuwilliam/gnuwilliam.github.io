import Header from './header'
import Nav from './nav'

export default function Home() {
  return (
    <div className="about page">
      <Header />
      <Nav />
      <div className="content">
        <p>
          🚀 With over a decade of experience in Web Development, I specialize
          in JavaScript/TypeScript and the React ecosystem, including Next.js.
        </p>

        <p>
          💻 My expertise extends to various technologies, including Ruby
          (Rails), Meteor, PHP (WordPress and Laravel), and Python (Django).
          I&apos;ve not only developed open source projects showcasing
          JavaScript&apos;s best practices but also contributed to numerous
          other projects.
        </p>

        <p>
          🔗 Check out a glimpse of my open source contributions on{' '}
          <a href="https://github.com/braziljs/js-the-right-way">
            JavaScript: The Right Way
          </a>
          . This project, featured in Smashing Magazine&apos;s Newsletter,
          compiles the finest JavaScript resources from across the web.
        </p>

        <p>
          📚 JS: The Right Way was recognized as one of the best JavaScript
          Resources by{' '}
          <a href="https://jsbooks.revolunet.com">jsbooks.revolunet.com</a>.
        </p>

        <p>
          🛠️ My hands-on experience includes shaping the frontend of major
          commercial products. Notably, I contributed significantly to Dafiti,
          one of Brazil&apos;s largest e-commerce stores, during its early days.
          Additionally, I played a pivotal role in building VitalBox, a
          prominent health platform.
        </p>

        <p>
          🔧 Furthermore, I led the migration of the widely-known Brazilian news
          portal, Virgula, from PHP to Python (Django), overseeing the
          development of its frontend.
        </p>

        <p>
          Let&apos;s connect and explore how my skills can contribute to your
          team&apos;s success!
        </p>
      </div>
    </div>
  )
}
