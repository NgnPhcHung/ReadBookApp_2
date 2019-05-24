import React, { Component } from 'react'
import { View, Text, Image, } from 'react-native'
import CustomButton from '../../../Button/ButtonCustom'

export default class index extends Component {
  render() {
    return (
      <View>
        <View>
          <View>
            <Text>ConNguoiTuDauDen</Text>
          </View>
          <View>
            <Image 
              source = { require('../../../../../public/image/ConNguoiTuDauDen.jpg') }
            />
          </View>
          <CustomButton/>
        </View>
      </View>
    )
  }
}
