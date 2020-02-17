import React, { Component } from 'react'

const BUTTON_SIZE = 64

export default class Searchbar extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.width)
  }

  render() {
    return (
      <div id = "searchbar">
        <form>
          <input
            type="text"
            className="input"
            placeholder={this.props.placeholder}
          />
        </form>
        <style jsx>{`
       #searchbar {
         width: ${this.props.width}px;
         height: ${this.props.height}px;
         border-radius: 8px;
         border: none;
         background-color: ${this.props.backColor};
         float: right;
       }

       input {
         padding-left: 8px;
         width: ${this.props.width}px;
         height: ${this.props.height}px;
         background: transparent;
         border: none;
         color: ${this.props.color};

       }

       input:focus, textarea:focus, select:focus{
        outline: none;
    }

       input::placeholder {
          color: ${this.props.placeholderColor};
       }
     `}</style>
      </div>
    )
  }
}
