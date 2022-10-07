import { useDispatch } from "react-redux";
import { updateUsername, updateEmail } from "./store/user/userSlice";

const UserForm = () => {
    const dispatch = useDispatch();

  return (
    <form>
      <div>
        <label htmlFor="username">username</label>
        <input type="text" name="" id="username" onChange={(e)=>{
            dispatch(updateUsername(e.target.value))
        }} />
      </div>

      <div>
        <label htmlFor="email">email</label>
        <input type="email" name="" id="email" onChange={(e)=>{
            dispatch(updateEmail(e.target.value))
        }}  />
      </div>

      <button>Save</button>
    </form>
  );
};

export default UserForm;
