import "./App.css"

function App() {
  const name = import.meta.env.VITE_NAME
  const city = import.meta.env.VITE_CITY
  const languages = import.meta.env.VITE_LANGUAGES
  return (
    <div>
      <p>Hello i'm {name}</p>
      <p>I live in {city}</p>
      <p>And i LooOve {languages}</p>
    </div>
  )
}

export default App
