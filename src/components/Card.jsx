import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function DisplayCard(props) {
    

    return (
        <Card className={props.class} sx={{ minWidth: 345 }}>
            <CardMedia
                component="img"
                alt="Boss Image"
                height="140"
                image={require("../images/" + props.name.replace(/\s+/g, '-').toLowerCase() + ".gif")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="span">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" component="span">
                    <h3>10 Man</h3>
                    {/* props.drops.10.map((item)=>{
                        <NewComponent itemString = item />
                    })
                    props.drops.10.hard.map((item)=>{
                        <NewComponent itemString = item />
                    }) */}
                    {/* create another component and give it props.drops.10 to filter between 10 and 25 man} */}
                    <h3>25 Man</h3>
                    <p>Loot #2</p>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">See more loot</Button>
            </CardActions>
        </Card>
    );
}