import React from 'react';

export default class LandingDisplay extends React.Component{
  render(){
    return(
      <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
          <div id="imgcontainer">
              <img src="img/Logover2.png" alt="Chinese American Right Alliance"/>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-9 col-lg-offset-1 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
          <img src="img/banner2.png" alt="For voting right" id="bannerpic" />
        </div>
      </div>

      <div className="row text-center" >
        <button type="button" className="btn btn-default" aria-label="Left Align" id="centerbutton" onclick="location.href = 'mission.html';">
          Learn More :: 了解更多
        </button>

      </div>
    </div>
    )
  }
}
