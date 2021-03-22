import React, {useState} from 'react';
import Song from './Song';
import MyAudio from './MyAudio';
import {GridList, IconButton} from '@material-ui/core';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

function Songs({inpt}){
    const [daUrl, setDaurl] = useState("");
    const [favTrack, setFavTrack] = useState("");
    const dalist = inpt.map((e, ind) => <Song key={ind} elemant={e} ctx={setDaurl} fav={setFavTrack}></Song>);
    function playFavorite(){
        setDaurl(favTrack);
    }
    return(
        <div>{<MyAudio surl={daUrl}></MyAudio>}
            {
                favTrack !== "" && <IconButton onClick={()=>playFavorite()}>
                    Jouer favori
                <AudiotrackIcon/>
            </IconButton>
            }
            <GridList cellHeight={160} cellwidth={160} cols={3}>
                {dalist}
            </GridList>
        </div>
    );
}

export default Songs;