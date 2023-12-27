import sanLogo from './assets/Projects/san_logo.png';
import linguaSyneLogo from './assets/Projects/linguasyne_logo.png';
import max from './assets/Projects/max.jpg';
import crochet from './assets/Projects/crochet.png';
import java from './assets/Projects/java_bath.png';

export const myProjects = [

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
        title: 'GitHub profile',
        description: 'My GitHub profile with various public repositories',
        thumbnail: max,
        links: [
          <a href="https://github.com/DayMax86" target="_blank" rel="noreferrer">
            View profile
          </a>,
        ]
    },

    {
        title: 'Crochet Pixel Calculator',
        description: 'A JavaScript page to create crochet pattern instructions from an image\'s pixels',
        thumbnail: crochet,
        links: [
          <a href="/legacycrochet">
              Go to page
          </a>,
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

  ];
