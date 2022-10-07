import { useSelector } from "react-redux";

const Profile = () => {
  const userSlice = useSelector((state) => state.user);
  return (
    <div className=""> 
      <div>{userSlice.id}</div> 
      <div>{userSlice.userName}</div>
      <div>{userSlice.email}</div>
    </div>
  );
};

export default Profile;
