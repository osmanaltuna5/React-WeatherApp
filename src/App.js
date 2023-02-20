import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';

import { DataProvider } from './components/Content';

function App() {
  
 
  return (
    <div className='App'>
    <DataProvider>
      
      <Header/>
      
      <Weather/>

      
      
      
    </DataProvider>
    </div>
  );
}

export default App;
