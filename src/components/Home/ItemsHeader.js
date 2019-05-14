import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';

class ItemsHeader extends Component {
  render() {
    return (
        <View style={{flex:1.40,flexDirection:'row'}}>
            <View style={styles.viewLeft}>
                <Image 
                style={styles.imgStyle}
                source={{uri:'https://i.pinimg.com/originals/1b/98/c5/1b98c55d8903f5048f81be686c32a899.jpg'}} 
                />
                <Text>Zülal Savrum</Text>
            </View>

            <View style={styles.viewRight }>
                <Text>2d</Text>
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
    imgStyle:{
        width:50,
        height:50,
        marginRight:8,
        borderRadius:25
    },
    viewRight:{
        flex:2,
        justifyContent:'center', 
        alignItems:'flex-end',
        paddingRight:10 
    }
}

export default ItemsHeader;
