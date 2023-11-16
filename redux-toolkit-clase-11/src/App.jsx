

import { Provider, useSelector } from 'react-redux'
import store from './store/store'
import { Home } from './screens/home'
import { CountView } from './screens/count_view'


export const Layout = ({children}) =>{
  const theme = useSelector(state => state.theme.value)
  
return <div style={{backgroundColor:`${theme === 'dark' ? 'black' : 'white'}`}}>
  {children}
</div>
}
function App() {

  return (
    <>
    <Provider store={store}>
      {/* LAYOUT */}
      <Layout>
        <CountView /> 
        <Home />
      </Layout>
    </Provider>
    </>
  )
}

export default App
