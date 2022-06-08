import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';


function Home({user, handleLogout}) {
    const navigate = useNavigate();



    // function handleLogout() {
    //     fetch(`/api/users/logout`)
    //     .then( res => res.json())
    //     .then( data => {
    //       console.log(data)
    //       setUser(null)})
    //       localStorage.clear()
    //       navigate('/');
    //   }
    
    return ( 
        <div className='home-container'>
            <div className='app-title'>
                <h1>Ear Sharpener</h1>
            </div>
            {user ? 
                <div className='welcome-login'> 
                <h4>Welcome, {user.name}</h4>
                <Button variant="text" color="error" onClick={() => handleLogout()}>Logout</Button>
                </div> 
            : 
            <div className='welcome-login'>
                <Button onClick={() => navigate('/login')}>Login</Button>
            </div>
            }
            <div className='exercise-links-container'>
                <div className='exercises-link'>
                    <a href='/exercises/chord_practice' className='home-link'>Chord Exercise</a>
                    <div className="noot-1">
                        &#9835; 
                    </div>
                    <div className="noot-2">
                        &#9833;
                    </div>
                    <div className="noot-3">
                        &#9834;
                    </div>
                    <div className="noot-4">
                        &#9836;
                    </div>
                    <div className="noot-5">
                        &#9835;
                    </div>
                </div>
                <div className='exercises-link'>
                    <a href='/exercises/pitch_practice' className='home-link'>Pitch Exercise</a>
                    <div className="noot-6">
                        &#9835; 
                    </div>
                    <div className="noot-7">
                        &#9833;
                    </div>
                    <div className="noot-8">
                        &#9834;
                    </div>
                    <div className="noot-9">
                        &#9836;
                    </div>
                    <div className="noot-10">
                        &#9833;
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Home;