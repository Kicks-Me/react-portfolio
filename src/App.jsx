import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import Navbar from './views/Navbar';
import Footer from './views/Footer';
import Dashboard from './views/Dashboard';

function App() {

  const clientQuery = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
      },
    },
  });

  return (
    <QueryClientProvider client={clientQuery}>
     <Router>
        <Navbar/>
        <div className='screen-full flex justify-center items-center'>
          <Routes>
            <Route exact path='/' Component={Dashboard}/>
            {/* <Route exact path='/product' Component={Products}/> */}
            {/* <Route exact path='/service' Component={Services}/> */}
            {/* <Route exact path='/education' Component={Education}/> */}
            {/* <Route exact path='/award' Component={Awards}/> */}
            {/* <Route exact path='/experience' Component={Experience}/> */}
            {/* <Route exact path='*' Component={Page404}/>  */}
          </Routes>
        </div>
        <Footer/>
      </Router>
    </QueryClientProvider>
  )
}

export default App
