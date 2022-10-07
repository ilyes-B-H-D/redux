import { createAsyncThunk } from "@reduxjs/toolkit";
import {getPosts} from '../../utils/api';

export const fetchPostsThunk = createAsyncThunk("posts/fetch", () => {
    return getPosts();
});

fetchPostsThunk.fulfilled
