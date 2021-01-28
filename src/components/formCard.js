import React, { useState, useEffect } from 'react'
import payment from '../assets/img/payment.jpg'
import cvc from '../assets/img/cvc.png'
import yourhandle from 'countrycitystatejson'
import { AppleFilled } from '@ant-design/icons'
import { Button, Divider, Form, Input, Select, message } from 'antd'
import InputMask from 'react-input-mask'

const { Option } = Select

const FormCard = () => {
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
      <div className="form-card">
        <Button className="apple-btn" block><AppleFilled /> Pay</Button>
        <Divider plain style={{color: '#ACACAC'}}>Or pay with card</Divider>

        <Form onFinish={handleSubmit} layout="vertical">
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter valid email address', type: 'email' }]}>
            <Input type="email" name="email" />
          </Form.Item>

          <Form.Item label="Card information">
            <Input.Group compact>
              <Form.Item
                name="cardNo"
                noStyle
                rules={[{ required: true, message: 'Please enter valid 16 digit card number', len: 16 }]}
              >
                <Input name="card" type="number" placeholder="1234 1234 1234 1234" suffix={cardSuffix} />
              </Form.Item>
              <Form.Item
                name="expiry"
                noStyle
                rules={[{ required: true, message: 'Please enter card expiry date' }]}
              >
                <InputMask style={{ width: '50%', height: '32px', padding: '4px 11px' }} name="expiry" mask="99/99" maskChar=" " placeholder="MM/YY" />
              </Form.Item>
              <Form.Item
                name="CVC"
                noStyle
                rules={[{ required: true, message: 'Please enter CVC code' }]}
              >
                <Input type="password" maxLength="3" style={{ width: '50%' }} name="CVC" placeholder="CVC" suffix={cvcSuffix} />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Form.Item name="name" label="Name on card" rules={[{ required: true, message: 'Please enter valid name', pattern: /^[a-zA-Z ]*$/ }]}>
            <Input name="name" />
          </Form.Item>

          <Form.Item label="Country or region">
            <Input.Group compact>
              <Form.Item
                name="country"
                noStyle
                rules={[{ required: true, message: 'Please select your country' }]}
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
                rules={[{ required: true, message: 'Please enter your zip code' }]}
              >
                <InputMask style={{ height: '32px', padding: '4px 11px' }} name="zip" mask="999999" maskChar=" " placeholder="ZIP" />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Button className="pay-btn" htmlType="submit" block>Pay $1.00</Button>
        </Form>
      </div>
    </React.Fragment>
  )
}

export default FormCard;
