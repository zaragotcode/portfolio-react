import React from 'react'

const Social = () => {
  return (
    <div className="home__social">

      <a 
        href="mailto:patrickmazara@hotmail.com" 
        className="home__social-icon" 
        target="_blank" rel="noreferrer">
        <i class="uil uil-envelope-edit"></i>      
      </a>

      <a 
        href="https://www.linkedin.com/in/patrickmazara/" 
        className="home__social-icon" 
        target="_blank" rel="noreferrer">
          <i class="uil uil-linkedin"></i>
      </a>

      <a 
        href="https://github.com/zaragotcode" 
        className="home__social-icon" 
        target="_blank" rel="noreferrer">
          <i class="uil uil-github"></i>
      </a>
    </div>
  )
}

export default Social