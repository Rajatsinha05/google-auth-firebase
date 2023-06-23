
import './App.css';
import { googleauth, logout } from './Config';

function App() {
  const handlesignup=()=>{
    googleauth()
    .then((user)=>{
      console.log(user.user.providerData[0].email
        )
  }
    )
}

  const handlesignout=()=>{
    logout().then(()=>{
      console.log('logged out')
    })
  }
  return (
    <div className="App">
      <button onClick={handlesignup} >Sign in with Google</button>
      <button  onClick={handlesignout}>logout</button>
    </div>
  );
}

export default App;
