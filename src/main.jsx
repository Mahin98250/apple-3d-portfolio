import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'

function App() {
  return (
    <main style={{minHeight:'100vh',background:'#050816',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'sans-serif',padding:'2rem',textAlign:'center'}}>
      <div>
        <h1 style={{fontSize:'4rem',marginBottom:'1rem'}}>Apple Inspired 3D Portfolio</h1>
        <p style={{fontSize:'1.2rem',opacity:0.8}}>Portfolio deployment is now working successfully.</p>
      </div>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
