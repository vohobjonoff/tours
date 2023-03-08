import { useState, useEffect } from 'react'
import './App.css';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';



function App() {
  
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const removeItem = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }




  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  



  return (
    <div >
   <Tours tours={tours} removeItem={removeItem} />
      
    </div>
  )
}

export default App
