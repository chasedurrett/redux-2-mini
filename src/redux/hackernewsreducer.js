import axios from 'axios'



const initialState = {
  loading: false,
  articles: [],
};


export const actions = {
  REQUEST_TYPE="REQUEST_TYPE"
}


requestArticles(){

}


export default function reducer(state = initialState, action) {
  return state;
}
