import React from 'react';
import ReactDOM from 'react-dom/client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { useWindowSize } from "@uidotdev/usehooks";

import '../index.css';
import { myProjects } from '../projects';
import max from '../assets/Projects/max.jpg';

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'center', backgroundColor: 'powderblue'}}>
        <Typography gutterBottom variant="h5" component="div" color="black" sx={{ mr: 2 }}>
          Max Day
        </Typography>
        <IconButton>
          <a href="https://github.com/DayMax86" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </IconButton>
        <IconButton>
          <a href="https://uk.linkedin.com/in/daymax96" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </IconButton>
        <IconButton>
          <a href="https://docs.google.com/document/d/1ngOzLQnJZ3TL-yOp7n4mRF6fi_hCgXhBYumxiNyK16E/edit?usp=sharing" target="_blank" rel="noreferrer">
            <ImProfile />
          </a>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

const AboutBox = () => {
  const size = useWindowSize();
  return (
    <Paper elevation={5} sx={{ m: 1 }}>
      <div style={{
        display: 'flex',
        justifyContent: "flex-start",
        flexDirection: "row",
        flexWrap: 'nowrap',
        alignItems: 'center',
    }}>
      <Avatar alt="Max" src={max} sx={{ m: 2 , width: size.width/6, height: size.width/6, borderColor: 'powderblue', borderStyle: 'solid', borderWidth: '4px'}}/>
      <Typography variant="body1" sx={{ m: 1, mx: 2, justifyContent: 'center'}}>
        About me: <br/><br/>
        I'm a Computer Science student at the University of Bath, looking for graduate roles in 
        software engineering and development. Below are examples of various projects of mine for which the
        code is open-source and viewable on GitHub.
      </Typography>
      </div>
    </Paper>
  );
}


export function HomeCard(props) {

  const linksList = props.links.map((link) =>
    <Button size="small">{link}</Button>
  );

  return (
    <div style={{ 
      margin: '10px',
      flexGrow: 1,
      flexWrap: 'wrap',
    }}>
      <Card elevation={5} sx={{
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
          <div style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            flexWrap: 'wrap',
        }}>
          <CardActions>
            {linksList}
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

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

export default function Home() {
  return (
    < >
      <Header />
      <AboutBox />
      <HomeContainer />
    </>
  );
}

