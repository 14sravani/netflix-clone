const initialState = {
    token: localStorage.getItem('token'),
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, token: action.payload };
      case 'LOGOUT':
        return { ...state, token: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  