import sanLogo from './assets/Projects/san_logo.png';
import sudoku from './assets/Projects/sudoku.png';
import linguaSyneLogo from './assets/Projects/linguasyne_logo.png';
import crochet from './assets/Projects/crochet.png';
import java from './assets/Projects/java_bath.png';
import reactlogo from './assets/Projects/React_Logo.png';
import forwardmarch from './assets/Projects/forwardmarch.png';
import React from 'react';
import { Link } from 'react-router-dom';

export const myProjects = [

  {
    title: 'This website!',
    description: 'Site built using React.js with material-ui',
    thumbnail: reactlogo,
    links: [
      <a href="https://github.com/DayMax86/daymax" target="_blank" rel="noreferrer">
        GitHub
      </a>,
    ]
  },

  {
    title: 'LinguaSyne',
    description: 'Android language-learning app created with Kotlin, Jetpack Compose, Firebase, etc.',
    thumbnail: linguaSyneLogo,
    links: [
      // <a href="https://play.google.com/store/apps/details?id=com.daymax86.linguasyne&hl=en_GB&gl=US" target="_blank" rel="noreferrer">
      //   Play store
      // </a>,
      <a href="https://github.com/DayMax86/LinguaSyne" target="_blank" rel="noreferrer">
        GitHub
      </a>,
      <div>
        {<Link to="/linguasyne/privacypolicy">Privacy policy</Link>}
      </div>,

    ]
  },

  {
    title: 'ForwardMarch',
    description: 'Chess-inspired game built using LibGDX and written in Kotlin',
    thumbnail: forwardmarch,
    links: [
      <a href="https://github.com/DayMax86/ForwardMarch" target="_blank" rel="noreferrer">
          GitHub
      </a>,
    ]
  },
  
  {
    title: 'Crochet Pixel Calculator',
    description: 'An app used to create crochet pattern instructions from an image\'s pixels',
    thumbnail: crochet,
    links: [
      <a href="https://github.com/DayMax86/CrochetPixels" target="_blank" rel="noreferrer">
          GitHub
      </a>,
    ]
  },

  {
    title: 'Sudoku solver',
    description: 'Python AI sudoku solver using DFS with backtracking.',
    thumbnail: sudoku,
    links: [
      <a href="https://github.com/DayMax86/SudokuSolver" target="_blank" rel="noreferrer">
        GitHub
      </a>,
    ]
  
  },

  {
    title: 'Shake a Number',
    description: 'Android dice app game written in Java',
    thumbnail: sanLogo,
    links: [
      <a href="https://github.com/DayMax86/ShakeANumber" target="_blank" rel="noreferrer">
        GitHub
      </a>,
    ]
  
  },

  {
    title: 'Java coursework',
    description: 'University coursework assignment for MSc Computer Science',
    thumbnail: java,
    links: [
      <a href="https://github.com/DayMax86/Coursework2" target="_blank" rel="noreferrer">
          GitHub
      </a>,
    ]
  },



  ];
