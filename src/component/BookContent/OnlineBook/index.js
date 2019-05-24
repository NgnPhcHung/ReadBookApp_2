import React, { Component } from 'react'
import { View, Text, WebView} from 'react-native'
// import PdfReader from 'rn-pdf-reader-js'

export default class index extends Component {
  render() {
    // const sourse = require('./PDF/document.pdf')
    return (
      <WebView
      source = {{ uri: 'https://drive.google.com/file/d/10N4dTq4W2HknZioXBSoNfV9NSt0nCyoy/view?usp=sharing' }}
      />
    )
  }
}
