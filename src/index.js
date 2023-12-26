import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import sanLogo from './assets/Projects/san_logo.png';
import linguaSyneLogo from './assets/Projects/linguasyne_logo.png';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{justifyContent:'center'}}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} />
        <Typography gutterBottom variant="h5" component="div">
          Max Day
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default function HomeCard(props) {

  const linksList = props.links.map((link) =>
    <Button size="small">{link}</Button>
  );


  return (
    <div style={{ 
      margin: '10px',
      flexGrow: 1,
      flexWrap: 'wrap',
    }}>
      <Card sx={{
        minWidth: 300 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={props.thumbnail}
          title="Thumbnail image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          {linksList}
        </CardActions>
      </Card>
    </div>
  );
}

const myProjects = [

  {
  title: 'Shake a Number',
  description: 'Android dice app game',
  thumbnail: sanLogo,
  links: [
    <a href="https://google.com" target="_blank" rel="noreferrer">
      Google
    </a>,
    <a href="https://github.com/DayMax86/ShakeANumber" target="_blank" rel="noreferrer">
      View on GitHub
    </a>,
  ]

  },

  {
  title: 'LinguaSyne',
  description: 'Android language-learning app... blah blah blah blah blah blah',
  thumbnail: linguaSyneLogo,
  links: [
    <a href="https://google.com" target="_blank" rel="noreferrer">
      Google
    </a>,
    <a href="https://github.com/DayMax86/LinguaSyne" target="_blank" rel="noreferrer">
      View on GitHub
    </a>,
  ]
  },

];

export const HomeContainer = () => {

const homeCards = myProjects.map( (project) => 
  <HomeCard
    title={project.title}
    description={project.description}
    thumbnail={project.thumbnail}
    links={project.links}
  />
);

  return (
    < >
      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: 'wrap',
      }}>
        {homeCards}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < >
    <Header />
    <HomeContainer />
  </>
);

