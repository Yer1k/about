import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/addons.cjs';

// Components
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

// Elements
import Inner from '../elements/Inner';
import { Title, BigTitle, Subtitle } from '../elements/Titles';

// Views
import Hero from '../views/Hero';
import Projects from '../views/Projects';
import About from '../views/About';
import Contact from '../views/Contact';

import avatar from '../images/avatar.jpg';

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero>
        <BigTitle>
          Hello, <br /> I'm Dingkun.
        </BigTitle>
        <Subtitle>
          Data scientist, soccer referee, founder, content creator, runner and
          photographer.
        </Subtitle>
      </Hero>
      <Projects>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Running Page"
            link="https://github.com/Yer1k/running_page"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Running page to tracking my running data
          </ProjectCard>
          <ProjectCard
            title="Emotion-Conditioned Music Generation with Transformer GANs"
            link="https://github.com/Yer1k/music_gen_gan"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Generate music conditioned on emotion using GANs
          </ProjectCard>
          <ProjectCard
            title="EHR Data Analysis Tools"
            link="https://github.com/Yer1k/EHR_Utils"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Tools for EHR data analysis
          </ProjectCard>
          <ProjectCard
            title="More"
            link="https://github.com/Yer1k?tab=repositories"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            More open source projects in my GitHub.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Yer1k" />
          <AboutSub>
            Full-time Learner, good at data visualization and data science,
            creating some fun and useful tools or tiny projects to please
            myself.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I’m a data scientist with more than five years working
          experience. Now I focus on the Cloud Computing and Data Visualization on
          big data. What I'm interested in are connecting the dots of what I
          have learned through my life journey, and I'm always looking for
          opportunities to learn and grow.
        </AboutDesc>
      </About>
      <Contact>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:yer1k@outlook.com">Hi</a> or find me on other
            platforms: <a href="https://github.com/yer1k">GitHub</a> &{' '}
            <a href="https://www.instagram.com/yer1k">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2024 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
            Github Repository
          </a>
          . Made by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;