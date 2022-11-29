import './App.css';
import { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { createResource as fetchData } from './helper'

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState([null])
  let [message, setMessage] = useState('Search for Music!')

  useEffect(() => {
    if (searchTerm) {
      setData(fetchData(searchTerm))
    }
  }, [searchTerm])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
  }


  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Suspense fallback={<h1> Loading...</h1>}>
      <Gallery data={data} />
      </Suspense>
    </div>
  );
}



export default App;