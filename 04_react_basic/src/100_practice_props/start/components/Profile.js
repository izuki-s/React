import "./Profile.css";

const Profile = ({name = "joe Doe",age = "??",country = "Japan"}) => {
  return (
    <div className="profile">
    <h3>{`Name:${name}`}</h3>
    <p>{`Age:${age}`}</p>
    <p>{`Country:${country}`}</p>

    </div>
  );
};


export default Profile;