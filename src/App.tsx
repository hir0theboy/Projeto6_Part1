import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { EstiloGlobal } from './styles/styles'
import { Home } from './pages/Home/Home'
import { Perfil } from './pages/Perfil/Perfil'
import { RestaurantesProvider } from './RestaurantesAPI/RestaurantesAPI' // Importar o Provider
import { store } from './store'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil',
    element: <Perfil />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <RestaurantesProvider>
        <RouterProvider router={rotas} />
      </RestaurantesProvider>
    </Provider>
  )
}

export default App
