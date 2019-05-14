import { GET_POSTS  } from '../actions/types'; 

const INITIAL_STATE = {
    posts: [],
    loading:true
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_POSTS:
          return { ...state, posts: state.posts.concat(action.payload),loading:false};
    default:
        return state;
    }
  };