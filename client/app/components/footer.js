import React from 'react';

export default class Footer extends React.Component{
  render(){
    return(
      <footer>
      <div className="container">
        <div className="row">

          <div className="col-md-4 col-lg-4 col-sm-12 col-xm-12">
            <h3>Brochure~~傳單</h3>
            <hr/>
            <p><a href="other/brochureEx.pdf" target="_blank">Download/下載</a></p>
          </div>

          <div className="col-md-4 col-lg-4 col-sm-12 col-xm-12">
            <h3>Location~~地址</h3>
            <hr/>
            <p>Chinese American Citizen Right Alliance</p>
 			      <p>美國華人權益會</p>
     		    <p>16 Harvard St.</p>
     		    <p>Quincy, MA, 02171</p>
          </div>

          <div className="col-md-4 col-lg-4 col-sm-12 col-xm-12">
            <h3>Contact Info~~聯繫方式</h3>
            <hr/>
            <p><span className="glyphicon glyphicon-gmail"></span>电子邮箱:cacraus@gmail.com </p>
      		  <p><span className="glyphicon glyphicon-phone"></span>电话号码:617-712-9923 </p>
			      <p><span className="glyphicon glyphicon-wechat"></span>微信：cacraus </p>
			      <p><span className="glyphicon glyphicon-facebook"></span>臉書: </p>
          </div>
        </div>
      </div>
      </footer>

    )
  }
}
