import React, { Component, Text } from 'react'

import TopBar from '../components/topbar'
import SideBar from '../components/sidebar'
import Searchbar from '../components/searchbar'
import AccountButton from '../components/accountbutton'
import Content from '../components/content'
import BreadCrumb from '../components/breadcrumb'
import { ColorPalette, ChangeLuminance, CheckIfLightColor } from '../resources/style'


export default class Index extends Component  {

  constructor() {
    super()
  }

  render() {
    return (
      <>
      <div>
        <TopBar
          color = { ColorPalette.primary }
          leftItems = {[<h1>House of Misfits</h1>]}
          rightItems = {[
            <AccountButton />,
            <Searchbar
              width = {300}
              height = {32}
              backColor = {ChangeLuminance(ColorPalette.primary, 20)}
              color = {'white'}
              placeholder = "Search"
              placeholderColor = {'lightgray'}/>]}
        />
        <SideBar color = { ColorPalette.lightGray } />
        <Content>
          <div className = "breadContainer">
            <BreadCrumb links = {['Head Support', 'Support Activity' ]}/>
          </div>
        </Content>
      </div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body, html {
          width: 100%;
          height: 100%;
        }
        #__next {
          height: 100%;
        }

         div[class^="jsx"] {
          height: 100%;
        }

        a {
          color: ${ColorPalette.link};
          text-decoration: none;
          font-family: 'Roboto', sans-serif;
        }
        .breadContainer {
          margin-left:16px;
          margin-top:16px;
        }
        p {
          font-family: 'Roboto Condensed', sans-serif;
        }
        /h[0-6]/ {
        }
        @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed&display=swap');
      `}</style>
    </>
    )
  }
}
