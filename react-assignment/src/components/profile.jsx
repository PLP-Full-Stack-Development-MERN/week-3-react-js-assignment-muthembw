import React from 'react';

function Profile(props){
  return(
    <div className="text-white-500">
      <h2>{props.name}</h2>
      <p>Email:{props.email}</p>
    </div>
  )
}
export default Profile