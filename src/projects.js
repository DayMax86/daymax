import sanLogo from './assets/Projects/san_logo.png';
import linguaSyneLogo from './assets/Projects/linguasyne_logo.png';
import max from './assets/Projects/max.jpg';
import crochet from './assets/Projects/crochet.png';
import java from './assets/Projects/java_bath.png';
import reactlogo from './assets/Projects/React_Logo.png';
import trebleclef from './assets/Projects/Treble_clef.png';

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
      <a href="https://play.google.com/store/apps/details?id=com.daymax86.linguasyne&hl=en_GB&gl=US" target="_blank" rel="noreferrer">
        Play store
      </a>,
      <a href="https://github.com/DayMax86/LinguaSyne" target="_blank" rel="noreferrer">
        GitHub
      </a>,
    ]
  },

  {
    title: 'Shake a Number',
    description: 'Android dice app game written in Java',
    thumbnail: sanLogo,
    links: [
      <a href="https://play.google.com/store/apps/details?id=com.daymax86.shakeanumber&hl=en_GB&gl=US" target="_blank" rel="noreferrer">
        Play store
      </a>,
      <a href="https://github.com/DayMax86/ShakeANumber" target="_blank" rel="noreferrer">
        GitHub
      </a>,
    ]
  
  },
  
  {
        title: 'Crochet Pixel Calculator',
        description: 'A JavaScript page to create crochet pattern instructions from an image\'s pixels',
        thumbnail: crochet,
        links: [
          <a href="https://github.com/DayMax86/CrochetPixelCalculator" target="_blank" rel="noreferrer">
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

  {
      title: 'TakeNote',
      description: 'Demo Android app testing if Jetpack Compose could be used to make a simple game',
      thumbnail: trebleclef,
      links: [
        <a href="https://github.com/DayMax86/TakeNote" target="_blank" rel="noreferrer">
            GitHub
        </a>,
      ]
  },

  ];
