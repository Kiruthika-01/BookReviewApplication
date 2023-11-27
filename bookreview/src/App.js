


		
		// 		import Home from "./component/Home";
		// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
		// import DrawerAppBar from "./component/Appbar";
		// import SignInSide from "./component/Login";
		
		// import SignUp from "./component/SignUp";
		// function App()
		// {
		// 		return(
				
		// 				<Router>
		// 		        <DrawerAppBar/>
		// 					<Routes>
		// 					<Route path="/" element={<Home/>} /> 
		// 		        <Route path="/signinside" element={<SignInSide/>} />
		// 		         <Route path="/signup" element={<SignUp/>} />
		// 					</Routes>
							
		// 				</Router>
				
		// 			)
		// 		}
		// 		export default App;


		import "./App.css";
		import {Routes,Route} from 'react-router-dom';
		import BookList from "./component/BookList";
		import BookDetails from "./component/BookDetails";
		import Navbar from "./component/Navbar";
		import Footer from "./component/Footer";
		import Favorites from "./component/Favorites";
		function App()
		{
		  return(
			<div className="App">
			  <Navbar/>
			  <Routes>
				<Route path="/" element={<BookList/>}/>
				<Route path="/books/:id" element={<BookDetails/>}/>
				<Route path="/favorites" element={<Favorites/>}/>
			  </Routes>
			  <Footer/>
			</div>
		  )
		}
		export default App;
