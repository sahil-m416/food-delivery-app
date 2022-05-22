import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './style.module.css';

export default function ActionAreaCard() {
    return (
        <>
            <Card sx={{ maxWidth: 345 }} className="styles.cardcontainer" styles={{ paddingBottom: "10px" }}>
                <CardActionArea>
                    {/* <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dosa
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                            The Venningtonn Court
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            Ready
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="styles.cardcontainer">
                <CardActionArea>
                    {/* <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Noodles
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            BabyLonne Inn
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            Ready
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}
