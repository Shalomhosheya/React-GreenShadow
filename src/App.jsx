import './App.css'
import LoginPage from './Pages/LoginPage'
import LoginSignupPage from './Pages/loginSignup'

function App() {
  
  return (
    <>
    <div className='main1'>
     <div className="signup">
      
     <LoginPage/>
     </div>
    
     <div className="login">
        
      <LoginSignupPage/>
     </div>
      
    </div>
     
    </>
  )
}

export default App
