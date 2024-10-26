import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/itemListContainer'
function App() {

  return (
    <div>
      <NavbarComponent />
      <ItemListContainer greeTing='Bienvenidos.' texto='otra prop'/>
    </div>
  )
}

export default App
