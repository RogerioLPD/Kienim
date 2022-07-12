import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { Link,useNavigate} from 'react-router-dom';
import { Button, Grid,Paper,TextField } from '@material-ui/core';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDbRdpi4uFMADzC32Lb4hL-1CxNAogVuZQ",
    authDomain: "kienim-88c11.firebaseapp.com",
    projectId: "kienim-88c11",
    storageBucket: "kienim-88c11.appspot.com",
    messagingSenderId: "744060958744",
    appId: "1:744060958744:web:750b5bc8e094e43e0feb6d"
};

 initializeApp(firebaseConfig);

const Login = () => {

    const paperstyle={padding :50 ,height:'40vh',width:430,margin:"110px 100px 100px 140px",borderradius:10}
    const [user, setUser] = useState(null);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const navigate=useNavigate();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, user => {
          setUser(user)
        })
      }, [])
    


    const onLogin = () => {
        setLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem('token', userCredential._tokenResponse.idToken);
                navigate('/Remap')
            })
            .catch(e => alert(e.message))
            .finally(() => setLoading(false))
    }

    return (
        <Grid>
       <Paper  className="paper" elevation={14} style={paperstyle}>
            <Grid align='center'>
            <h2>Log In</h2>
            
                <TextField id="outlined-basic" label="Email" variant="outlined"  required fullWidth
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        
                    />
                
                <p></p>

                    <TextField id="outlined-basic" label="Password" variant="outlined" type='password' required fullWidth
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        
                        
                    />
               
                <p></p>
                    <Button type='Login' color='primary' variant="contained"  onClick={onLogin} fullWidth>  {loading ? 'Logging you in ...' : 'Login'}</Button>
                
                    <p></p>
                    <Link to="/signup">
                        Don't have an account?
                    </Link>
             
            </Grid>
        </Paper>
            </Grid>
    )
}

export default Login;