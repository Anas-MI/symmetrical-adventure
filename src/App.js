import React from 'react'
import logo1 from './assets/img/logo1.png'
import { ArrowLeftOutlined } from '@ant-design/icons'
import FormCard from './components/formCard'

const App = () => {
  return (
    <React.Fragment>
      <section id="into-section">
        <div className="row section-row">
          <div className="col-lg-6 left-side">
            <div className="d-flex justify-content-around align-items-center h-100 flex-column">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-center align-items-center">
                  <ArrowLeftOutlined style={{color: '#A7A8AC'}} /> 
                  <img src={logo1} width="30" alt="logo" style={{margin: '0 16px'}} /> 
                  <p className="text-uppercase fw-bold m-0" style={{fontSize: '10px', fontWeight: '600', color: '#8D5719', borderRadius: '4px', background: '#F8E09C', padding: '3px 9px'}}>Test mode</p>
                </div>
                <div className="mt-4" style={{marginLeft: '60px'}}>
                  <h6 style={{color: '#A7A8AC'}}>Scooter reservation</h6>
                  <h1 style={{color: '#fff', fontWeight: '600'}}>$1.00</h1>
                </div>
              </div>

              <div className="justify-content-center align-items-center w-100 copyrights">
                <p style={{color: '#626367', fontSize: '12px'}}>Powered by <span style={{fontWeight: '600'}}>stripe</span></p>
                <p style={{color: '#626367'}} className="ml-2 mr-2">|</p>
                <p style={{color: '#626367', fontSize: '12px'}}>Terms Privacy</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 right-side">
            <div className="d-flex align-items-center h-100 right-side-section">
              <FormCard />
            </div>
          </div>
        </div>

        <div className="row mobile-copyrights">
          <div className="d-flex justify-content-center align-items-center w-100">
            <p style={{color: '#626367', fontSize: '12px'}}>Powered by <span style={{fontWeight: '600'}}>stripe</span></p>
            <p style={{color: '#626367'}} className="ml-2 mr-2">|</p>
            <p style={{color: '#626367', fontSize: '12px'}}>Terms Privacy</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default App;