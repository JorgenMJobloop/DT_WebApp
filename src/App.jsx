import './App.css'
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar.jsx';
// App.jsx blir hovedfilen vår, hvor all koden kjøres fra!
// All kode som ikke tilhører App.jsx, legges i f.eks Components/ mappen.
function App() {
  return (
    <>
      <NavBar></NavBar>
      <h3>
        Hello JSX (JavaScript & XML)
      </h3>
      <Hero>
      </Hero>

    </>
  )
}

export default App
