import {createSlice} from "@reduxjs/toolkit"
import { fetchPostsThunk } from "./postsThunk";

const initialState = {
    posts:[],
    loading:false,
}

export const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        setLoading:(state,action)=>{
            state.loading=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPostsThunk.pending, (state,action)=>{
            state.loading = true;
        })
        .addCase(fetchPostsThunk.fulfilled, (state, action )=>{
            state.loading=false;
            state.posts = action.payload.data;
        }).addCase(fetchPostsThunk.rejected, (state)=>{
            state.loading = false;
        });
    }
})

export const {setLoading} = postsSlice.actions;
export default postsSlice.reducer;