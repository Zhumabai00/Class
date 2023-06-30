import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    // axios.get('https://jsonplaceholder.typicode.com/users')
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setUsers(response.data);
      })
  }
  useEffect(() => {
    getUsers()
  }, [])
  const [value, setValue] = useState('');

  const filterUsers = users.filter(item => {
    return item.title.toLowerCase().includes(value.toLocaleLowerCase())
  })
  return (
    <>
      <div className="app">
        <div className="form">
          <input type="text" placeholder='Search the user' className='input'
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="user">
          {
            filterUsers.map((item) => {
              return (
                <div className="">
                  <h3 key={item.id}>Товар {item.title}</h3>
                  <br />
                  <span>Цена/ {item.price * 85} com</span>
                  <br />
                  <img src={item.image} alt="" />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
