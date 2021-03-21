import React, {useState} from 'react';
import Song from './Song';
import MyAudio from './MyAudio';

function Songs({inpt}){
    const [daUrl, setDaurl] = useState("");
    const dalist = inpt.map((e, ind) => <Song elemant={e} ctx={setDaurl}></Song>);
    return(
        <div>{<MyAudio surl={daUrl}></MyAudio>}{dalist}</div>
    );
}

export default Songs;