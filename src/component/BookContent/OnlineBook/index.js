import React, { Component } from 'react'
import { View, Text, WebView, Button } from 'react-native'
import OnlineBookModal from './OnlineBookContainer'
import CustomButton from '../../Button/ButtonCustom'

export default class index extends Component {
  change( ){
    const {change, isOpenModalReducer} = this.props
    change()
    console.log(isOpenModalReducer)
  }
  render() {
    const { isOpenModalReducer, change} = this.props
    return (
      <View>
        <CustomButton 
        style = { styles.button }
          onPress = { () => this.change() }
          text="Open"
        />
        <OnlineBookModal 
          isOpen = { isOpenModalReducer }
          change= { change }
        />
      </View>
    )
  }
}
const styles = { 
  button:  {
    width: 50,
    height: 40
  }
}
