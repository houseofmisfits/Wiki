import React, { Component } from 'react'

const BUTTON_SIZE = 64

export default class AccountButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<>
      <div id = "accountButton">
        <img src = "/img/avatar.jpg" alt = "avatar"/>
      </div>
        <style jsx>{`
       #accountButton {
         width: 32px;
         height: 32px;
         border-radius: 16px;
         border: none;
         float: right;
       }

       img {
         border-radius: 16px;
         border: none;
         width: 100%;
         height: 100%;
       }
     `}</style>
      </>
    )
  }
}
