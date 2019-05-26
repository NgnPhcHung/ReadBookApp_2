import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import OnlineBookModal from './OnlineBookContainer'
import CustomButton from '../../Button/ButtonCustom'
import { WebView } from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSourse: [],
      itemURL: ''
    }
  }

  componentDidMount() {
    fetch('http://openlibrary.org/api/volumes/brief/json/id:1;lccn:50006784|olid:OL6179000M;lccn:55011330')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSourse: responseJson,
          itemURL: responseJson[1].items[0].itemURL
        })
        console.log(responseJson[1].items[0].itemURL)
      })
  }
  change() {
    const { change, isOpenModalReducer } = this.props
    change()
    console.log(isOpenModalReducer)
  }
  render() {
    const { isOpenModalReducer, change } = this.props
    return (
      <WebView
        source={{ uri: this.state.itemURL }}
        startInLoadingState={true}
        scalesPageToFit={true}
        style={{ height: "100%", width: "100%", flex: 1 }}
      />
    )
  }
}
const styles = {
  button: {
    width: 50,
    height: 40
  }
}
