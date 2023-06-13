import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo =[{
  tile: 'RAFIKI',
  description:'AI web designe web page dipicting creativeness',
  Link:'https://rafiki-alvine.firebaseapp.com/?_gl=1*17siam5*_ga*MjA0MTA3ODgzNy4xNjg1NzcyOTMz*_ga_CW55HF8NVT*MTY4NjQ4OTQ5MS4xOC4wLjE2ODY0ODk2MTIuMC4wLjA.'
},{
  tile: 'SCAR',
  description:' It features a visually appealing menu display, seamless online ordering functionality, and a convenient reservation system. Customers can explore the menu, place orders, and make reservations with ease.',
},{
  tile: 'E-commerce project (mwili)',
  description:'Revolutionary E-Commerce Experience: Our cutting-edge e-commerce project is set to redefine online shopping. Seamlessly blending stunning visuals with intuitive functionality, it offers an immersive and captivating experience for customers. With an extensive product catalog and powerful search capabilities, finding the perfect item becomes effortless. Our project showcases advanced features like personalized recommendations, real-time inventory updates, and secure payment gateways, ensuring a seamless and secure transaction process. Elevate your online shopping journey with our innovative e-commerce platform that sets new standards in convenience, style, and customer satisfaction.',
  }]
const Projects = () => (
  <Section nopadding id='projects'> 
  <SectionDivider />
  <SectionTitle main>projects</SectionTitle>
  <GridContainer>
    {projects.map (({id, image, title, description, tags, visit}) =>(
      <BlogCard key={id}>
        <img src= {image}/>
        <TitleContent>
          <HeaderThree title>{title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo>{description}</CardInfo>
        <div>
          <TitleContent>Stack</TitleContent>
          <TagList>
            {tags.map(( tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href='visit'> Code</ExternalLinks>
          <ExternalLinks href='source'> Source</ExternalLinks>
        </UtilityList>

      </BlogCard>
    
    ))};
  </GridContainer>
  </Section>
);

export default Projects;