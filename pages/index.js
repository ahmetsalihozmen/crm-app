import styles from '../styles/Home.module.css'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { db } from './api/hello'
import { setCookies } from 'cookies-next'

  /* post request that sends username and password on body*/




export default function Home() {
  /* create 2 states named username and password*/
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const router = useRouter()

  const login = async (username, password) => {
    console.log(username, password)
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    const json = await response.json();
    setToken(json.token)

    if (json.token === 'admin') {
      router.push('/adm')
      setCookies('token', json.token)
    }
    else if (json.token) {
      router.push('/customer')
      setCookies('token', json.token)
    }
  }

  return (

    <div className={styles.container}>
      <h1 className='text-center'>CRM</h1>
      <Form inline>
        <FormGroup>
          <Label
            for="exampleEmail"
            hidden
          >
            Username
          </Label>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            type="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label
            for="examplePassword"
            hidden
          >
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>
        {' '}
          <Button onClick={() => login(username,password)} className='d-flex  m-auto justify-content-center'>
            Submit
          </Button>
      </Form>
    
    </div>
    
  )
}


export async function getStaticProps ({ params, res }) {
  const job = await db
    .select("*")
    .from("customer")
    .where({ customerid: 1 })
    .first();


  return {
    props: { job },
  };
}