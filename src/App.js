import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import Homepage from './customer/Pages/HomePage/Homepage';


function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
