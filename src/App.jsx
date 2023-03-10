import { useState, useEffect } from 'react'
import './App.css';
import Loading from './components/Loading';
import Sayohatlar from './components/Sayohatlar';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';
const urd = 'https://jsonplaceholder.typicode.com/posts';



function App() {

  const [loading, setLoading] = useState(false)
  const [sayohatlar, setSayohatlar] = useState([]);
  


  const fetchSayohatlar = async () => {
    setLoading(true);
    try {
      const resp = await fetch(urd);
      const data = await resp.json();
      console.log(data);
      setLoading(false);
      setSayohatlar(data);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
  fetchSayohatlar()
  }, [])
  
 

  const ochirish = (id) => {
    const YangiSayohatlar = sayohatlar.filter((item) => item.id !== id)
    setSayohatlar(YangiSayohatlar)
} 


  // const removeItem = (id) => {
  //   const newTours = tours.filter((tour) => tour.id !== id)
  //   setTours(newTours)
  // }





  
  if (loading) {
    return (
      <>
      <Loading />
      </>
  )
}

  // if (tours.length === 0) {
  //   return (
  //     <main>
  //       <div className='title'>
  //         <h2>no tours left</h2>
  //         <button className='btn' onClick={() => fetchTours()}>
  //           refresh
  //         </button>
  //       </div>
  //     </main>
  //   )
  // }
  



  return (
    <div >
   {/* <Tours tours={tours} removeItem={removeItem} /> */}
      <h2>hello</h2>
     <Sayohatlar sayohatlar={sayohatlar} ochirish={ochirish} />
    </div>
  )
}

export default App
