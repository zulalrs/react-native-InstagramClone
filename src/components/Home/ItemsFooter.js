import React, { Component } from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ItemsFooter extends Component {
  render() {
    return (
        <View style={{flex:1.40,flexDirection:'row'}}>
        <View style={styles.viewLeft}> 
            <Icon color={'black'} name={'heart'} size={25} style={{marginRight:8}} />
            <Icon color={'black'} name={'comment'} size={25} style={{marginRight:8}} />
            <Icon color={'black'} name={'share'} size={25}  />
        </View>
        <View style={styles.viewRight}>
            <Icon color={'black'} name={'ellipsis-h'} size={35} />
            
        </View>
    </View>
    );
  }
}

const styles={
    viewLeft:{
        flex:8,
        flexDirection:'row', 
        alignItems:'center', 
        paddingLeft:10
    },
    viewRight:{
        flex:2,
        justifyContent:'center', 
        alignItems:'flex-end',
        paddingRight:10 
    }
}

export default ItemsFooter;

