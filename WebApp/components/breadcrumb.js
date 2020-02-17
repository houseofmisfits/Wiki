import React, { Component } from 'react'
import Link from 'next/link'

export default class BreadCrumb extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let links = this.props.links
    return(
      <>
      <ul> {
        links.map((link, i) => {
          return (<><li key = {i}><Link href = {link}>
            <a>{link}</a></Link></li>
            {i < links.length -1 && <li key = {`bc-arr-${i}`}>❯</li>}</> )
        })
      }
      </ul>
      <style jsx>{`
       span {
         padding-right: 6px;
       }
       a {
         color:
         text-decoration: none;
       }

       ul {
         list-style: none;
       }

       ul li {
         height: 32px;
         min-width: 24px;
         text-align: center;
         line-height:32px;
         float: left;
       }

       ul li:hover {
         text-decoration: underline;
       }
     `}</style>
    </>
    )
  }
}
