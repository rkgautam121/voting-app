import React from "react";
import { useHistory } from "react-router-dom";
// import Button from '@mui/material/Button';
const Home = () =>{
    const history = useHistory();

    const handleHome = () =>{
        history.push('/verification')
    }

    return(
        <div className="Home">
            <h2 className="text-center mt-2">Welcome to voting app</h2>
            <div className="text-center mt-3">
                <button className="btn btn-warning mb-3" onClick={handleHome}>Get started</button>
            </div>

            {/* <Button variant="contained">Get started</Button> */}

        </div>
    )
}

export default Home;