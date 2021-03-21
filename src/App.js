import {itunesApiRequest} from './Result';
import Songs from './Songs';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [resu, setResu] = useState("");
  const [requ, setRequ] = useState("");
  async function doTheSearch() {
		const response = await itunesApiRequest(requ);
    setResu(response);//les 50 elements de results
	};
  return (
    <div className="App">
      <header className="App-header">
        <input id="rs" type="text" value={requ} onChange={(e) => setRequ(e.target.value)}/>
        <input type="button" id="go" value="Rechercher" onClick={() => doTheSearch()}/>
        {resu != "" && <Songs inpt={resu}></Songs>}
        
      </header>
    </div>
  );
}

export default App;