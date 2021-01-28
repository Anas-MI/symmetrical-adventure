import React, { useState, useEffect } from 'react'
import logo1 from './assets/img/logo1.png'
import payment from './assets/img/payment.jpg'
import cvc from './assets/img/cvc.png'
import yourhandle from 'countrycitystatejson'
import { ArrowLeftOutlined, AppleFilled } from '@ant-design/icons'
import { Button, Divider, Form, Input, Select, message } from 'antd'
import InputMask from 'react-input-mask'

const { Option } = Select

const App = () => {
  const [state, setState] = useState({
    countryArray: []
  })

  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = () => {
    setState({
      countryArray: yourhandle.getCountries()
    })
  }

  const handleSubmit = (values) => {
    message.success('Payment done successfully!')
    console.log(values)
  }

  const cardSuffix = (
    <img src={payment} width="110" alt="payment"/>
  )

  const cvcSuffix = (
    <img src={cvc} width="22px" style={{marginRight: '-8px'}} alt="cvc"/>
  )

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
              <div className="form-card">
                <Button className="apple-btn" block><AppleFilled /> Pay</Button>
                <Divider plain style={{color: '#ACACAC'}}>Or pay with card</Divider>

                <Form onFinish={handleSubmit} layout="vertical">
                  <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Email is required' }]}>
                    <Input name="email" />
                  </Form.Item>

                  <Form.Item label="Card">
                    <Input.Group compact>
                      <Form.Item
                        name="cardNo"
                        noStyle
                        rules={[{ required: true, message: 'Card number is required' }]}
                      >
                        <Input name="card" type="number" placeholder="1234 1234 1234 1234" suffix={cardSuffix} />
                      </Form.Item>
                      <Form.Item
                        name="month"
                        noStyle
                        rules={[{ required: true, message: 'Month is required' }]}
                      >
                        <InputMask style={{ width: '50%', height: '32px', padding: '4px 11px' }} name="month" mask="99/99" maskChar=" " placeholder="MM/YY" />
                      </Form.Item>
                      <Form.Item
                        name="CVC"
                        noStyle
                        rules={[{ required: true, message: 'CVC is required' }]}
                      >
                        <Input type="password" maxLength="3" style={{ width: '50%' }} name="CVC" placeholder="CVC" suffix={cvcSuffix} />
                      </Form.Item>
                    </Input.Group>
                  </Form.Item>

                  <Form.Item name="name" label="Name on card" rules={[{ required: true, message: 'Name is required' }]}>
                    <Input name="name" />
                  </Form.Item>

                  <Form.Item label="Country or region">
                    <Input.Group compact>
                      <Form.Item
                        name="country"
                        noStyle
                        rules={[{ required: true, message: 'Country is required' }]}
                      >
                        <Select style={{ width: '100%' }} name="country" placeholder="Select country">
                          {
                            state.countryArray && state.countryArray.length > 0 && state.countryArray.map((country, index) => (
                              <Option key={index} value={country.name}>{country.name}</Option>
                            ))
                          }
                        </Select>
                      </Form.Item>
                      <Form.Item
                        name="zip"
                        noStyle
                        rules={[{ required: true, message: 'Zip code is required' }]}
                      >
                        <InputMask style={{ height: '32px', padding: '4px 11px' }} name="zip" mask="999999" maskChar=" " placeholder="ZIP" />
                      </Form.Item>
                    </Input.Group>
                  </Form.Item>

                  <Button className="pay-btn" htmlType="submit" block>Pay $1.00</Button>
                </Form>
              </div>
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