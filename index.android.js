/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native'

class testrn extends Component {
  renderScene(route, navigator) {
  	if(route.name == 'Main') {
    	return <Main navigator={navigator} {...route.props}  />
    }
    if(route.name == 'Home') {
    	return <Home navigator={navigator} {...route.props}  />
    }
  }

  render() {
    return (
      <Navigator style={{ flex:1 }} initialRoute={{ name: 'Main' }} renderScene={ this.renderScene } />
    )
  }
}

class Main extends Component {
  _navigate(props) {
  	this.props.navigator.push({
    	name: 'Home',
      props: props
    })
  }

  render() {
    return (
    	<View style={ styles.container }>
      	<Text style={ styles.heading }>Hello from Main</Text>
 				<TouchableHighlight style={ styles.button } onPress={ () => this._navigate({ name: 'YOYOYOYOYO' }) }>
      		<Text style={ styles.buttonText }>GO GO GO</Text>
      	</TouchableHighlight>
      </View>
    )
  }
}

class Home extends Component {
  render() {
    return (
    	<View style={ styles.container }>
      	<Text style={ styles.heading }>Hello from { this.props.name }</Text>
 				<TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.pop() }>
      		<Text style={ styles.buttonText }>GO Back</Text>
      	</TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   	marginTop: 80,
    backgroundColor: '#fff'
  },
   heading: {
  	fontSize:22,
    marginBottom:10
  },
  button: {
  	height:60,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
  	fontSize:20
  }
})

AppRegistry.registerComponent('testrn', () => testrn)
