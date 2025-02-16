import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Mahjoubi Bilel",
  },
  {
    label: "Age",
    value: "39",
  },
  {
    label: "Address",
    value: "Tunisia",
  },
  {
    label: "Email",
    value: "mahjoubi.bilel@gmail.com",
  },
  {
    label: "Contact No",
    value: "22917226",
  },
];

const jobSummary = "Développeur Front End expérimenté et indépendant avec 5 ans d'expérience dans le mélange de l'art du design et des compétences de programmation pour offrir une expérience utilisateur immersive et engageante à travers le développement efficace de sites web, l'optimisation proactive des fonctionnalités, et le débogage sans relâche. Très passionné par l'esthétique et le design de l'interface utilisateur. Il est impératif que votre CV soit complet et professionnel. En tant que développeur Front End, vous serez jugé sur votre capacité à utiliser les concepts UX et UI et à suivre les directives de conception. Il s'agit d'exprimer votre souci du détail et la façon dont vous pouvez aider à mettre en œuvre des idées de conception pour votre futur employeur.";


export default function About() {
  return (
    <section id='about' className='about'>
      <PageHeaderContent headerText='à propos de moi'
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>

    </section>
  )
}
