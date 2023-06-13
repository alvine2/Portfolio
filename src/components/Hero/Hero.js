import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My portfolio! I'm Kinyera Alvine, a skilled and enthusiastic software engineer with a strong foundation in computer science.I am well-versed in front-end and back-end development, database management, and software architecture.
        
        </SectionTitle>
        <SectionText>
        I value collaboration and enjoy working in teams to tackle complex challenges. My strong analytical and problem-solving skills enable me to approach projects with a strategic mindset and deliver innovative solutions.
        Take a look around and explore the projects I have worked on. If you have any questions or would like to discuss potential opportunities, please feel free to reach out. I look forward to connecting with you and discussing how I can contribute to your next software project.

        </SectionText>
        <Button onClick={() =>window.location="mailto:alvinekinyera@gmail.com" }>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;