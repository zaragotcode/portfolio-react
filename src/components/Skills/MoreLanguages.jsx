import React from 'react'

const MoreLanguages = () => {
  return (
    <div className="skills__content">
    <div className="skills__box">
      <div className="skills__group">

        <div className="skills__data">
          <i class="bx bxl-react"></i>
          <div>
            <h3 className="skills__name">React</h3>
          </div>
        </div>

        <div className="skills__data">
          <i class="bx bxl-nodejs"></i>
          <div>
            <h3 className="skills__name">Node.js</h3>
          </div>
        </div>

        <div className="skills__data">
          <i class="bx bxl-typescript"></i>
          <div>
            <h3 className="skills__name">TypeScript</h3>
          </div>
        </div>

        <div className="skills__data">
          <i class="bx bxl-postgresql"></i>
          <div>
            <h3 className="skills__name">PostgreSQL</h3>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default MoreLanguages