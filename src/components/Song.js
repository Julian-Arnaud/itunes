import React from 'react';
import {IconButton, Card, CardMedia, GridListTile} from '@material-ui/core';
import {PlayArrow} from '@material-ui/icons';
import StarsIcon from '@material-ui/icons/Stars';
function Song(props){
    return(
        <div>
            <GridListTile>
            <Card variant="outlined" width="400px">
                {props.elemant.trackName}<br></br>
                {props.elemant.artistName} <br></br>
                <CardMedia><img src={props.elemant.artworkUrl100}/></CardMedia><br></br>
                <IconButton onClick={() => props.ctx(props.elemant.previewUrl)}>
                    <PlayArrow/>
                </IconButton>
                <IconButton onClick={() => props.fav(props.elemant.previewUrl)}>
                    <StarsIcon/>
                </IconButton>
            </Card>
            </GridListTile>
        </div>
    );
}

export default Song;