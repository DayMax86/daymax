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
import MenuIcon from "@material-ui/icons/Menu";

import './index.css';
import { myProjects } from './projects';
import max from './assets/Projects/max.jpg';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{justifyContent:'center'}}>
        <IconButton>
          <MenuIcon/>
        </IconButton>
        <Typography gutterBottom variant="h5" component="div">
          Max Day
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

const AboutBox = () => {
  return (
    <Paper elevation={5} sx={{ m: 1 }}>
      <div style={{
        display: 'flex',
        justifyContent: "flex-start",
        flexDirection: "row",
        flexWrap: 'nowrap',
        alignItems: 'center',
    }}>
      <Avatar alt="Max" src={max} sx={{ m: 2 , width: 200, height: 200, borderColor: 'blue', borderStyle: 'solid', borderWidth: '4px'}}/>
        <Typography variant="h5" sx={{ m: 1, mx: 2, justifyContent: 'center'}}>
          About me: <br/><br/>
          I am a Computer Science student at the University of Bath, looking for graduate roles in 
          software engineering and development. Below are examples of various projects of mine for which the
          code is open-source and viewable on GitHub.
        </Typography>
    </div>
    </Paper>
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < >
    <Header />
    <AboutBox />
    <HomeContainer />
  </>
);

