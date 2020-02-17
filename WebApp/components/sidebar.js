import React, { Component } from 'react'

export default class SideBar extends Component {
  constructor(props) {
    super(props)
    console.log(props.color)
  }

  render() {
    return (
      <>
			<div id = "sideBar"></div>
      <style jsx>{`
       #sideBar {
         width: 15%;
         height: 100%;
         float: left;
         background-color: ${this.props.color};
       }
     `}</style>
   </>
    )
  }
}
