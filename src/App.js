import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
// import ListMovies from './components/ListMovies';
import RealtimeMovies from './components/RealtimeMovies';

function App() {
  return (
    <main className="container">
      {/* <ListMovies /> */}
      <RealtimeMovies />
      <AddMovie />
      <EditMovie />
    </main>
  );
}

export default App;
