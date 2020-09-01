import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Sidebar from './Sidebar';
import Main from './Main';
import MainSidebar from './sidebars/MainSidebar';
import store from './store.js';
import NoteList from './NoteList';
import NoteSideBar from './sidebars/NoteSidebar';


export default class App extends React.Component {
  state ={
      folders: store.folders,
      notes: store.notes
  }
  
  
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
          <h1>Noteful</h1>

    <Sidebar>
          <Route path='/' render={() => 
              <MainSidebar 
                folders={this.state.folders}
                />
              } 
            />
          <Route path='/' render={() =>
              <NoteSideBar
                notes={this.state.notes} />
          } />
    </Sidebar>
      <Main>
           <Route path='/' render={() =>  
              <NoteList 
           notes={this.state.notes} />
          }          
            />
           {/* <Route path='/foo' component={FooMain} /> */}
      </Main>

    </div>
  );

  }
}


