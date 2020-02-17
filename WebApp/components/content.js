import React, { Component } from 'react'

export default class Content extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id = "content">
        <ul>{React.Children.map(this.props.children, (arg) => {
          return (<li>{arg}</li>)
        })}</ul>
        <style jsx>{`
       #content {
         width: 85%;
         height: 100%;
         float: right;
       }

       ul {
         list-style: none;
       }
     `}</style>
      </div>
    )
  }
}
