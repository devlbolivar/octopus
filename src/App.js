import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import credentials from './credentials';

function App() {
  const url = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;
  return (
    <Map
      googleMapURL={url}
      containerElement={<div style={{height: 400}} />}
      mapElement={<div style={{height: '100%'}}/>}
      loadingElement={<p>Cargando</p>}
    />
  );
}

export default App;
