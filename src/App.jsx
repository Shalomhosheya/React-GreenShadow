import './App.css'
import LoginPage from './Pages/LoginPage'
import LoginSignupPage from './Pages/loginSignup'

function App() {
  
  return (
    <>
    <div className='main1'>
      <input type="checkbox" id="chk" aria-hidden="true"/>
		
     
      <div className="signup">
        
        <LoginSignupPage/>
       </div>

     <div className='login'>
      
     <LoginPage/>
     </div>
   
      
    </div>
     
    </>
  )
}

export default App
