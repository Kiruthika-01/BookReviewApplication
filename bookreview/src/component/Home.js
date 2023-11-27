
import React from "react";
// import Footer from "../Footer";
import './Home.css';
import Button from '@mui/material/Button';
// import {useNavigate} from 'react-router-dom';
const Home = () => {
  return (
    <div className='home' style={{height:"100vh"}}>
       <pre>       <b>Welcome!</b><br/><b>Best Books available...</b></pre>
       <br/>

        <pre><Button className="button"
              type="submit"
            //   fullWidth
              variant="contained" 
              sx={{ mt: 3, mb: 2}}
            >
              Sign Up
            </Button> </pre>
             
    
    </div>
    
  );
}

export default Home;
