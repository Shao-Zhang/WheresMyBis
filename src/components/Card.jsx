import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ListItems from './ListItem';


export default function DisplayCard(props) {


    function display(){
        if (typeof props.drops !== "undefined"){
            return (
                <Card className={props.class} sx={{ minWidth: 345 }} style={{ backgroundColor: "#262625" }}>
                    <CardMedia
                        component="img"
                        alt="Boss Image"
                        height="140"
                        image={require("../images/" + props.name.replace(/\s+/g, '-').toLowerCase() + ".gif")}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="span" color="#ccccc6">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            
                            <ListItems drops={props.drops?.[10]} type="10" />
                            <ListItems drops={props.drops?.[25]} type="25" />
                        </Typography>
                    </CardContent>
                </Card>
            )
        }
    }

    return (
        display()
    );
}