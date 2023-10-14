// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import { useState } from 'react';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH
  const [value, setValue] = useState(0);

  const handleClick = (action) => {
    if (action === 'increment') {
      setValue((prevState) => prevState + 1);
    } else if (action === 'decrement') {
      setValue((prevState) => prevState - 1);
    } else if (action === 'reset') {
      setValue(0);
    }
  };

  const user = { displayName: 'Dr. T' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
      <h2>{value}</h2>
      <button type="button" onClick={() => handleClick('increment')}>Increment</button>
      <button type="button" onClick={() => handleClick('decrement')}>Decrement</button>
      <button type="button" onClick={() => handleClick('reset')}>Reset</button>
    </div>
  );
}

export default Home;
