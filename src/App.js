import './styles.css'
import Header from './components/Header';
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import Main from "./components/Main";
import { PostProvider } from "./components/PostContext";



function App() {

  return (
    <section>
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;