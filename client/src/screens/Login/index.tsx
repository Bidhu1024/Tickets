import { useState } from 'react'
import Login from './Login';
import Register from './Register';

const Main = () => {
    const [login,setLogin] = useState<boolean>(true)
  return (
    <div>
      {login? <Login setLogin={setLogin}/> : <Register setLogin={setLogin}/>}
    </div>
  )
}

export default Main;
