import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';


function Google() {
  return <WebView source={{ uri: ' https://www.google.com' }} />
}

export default Google

const styles = StyleSheet.create({})