import './assets/style/css/App.css';
import { PortfolioContainer } from './containers/PortfolioContainer';

function App() {
  return (
    <div id="app" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto px-10 py-20">
        <h1 className="text-3xl font-bold underline">Stefan Hone - Portfolio </h1>
        <hr></hr>
        <PortfolioContainer/>
      </div>
  </div>
  );
}

export default App;
