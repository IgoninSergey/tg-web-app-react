import { useEffect, useState } from 'react'
import './App.css'
const tg = window.Telegram.WebApp;

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <>
      <div>test
        <button onClick={onClose}>Тест</button>
      </div>
    </>
  )
}

export default App
