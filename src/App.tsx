import styles from './App.module.css'
import {Header} from "./compoentns/Header/Header.tsx";
import MainRoutesNode from "./compoentns/MainRoutesNode/MainRoutesNode.tsx";
import Footer from "./compoentns/Footer/Footer.tsx";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.pagesContainer}>
        <MainRoutesNode />
      </div>
      <Footer />
    </div>
  )
}

export default App
