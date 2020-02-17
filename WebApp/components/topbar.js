import React, { Component } from 'react'

export default class TopBar extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.rightItems)
  }

  render() {
    return (
      <>
			<div id = "topBar">
        <ul id ="leftItems">{this.props.leftItems.map((item, i) => {
          return (<li key = {i}>{item}</li>)
        })}</ul>
			  <ul id ="rightItems">{this.props.rightItems.map((item, i) => {
			    return (<li key = {i}>{item}</li>)
			  })}</ul>
			</div>
      <style jsx>{`
       #topBar {
         width: 100%;
         height: 48px;
         position: sticky;
         top: 0;
         background-color: ${this.props.color};
       }

       #leftItems, #rightItems {
         padding-top: 8px;
         padding-bottom: 8px;
         max-width: 50%;
         width: auto;
         height: 48px;
         position: sticky;
         top: 0;
         background-color: ${this.props.color};
         list-style: none;
       }
        #leftItems, #rightItems li {
          float: right;
          padding-left: 16px;
        }


       #leftItems {
         padding-left: 16px;
         float: left;
       }

       #rightItems {
         padding-right: 16px;
         float: right;
       }

       #rightItems::childs {
         float: right;
       }



     `}</style>
   </>
    )
  }
}
