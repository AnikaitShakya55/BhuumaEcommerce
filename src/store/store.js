import {createSlice,configureStore} from '@reduxjs/toolkit';

const counterSlice =createSlice({
    name:'counter',
    initialState:{countVal:0},
    reducers:{
        addCount:(state)=>{
            state.countVal = state.countVal +1 
        }
    }
})
export const {addCount} = counterSlice.actions;


const authSlice = createSlice({
    name: 'auth',
    initialState: { isAuthenticated: false, email: null, token: null },
    reducers: {
        login: (state, action) => {
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('token', action.payload.token);
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            state.email = null;
            state.token = null;
            state.isAuthenticated = false;
        }
    }
});

const authSlice = createSlice({
    name:'auth',
    initialState:{isAuthenticated:false,email:null,token:null},
    reducers:{
        login:(state,action)=>{
            localStorage.setItem('email',action.payload.email)
            localStorage.setItem('token',action.payload.token)
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        }
    }

})


export const {login,logout} = authSlice.actions;


const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        auth:authSlice.reducer
    }
})

export default store;