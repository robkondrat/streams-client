import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/#id" component={StreamShow} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit/#id" component={StreamEdit} />
        <Route path="/streams/delete/#id" component={StreamDelete} />
      </div>
    </BrowserRouter>
  )
};

export default App;