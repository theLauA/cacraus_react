import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Navbar from './components/navbar';

class IndexPage extends React.Component{
  render(){
    return  <div>ok</div>;
 };
}

class App extends React.Component {
  render(){
    return(
      <Navbar>
      <div>{this.props.children}</div>
      </Navbar>
    );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* Show the Feed at / */}
      <IndexRoute component={IndexPage} />
    </Route>
  </Router>
),document.getElementById('mybody'));
