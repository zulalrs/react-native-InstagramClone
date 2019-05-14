import React, {Component} from 'react';
import {View,Text,Dimensions,Image} from 'react-native';
import ItemsHeader from './ItemsHeader';
import ItemsFooter from './ItemsFooter';

const {width, height}=Dimensions.get('window');
const itemHeight=height*6.6/10;
class Items extends Component{
    
    render(){
        
        return(
            <View style={styles.viewStyle}>
                
                <ItemsHeader />

                <View style={{flex:7}}>
                    <Image style={{flex:1}} source={{uri:'http://uzayveevren.com/wp-content/uploads/2018/07/oe85CRY-space-wallpaper-1920x1080.jpg'}} />
                </View>

                <ItemsFooter />
               
                <Text style={{paddingLeft:10}}>{this.props.item.title}</Text>
                
            </View>
        );
    }
}

const styles={
    viewStyle:{
        flex: 1,
        width:width, 
        height:itemHeight, 
        borderBottomWidth:2,
        borderColor:'lightgray',
        marginBottom:10
    }
}

export default Items;