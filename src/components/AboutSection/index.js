import React from 'react'
import Icon1 from '../../images/courier-5.svg';
import Icon2 from '../../images/courier-6.svg';
import Icon3 from '../../images/courier-7.svg';
import Icon4 from '../../images/courier88.svg';

import { 
    AboutContainer, 
    AboutH1, 
    AboutWrapper, 
    AboutCard, 
    AboutIcon, 
    AboutH2, 
    AboutP 
} from './AboutElement';

const About = () => {
    return (
        <AboutContainer id="about">
           <AboutH1>What we can do for you and your Business </AboutH1> 
           <AboutWrapper>
               <AboutCard>
                   <AboutIcon src={Icon1} />
                   <AboutH2>NETWORK</AboutH2>
                   <AboutP>To help businesses with their consumer demands </AboutP>
               </AboutCard>
               <AboutCard>
                   <AboutIcon src={Icon2} />
                   <AboutH2>AIR FRIEGHT</AboutH2>
                   <AboutP>To help businesses with their consumer demands </AboutP>
               </AboutCard>
               <AboutCard>
                   <AboutIcon src={Icon3} />
                   <AboutH2>RIDER'S NETWORK </AboutH2>
                   <AboutP>To help businesses with their consumer demands </AboutP>
               </AboutCard>
               <AboutCard>
                   <AboutIcon src={Icon4} />
                   <AboutH2>OCEAN FREIGHT</AboutH2>
                   <AboutP>To help businesses with their consumer demands </AboutP>
               </AboutCard>
               
           </AboutWrapper>
        </AboutContainer>
    )
};

export default About
