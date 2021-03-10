import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greetings;
if(familiar === true){
    greetings = <p>Welcome, My Friend</p>
}
else{
    greetings = <p>Who the hell are you?</p>
}
    return (
        <div>
            <div>
    <div>
      <h2>Greetings</h2>
      {greetings}
    </div>

    <div>
      <h2>Food</h2>

      {/* //using here ternary operator */}
      {familiar 
      ?
      <p>I will buy Food For You</p>
      : 
      <p>Lets eat his his whose whose?</p>
      }
    </div>

    <div>
        <h2>Connection</h2>
        {
            familiar && <p>Let's Join my Facebook</p>
        }
    </div>
  </div>

        </div>
    );
};

export default User;