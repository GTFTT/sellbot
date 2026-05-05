import styles from './App.module.css'
import {Header} from "./compoentns/Header/Header.tsx";
import MainRoutesNode from "./compoentns/MainRoutesNode/MainRoutesNode.tsx";
import Footer from "./compoentns/Footer/Footer.tsx";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainRoutesNode />
      <Footer />
    </div>
  )
}

export default App
