import Footer from "../../components/organisms/footer"
import Header from "../../components/organisms/header"
import Main from "../../components/organisms/main"
import './styles.css'

export const Index = () => {

  return (
    <div className='wrapper'>
      <div className="wrapper__container">
      <Header />
      <Main />
      <Footer />
      </div>
    </div>
  )
}