import './App.css';
import Navbar from './Navbar';
import Leftbar from './Leftbar';
import Center from './Center';
import Rightbar from './Rightbar';
import Footer from './Footer';

function App() {
  return (
    <body>
      
      <Navbar />
      <main>
        <Leftbar />
        <Center />
        <Rightbar />
      </main>
      <Footer />
      
      
    </body>

  );
}

export default App;
