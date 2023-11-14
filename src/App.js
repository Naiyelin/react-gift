import React, { useState } from "react";
import './App.css'
import { ListOfGif } from "./Components/ListOFGif/ListOfGif";
import { Link, Route, useLocation } from 'wouter'
import { Form } from './Components/Form/Form'
import { Input } from './Components/Input/Input'

function App () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const searchGif = (event) => {
    event.preventDefault()
    setKeyword(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/gif/${keyword}`)
  }

  return (
    <div className="App">
      <h1>Gif searcher</h1>
      <div className="searchBar">
        <Form onSubmit={onSubmit}>
          <Input
            searchGif={searchGif}
            keyword={keyword}
          />
        </Form>
        <button onClick={() => {
          setKeyword('')
          pushLocation(`/gif/`)
        }}>❌</button>
      </div>
      <h2>Most Popular GIF</h2>
      <ul>
        <li><Link to='/gif/colombia'>colombia</Link></li>
        <li><Link to='/gif/chile'>chile</Link></li>
        <li><Link to='/gif/venezuela'>Venezuela</Link></li>
      </ul>

      <section className="gif--grid">

        {/* <ListOfGif keyword={keyword}/> */}
        <Route
          component={ListOfGif}
          path='/gif/:keyword'
        />
      </section>
    </div>
  );
}

export { App };
