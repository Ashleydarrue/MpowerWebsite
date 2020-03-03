import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Card.css';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="container">

    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/gf.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Personal Training
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Sed accusantium, quos, animi iusto velit reiciendis necessitatibus 
            optio cum odio labore at temporibus deserunt mollitia debitis consequuntur 
            voluptate consequatur doloribus nesciunt.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/pt.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Group Fitness
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Sed accusantium, quos, animi iusto velit reiciendis necessitatibus 
            optio cum odio labore at temporibus deserunt mollitia debitis consequuntur 
            voluptate consequatur doloribus nesciunt.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/st.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Strength Training
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Sed accusantium, quos, animi iusto velit reiciendis necessitatibus 
            optio cum odio labore at temporibus deserunt mollitia debitis consequuntur 
            voluptate consequatur doloribus nesciunt.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>




 </div>
  );
}

