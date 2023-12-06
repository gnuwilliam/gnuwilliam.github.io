import { SocialIcon } from 'react-social-icons'

import './home.css'

import Header from './header'
import Nav from './nav'

import workRemote from './assets/work-remote.svg'

export default function Home() {
  return (
    <div className="home page">
      <Header />
      <Nav />
      <div className="content">
        <p>
          👋 hello! I&apos;m william, a frontend engineer based in Brazil 🇧🇷
          welcome to my personal website
        </p>

        <p>🔗 you can find me on:</p>

        <div className="social">
          <SocialIcon url="https://www.linkedin.com/in/aboutwilliam/" />
          <SocialIcon url="https://github.com/gnuwilliam" />
          <SocialIcon url="https://twitter.com/williamolv42" />
        </div>
      </div>

      <img src={workRemote} />
    </div>
  )
}
