import React from 'react'
import './App.css'
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
