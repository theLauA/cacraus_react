import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory, history } from 'react-router';
import Navbar from './components/navbar';
import Footer from './components/footer';
import MainDisplay from './components/maindisplay';
import LandingDisplay from './components/landingdisplay'

class IndexPage extends React.Component{
  render(){
    return  <LandingDisplay />;
 };
}

class MissionPage extends React.Component{
  render(){
    return <MainDisplay h1="H1"
                        p1="P1"
                        h2="H2"
                        p2="P2"
                        bg1={{backgroundImage:"url('../img/servicepic1.JPG')"}}
                        bg2={{backgroundImage:"url('../img/servicepic2.JPG')"}}/>;
  }
}

class RightPage extends React.Component{
  render(){
    return <MainDisplay h1="H1"
                        p1="P1"
                        h2="H2"
                        p2="P2"
                        bg1={{backgroundImage:"url('../img/storypic2.png')"}}
                        bg2={{backgroundImage:"url('../img/servicepic11.JPG')"}}/>;
  }
}

class ServicePage extends React.Component{
  render(){
    return <MainDisplay h1="H1"
                        p1="P1"
                        h2="H2"
                        p2="P2"
                        bg1={{backgroundImage:"url('../img/servicepic1.JPG')"}}
                        bg2={{backgroundImage:"url('../img/servicepic2.JPG')"}}/>;
  }
}

class StoryPage extends React.Component{
  render(){
    return <MainDisplay h1="H1"
                        p1="P1"
                        h2="H2"
                        p2=""
                        bg1={{backgroundImage:"url('../img/storypic16.jpg')"}}
                        bg2={{display:"none"}}/>;
  }
}

class App extends React.Component {
  componentDidMount(){
    var currentLocation = this.props.location.pathname;
    console.log(currentLocation);
  }
  render(){
    return(
      <div>
      <Navbar />
      <div>{this.props.children}</div>
      <Footer />
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* Show the Feed at / */}
      <IndexRoute component={IndexPage} />
      <Route path="mission" component={MissionPage} />
      <Route path="story" component={StoryPage} />
      <Route path="service" component={ServicePage} />
      <Route path="right" component={RightPage} />
    </Route>
  </Router>
),document.getElementById('mybody'));
