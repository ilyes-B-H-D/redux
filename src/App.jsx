import Profile from './Profile'
import UserForm from './UserForm'
import { useDispatch } from 'react-redux'
import {fetchPostsThunk} from './store/posts/postsThunk'
import { useSelector } from 'react-redux'
import { setLoading } from './store/posts/postsSlice'

function App() {
  const dispatch = useDispatch();
  const postsSlice = useSelector((state)=>state.posts)
  return (
    <div className="App">
      <Profile/>
      <UserForm/>
      <h1> posts </h1>
      <button onClick={()=>{
        dispatch(setLoading(true))
        dispatch(fetchPostsThunk())
      }
       }> fetch posts </button>
      {postsSlice.loading && <div>
        Loading posts ... 
      </div> }
      {postsSlice.posts.map((p)=> 
      <div key={p.id}>
        <div> {p.id} </div>
        <div> {p.title} </div>
      </div>
      )}
    </div>
  )
}

export default App
