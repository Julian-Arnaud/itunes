function Song(props){
    return(
        <div>{props.elemant.trackName} {props.elemant.artistName} <input type="button" value="Play!" onClick={() => props.ctx(props.elemant.previewUrl)}/></div>
    );
}

export default Song;