import {itunesApiRequest} from './Result';
import Songs from './components/Songs';
import {TextField, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
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
        <TextField id="rs" type="text" value={requ} onChange={(e) => setRequ(e.target.value)}/>
        <IconButton onClick={() => doTheSearch()}>
          <SearchIcon/>
        </IconButton>
        {resu != "" && <Songs inpt={resu}></Songs>}
      </header>
    </div>
  );
}

export default App;