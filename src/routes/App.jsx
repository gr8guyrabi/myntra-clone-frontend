import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import ItemLoading from '../components/ItemLoading'

function App() {
    const { currentlyFetching } = useSelector((state) => state.fetchStatus)
    return (
        <>
            <Header />
            {currentlyFetching ? <ItemLoading /> : <Outlet />}
            <Footer />
        </>
    )
}

export default App
