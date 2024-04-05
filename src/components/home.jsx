import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <center>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"1px solid pink",borderRadius:"10px",width:"400px",height:"400px",padding:"1px",backgroundColor:"pink"}}>
      <h2>Welcome, {user}!</h2>
      <p>This is your home page.</p>
      <button onClick={logout} style={{border:"1px solid green",backgroundColor:"lightblue"}}>logout</button>
    </div>
    </center>
  );
};

export default Home;
