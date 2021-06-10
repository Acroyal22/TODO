// import app from "firebase/app"
// import 'firebase/auth'
// import 'firebase/firebase-firestore'

//   var firebaseConfig = {
//     apiKey: "AIzaSyCOkHjdJaKcAugUMhs-14s5iUooebQcSo4",
//     authDomain: "todo-5dab4.firebaseapp.com",
//     projectId: "todo-5dab4",
//     storageBucket: "todo-5dab4.appspot.com",
//     messagingSenderId: "724722066378",
//     appId: "1:724722066378:web:2639e92491eab431b6e533"
//   };

// class Firebase {
// 	constructor() {
// 		app.initializeApp(firebaseConfig)
// 		this.auth = app.auth()
// 		this.db = app.firestore()
       
      
// 	}

// 	login(email, password) {
// 		return this.auth.signInWithEmailAndPassword(email, password)
// 	}

// 	logout() {
// 		return this.auth.signOut()
// 	}

// 	async register(name, email, password) {
// 		await this.auth.createUserWithEmailAndPassword(email, password)
// 		return this.auth.currentUser.updateProfile({
// 			displayName: name
// 		})
// 	}

// 	addQuote(quote) {
// 		if(!this.auth.currentUser) {
// 			return alert('Not authorized')
// 		}

// 		return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
// 			quote
// 		})
// 	}

// 	isInitialized() {
// 		return new Promise(resolve => {
// 			this.auth.onAuthStateChanged(resolve)
// 		})
// 	}

// 	getCurrentUsername() {
// 		return this.auth.currentUser && this.auth.currentUser.displayName
// 	}

// 	async getCurrentUserQuote() {
// 		const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
// 		return quote.get('quote')
// 	}
// }


// export default new Firebase()