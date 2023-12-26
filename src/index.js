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

export default function HomeCard(props) {
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
          <Button size="small">View</Button>
          <Button size="small">View code</Button>
        </CardActions>
      </Card>
    </div>
  );
}

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

export const HomeContainer = () => {
  return (
    < >
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: 'wrap',
      }}>
        <HomeCard 
          title="Shake a Number"
          description="Android app dice game"
          thumbnail={sanLogo}
        />
        <HomeCard
          title="LinguaSyne" 
          description="Language-learning Android app... blah blah blah blah blah etc." 
          thumbnail={linguaSyneLogo}
        />
        <HomeCard
          title="LinguaSyne" 
          description="Language-learning Android app... blah blah blah blah blah etc." 
          thumbnail={linguaSyneLogo}
        />
        <HomeCard
          title="LinguaSyne" 
          description="Language-learning Android app... blah blah blah blah blah etc." 
          thumbnail={linguaSyneLogo}
        />
        <HomeCard
          title="LinguaSyne" 
          description="Language-learning Android app... blah blah blah blah blah etc." 
          thumbnail={linguaSyneLogo}
        />
        <HomeCard
          title="LinguaSyne" 
          description="Language-learning Android app... blah blah blah blah blah etc." 
          thumbnail={linguaSyneLogo}
        />
        <HomeCard
          title="LinguaSyne" 
          description="Language-learning Android app... blah blah blah blah blah etc." 
          thumbnail={linguaSyneLogo}
        />
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

