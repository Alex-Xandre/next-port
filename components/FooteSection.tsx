'use client';
import React from 'react';
import SectionContainer from './SectionContainer';

const FooterSection = () => {
  return (
    <SectionContainer cN={'py-20'}>
      <div className='border-t w-full py-5 flex flex-col md:flex-col items-center justify-between px-3 lg:px-0'>
        <h1>
          Looking for A software Developer? Send me an{' '}
          <span>
            <a
              href='mailto:xndrmcua22@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              Email
            </a>
          </span>
          &nbsp; or you can visit my &nbsp;
          <span>
            <a
              href='https://www.linkedin.com/in/alexander-micua-04657a217/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              Linkedin
            </a>
          </span>
          .
        </h1>
        <p className='mt-5 md:mt-0'>
          Built with Next JS and Tailwind ♡{' '}
          <span>
            Source Code available my &nbsp;
            <span className='underline'>
              <a
                href=' https://github.com/Alex-Xandre'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
            </span>
          </span>
        </p>
      </div>
    </SectionContainer>
  );
};

export default FooterSection;
