const Profile = ({ name, email }) => {
    return (
      <div className="border p-4 m-4 rounded-lg shadow-lg max-w-sm mx-auto">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    );
  };
  
  export default Profile;
  