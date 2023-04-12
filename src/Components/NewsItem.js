import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
       <div className="card" style={{width: "18rem",position:'relative'}}>
  <img src={!imageUrl?"https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/Images/Topics/Insights/wearem/motorsport-logo.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1655371838472.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{zIndex:1,left:'85%'}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span></h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>By {!author?"some source":author} published on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} className="btn btn-sn btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}
