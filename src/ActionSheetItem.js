// @flow

import React from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'

const DEFAULT_SELECTED_ICON: number = require('./img/checkmark.png')

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 14,
    color: '#222222'
    marginLeft:12
  },
  itemIcon: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  selectedIcon: {
    width: 18,
    height: 18
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

type Props = {
  value?: any,
  index?: number,
  icon?: any,
  selectedIcon?: any,
  textComponent?:any,
  selected?: boolean,
  showSelectedIcon?: boolean,
  onPress?: () => void,
  style?: any
}

const defaultProps = {
  value: null,
  icon: null,
  index: null,
  textComponent:any,
  selectedIcon: DEFAULT_SELECTED_ICON,
  selected: false,
  showSelectedIcon: true,
  onPress: () => {},
  style: null
}

function ActionSheetItem({
  value,
  index,
  onPress,
  style,
  icon,
  selectedIcon,
  selected,
  showSelectedIcon,
  textStyle,
  textComponent
}: Props) {
  let iconOnSelected
  let itemIcon

  if (selected && showSelectedIcon) {
    if (['number', 'string'].includes(typeof selectedIcon)) {
      iconOnSelected = (
        <Image source={selectedIcon} style={styles.selectedIcon} />
      )
    } else {
      iconOnSelected = selectedIcon
    }
  }

  if (['number', 'string'].includes(typeof icon)) {
    itemIcon = <Image source={icon} style={styles.itemIcon} />
  } else {
    itemIcon = icon
  }

  return (
    <TouchableHighlight
      onPress={() => {
        onPress(value, index)
      }}
      underlayColor="#EDEDED">
      <View style={[styles.container, style]}>
        <View style={styles.itemContent}>
          {itemIcon} 
          {textComponent}
        </View>
        <View style={styles.itemContent}>{iconOnSelected}</View>
      </View>
    </TouchableHighlight>
  )
}

ActionSheetItem.defaultProps = defaultProps

export default ActionSheetItem
