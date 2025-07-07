import { useState } from 'react'
import Layout from './components/layout/layout.jsx'
import Title from './components/title/title.jsx'
import Card from './components/card/card.jsx'
import Form from './components/form/form.jsx'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Title/>
        <Card>
          <Form>
              
          </Form>
        </Card>
      </Layout>
    </>
  )
}

export default App
