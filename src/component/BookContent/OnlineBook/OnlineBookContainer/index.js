import React, { Component } from 'react'
import { View, Text, Image, Modal, WebView } from 'react-native'
import CustomButton from '../../../Button/ButtonCustom'
import PDFReader from 'rn-pdf-reader-js'

export default class index extends Component {
  change = () => {
    const { change } = this.props
    change()
  }
  render() {
    const { isOpen } = this.props
    return (
      <View>
        <Modal visible={isOpen}
          onRequestClose={() => console.warn("this is warn")}>
          <View
            style={styles.modal}>
            <Text>This is modal</Text>
            <WebView
              source={{ uri: 'https://github.com/facebook/react-native' }}
            />
            <CustomButton
              onPress={() => this.change()}
              text="Close"
            />
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = {
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    color: '#D0D3D4'
  }
}
      // <View>
      //   <View>
      //     <View>
      //       <Text>ConNguoiTuDauDen</Text>
      //     </View>
      //     <View>
      //       <Image 
      //         source = { require('../../../../../public/image/ConNguoiTuDauDen.jpg') }
      //       />
      //     </View>
      //     <CustomButton/>
      //   </View>
      // </View>