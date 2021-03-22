import React from 'react';

function MyAudio({surl}){
  return (
    <div>
        <audio id="myAud" controls src={surl}>
        </audio>
    </div>
  );
}

export default MyAudio;