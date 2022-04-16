import { Route, Routes } from 'react-router-dom'
import { CityForm } from './CityForm'
import { CountryForm } from './CountryForm'
import { Navigation } from './Navigation'
import { Home} from './Home'
export const AllRoutes = () => {

    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-country' element={<CountryForm />} />
                <Route path='/add-city' element={<CityForm />} />
            </Routes>
        </>
    )
}