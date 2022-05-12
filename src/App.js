
import './App.css';
import Row from './components/row'
import Banner from './components/banner'
import url from './moviedb/repuest'

function App() {
  return (
    <div className="app">
      <Banner  Url = {url.fetchTrending} />
      <Row  title="Trending Movies" Url = {url.fetchTrending} poster={true} />
      <Row  title="Netflix Original"  Url = {url.fetchNetflixOriginal} poster={false}/>
      <Row  title="Top Rated Movies"  Url = {url.fetchTopRated} poster={false} />
      <Row  title="Action Movies"  Url = {url.fetchActionMOvie} poster={false} />
      <Row  title="Comedy Movies"  Url = {url.fetchComedyMovie} poster={false} />
      <Row  title="Horror Movies"  Url = {url.fetchHorrorMovie} poster={false} />
      <Row  title="Romance Movies"  Url = {url.fetchRomanceMovie} poster={false} />
      <Row  title="Documentries Movies"  Url = {url.fetchDocMovie} poster={false} />
    </div>  
  );
}

export default App;
