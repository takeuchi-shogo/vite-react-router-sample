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
import Message from './pages/Message'
import State from './pages/State'


function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<About />} />
					<Route path="/message" element={<Message />} />
					<Route path="/state" element={<State />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
