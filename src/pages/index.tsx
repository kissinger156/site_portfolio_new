import { Player } from '@lottiefiles/react-lottie-player'
import Head from 'next/head'
import React, { useEffect } from 'react'
import GitIcon from '../assets/vector/github.svg'
import InstagramIcon from '../assets/vector/instagram1.svg'
import LinkedinIcon from '../assets/vector/linkedin.svg'
import MailIcon from '../assets/vector/mail1.svg'
import WhatsIcon from '../assets/vector/whatsapp.svg'
import { Button } from '../components/Button'
import { Container, FirstSection } from '../styles/pages/Home'
import BoyCoding from '../assets/json/boy-coding.json'

import Typewriter from 'typewriter-effect/dist/core'
import { ButtonCustom } from '../components/Button/style'

const Home: React.FC = () => {
  useEffect(() => {
    const typing = document.getElementById('typing')

    const typewriter = new Typewriter(typing, { loop: true })

    typewriter
      .typeString('Dev. React JS')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Dev. Node JS')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Dev. Next JS')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Youtuber')
      .pauseFor(1000)
      .deleteAll()
      .start()
  }, [])
  return (
    <>
      <Head>
        <title>Olá!</title>
      </Head>

      <Container>
        <FirstSection>
          <h2>Prazer, eu sou o Carlos</h2>
          <h1 id="typing"></h1>
          <ButtonCustom href="/about">Mais sobre mim</ButtonCustom>
          <div className="social-networks">
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="mailto:severo.e.carlos@gmail.com?subject=Olá Carlos&body=Escreva sua mensagem aqui ou abaixo"
            >
              <MailIcon />
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/kissinger156"
            >
              <GitIcon />
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.linkedin.com/in/carlos-severo-634271162/"
            >
              <LinkedinIcon />
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5515996605712&text=Ol%C3%A1%20Carlos%2C%20vim%20pelo%20seu%20site!"
            >
              <WhatsIcon />
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.instagram.com/carlosedu156/"
            >
              <InstagramIcon />
            </a>
          </div>
        </FirstSection>
        <Player
          src={BoyCoding}
          autoplay
          loop
          style={{ height: '450px', width: '450px' }}
          className="main-gif"
        />
      </Container>
    </>
  )
}

export default Home
