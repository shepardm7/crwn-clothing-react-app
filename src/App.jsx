import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// Redux
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
		// this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
		// 	if (userAuth) {
		// 		const userRef = await createUserProfileDocument(userAuth);
		//
		// 		userRef.onSnapshot(snapshot => {
		// 			setCurrentUser({
		// 				id: snapshot.id,
		// 				...snapshot.data()
		// 			});
		// 		});
		// 	} else {
		// 		setCurrentUser(userAuth);
		// 	}
		// 	// addCollectionAndDocuments(
		// 	// 	'collections',
		// 	// 	collectionsArray.map(({ title, items }) => ({ title, items }))
		// 	// );
		// });
	}, []);

	return (
		<div>
			<Header/>
			<Switch>
				<Route exact path="/" component={HomePage}/>
				<Route path="/shop" component={ShopPage}/>
				<Route path="/checkout" component={CheckoutPage}/>
				<Route
					path="/signin"
					render={() => (currentUser ? <Redirect to="/"/> : <SignInAndSignUpPage/>)}
				/>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
