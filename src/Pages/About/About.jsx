import React from 'react';
import coding from '../../Assets/coding.svg';
import StyledDiv from './style';

const About = props => {
  props.funcNav(true);
  return (
    <StyledDiv>
      <div>
        <img src={coding} alt="" />
      </div>
      <p>
        About Software Developer{' '}
        <span style={{ fontSize: '2.5rem', color: 'white' }}>NAO</span>
      </p>
      <section className="bottom">
        <h2>I'm Nao.</h2>
        <p>I'm currently learning Full-Stack Development Languages.</p>
        <p>
          I've already known JS,ReactJS, ReactNative, NodeJS, MongoDB, SQL,
          Python, AWS Services
        </p>
        <p>
          <span style={{ color: 'white', textDecoration: 'underline' }}>
            Send email
          </span>{' '}
          : nurettinakinoral@gmail.com
        </p>
      </section>
    </StyledDiv>
  );
};

export default About;
