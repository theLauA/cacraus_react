import React from 'react';

export default class MainDisplay extends React.Component{
  render(){
    return(
      <div className="container">
    <div className="row">

      <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
          <div className="jumbotron" id="jumbotron1" style={this.props.bg1}>
            <h1>{this.props.h1}</h1>
          </div>
          <div>
            <p className="lead">
              {this.props.p1}
            </p>
          </div>

          <div className="jumbotron" id="jumbotron2" style={this.props.bg2}>
            <h1>{this.props.h2}</h1>
          </div>
          <div>
            <p className="lead" id="en">
              {this.props.p2}
            </p>
          </div>
      </div>



      <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 right-sidebar">

        <div className="row" id="sidebartitle">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <span className="glyphicon glyphicon-bell"></span>
              新聞 :: News
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-md-12 trending">
            <div className="row">
              <div className="col-md-12">
                <ul className="media-list">
                  <li className="media">
                    <div className="media-left media-top">
                      <span className="glyphicon glyphicon-flash"></span>
                    </div>
                    <div className="media-body">
                      <a href="http://www.worldjournal.com/4336655/article-%e7%be%8e%e5%9c%8b%e8%8f%af%e4%ba%ba%e6%ac%8a%e7%9b%8a%e6%9c%83-%e9%82%81%e5%87%ba%e7%ac%ac%e4%b8%80%e6%ad%a5/?ref=wechat&from=timeline&isappinstalled=0">
                        世界新聞網
                      </a>
                      : 美國華人權益會 邁出第一步
                    </div>
                  </li>
                  <li className="media">
                    <div className="media-left media-top">
                      <span className="glyphicon glyphicon-flash"></span>
                    </div>
                    <div className="media-body">
                      <a href="http://sampan.org/2016/09/chinese-american-citizen-right-alliance-holds-inaugural-meeting/">
                        SAMPAN  舢䑥
                      </a>
                      :Chinese American Citizen Right Alliance holds inaugural meeting
                      </div>
                  </li>
                  <li className="media">
                    <div className="media-left media-top">
                      <span className="glyphicon glyphicon-flash"></span>
                    </div>
                    <div className="media-body">
                      <a href="http://www.worldjournal.com/4351965/article-%E9%A6%96%E5%B1%86%E7%BE%8E%E5%9C%8B%E8%8F%AF%E4%BA%BA%E5%A4%A7%E6%9C%83-%E9%BA%BB%E5%B7%9E%E4%BB%A3%E8%A1%A8%E5%87%BA%E5%B8%AD%E8%B8%B4%E8%BA%8D/?ref=wechat">
                        日報新聞
                      </a>: 首屆美國華人大會 麻州代表出席踴躍
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left media-top">
                        <span className="glyphicon glyphicon-flash"></span>
                      </div>
                      <div className="media-body">
                        <a href="http://sampan.org/zh-hant/2016/09/%E7%BE%8E%E5%9C%8B%E8%8F%AF%E4%BA%BA%E6%AC%8A%E7%9B%8A%E6%9C%83%E5%92%8C%E4%BA%9E%E5%8D%94%E6%9C%8D%E5%8B%99%E4%B8%AD%E5%BF%83%E5%90%88%E4%BD%9C%E6%8F%90%E4%BE%9B%E4%BF%A1%E6%81%AF%E8%BD%89%E4%BB%8B/">
                          SAMPAN  舢䑥
                        </a>
                        :美國華人權益會和亞協服務中心合作提供信息轉介服務
                        </div>
                    </li>
                    <li className="media">
                      <div className="media-left media-top">
                        <span className="glyphicon glyphicon-flash"></span>
                      </div>
                      <div className="media-body">
                        <a href="http://www.qatv.org/videoclip/2016/AYL115_Vote">
                          At your Library
                        </a>
                        :Learn Why You Have to Vote
                        </div>
                    </li>
                  </ul>
                </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
    )
  }
}
