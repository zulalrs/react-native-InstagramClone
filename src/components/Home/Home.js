import React, { Component } from 'react';
import { Text,View, FlatList,TouchableOpacity,ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import {getPost} from '../../actions';
import Items from './Items';


class Home extends Component {
  
  state={
    end:10
  }
  componentDidMount() {
    this.props.getPost(0,this.state.end);
 }
  pagingButton(){
  return(
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
        this.setState({end:this.state.end+10})
        this.props.getPost(this.state.end,this.state.end+10)}}>
        <Text>Daha fazla</Text>
      </TouchableOpacity>
    </View>
    );
 }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {
        this.props.loading ?
        <ActivityIndicator /> :
        <FlatList
        data={this.props.posts}
        keyExtractor={(index)=>index.toString()}
        renderItem={({item,index})=>{
          return <Items key={index} item={item}/>
        }}
        ListFooterComponent={()=>this.pagingButton()}
      />
      }
      </View>
    );
  }
}

const styles={
  buttonStyle:{
    backgroundColor:'darkblue', 
    borderRadius:5,
    height:40,
    width:'40%',
    justifyContent:'center',
    alignItems:"center"
  }
}

const mapStateToProps=({postsResponse})=>{
  return {posts:postsResponse.posts,loading:postsResponse.loading}
}

export default connect(mapStateToProps,{getPost})(Home);