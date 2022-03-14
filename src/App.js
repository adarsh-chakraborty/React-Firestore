import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import ListMovies from './components/ListMovies';
import RealtimeMovies from './components/RealtimeMovies';

function App() {
  return (
    <>
      {/* <ListMovies /> */}
      <RealtimeMovies />
      <AddMovie />
      <EditMovie />
    </>
  );
}

export default App;
