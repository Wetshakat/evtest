import { useState } from 'react'
import './App.css'

const MyApp = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]); 
  const [userPost, setUserpost] = useState([]);

  useEffect(()=>{const fetchData = async () =>
    {const postsResponse = await fetchPost();
    const usersResponse = await fetchUsers();
    setPosts(postsResponse.data);
    setUserpost( postsResponse.data)
  };
  fetchData(`https://jsonplaceholder.typicode.com/users`);
},[]);
}

return(
<div>
  <p>{user.name}</p>
  <button onClick={}>follow</button>
</div>

);
  export default MyApp;