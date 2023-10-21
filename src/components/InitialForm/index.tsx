import React, { useState, useEffect } from 'react'
import { Button, Form, Select } from 'antd'
import { createTheme, useStyleRegister } from '@ant-design/cssinjs'
import { formCss } from '../../styles/formStyle'
import arrow from './arrow.svg'
import error from './error.svg'
import { InitialFormProps } from '../../types/interfaces'
import { sortStr } from '../../features/sortString'
import ErrorText from '../ErrorText'
import { UserInfoType } from '../../types/type'
import { ErrorTextType } from '../../types/interfaces'

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const { Option } = Select

const validateMessages = {
  // eslint-disable-next-line
  required: '${label} is required!',
  types: {
    // eslint-disable-next-line
    email: '${label} is not a valid email!',
  },
  pattern: {
    // eslint-disable-next-line
    mismatch: '${label} is invalid',
  },
}

const InitialForm: React.FC<InitialFormProps> = ({ continueHandle }) => {
  useStyleRegister(
    {
      theme: createTheme(() => ({})),
      token: {},
      path: ['.signup-form'],
    },
    () => ({
      '.signup-form': formCss,
    })
  )
  const onFinish = (values: UserInfoType) => {
    continueHandle(values)
  }
  const [countries, setCountries] = useState<any>([])
  useEffect(() => {
    fetch(
      'https://restcountries.com/v3.1/independent?status=true&fields=name,cca2'
    )
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error))
  }, [])
  const [form] = Form.useForm()
  const [submittable, setSubmittable] = useState(false)
  const values = Form.useWatch([], form)
  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true)
      },
      () => {
        setSubmittable(false)
      }
    )
  }, [form, values])
  const formData: ErrorTextType[] = [
    {
      label: 'Username',
      name: 'username',
      rules: [{ 'required': true, 'min': 4, 'max': 12 }],
      placeholder: 'Input username',
    },
    {
      label: 'Email',
      name: 'email',
      rules: [{ 'required': true, 'type': 'email' }],
      placeholder: 'Input email',
    },
    {
      label: 'Phone',
      name: 'phone',
      rules: [
        {
          'required': true,
          'pattern':
            /^\+?([0-9]{1,4})?[-. ]?(\()?([0-9]{1,3})\)?[-. ]?([0-9]{1,4})[-. ]?([0-9]{1,9})$/,
        },
      ],
      placeholder: 'Input phone number',
    },
  ]
  return (
    <Form
      name='basic'
      layout='vertical'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
      validateMessages={validateMessages}
      className='signup-form'
      form={form}
      feedbackIcons={() => {
        return {
          error: (
            <img
              src={error}
              alt='error img'
              style={{ verticalAlign: 'middle' }}
            />
          ),
          success: <></>,
        }
      }}
    >
      {/* <ErrorText label='Username' name='username' /> */}
      {/* <Form.Item<UserInfoType>
        hasFeedback
        label='Username'
        name='username'
        rules={[{ required: true, min: 4, max: 12 }]}
      >
        <Input placeholder='Input username' />
      </Form.Item>

      <Form.Item<UserInfoType>
        hasFeedback
        label='Email'
        name='email'
        rules={[{ required: true, type: 'email' }]}
      >
        <Input placeholder='Input email' />
      </Form.Item>

      <Form.Item<UserInfoType>
        hasFeedback={true}
        label='Phone'
        name='phone'
        rules={[
          {
            required: true,
            pattern:
              /^\+?([0-9]{1,4})?[-. ]?(\()?([0-9]{1,3})\)?[-. ]?([0-9]{1,4})[-. ]?([0-9]{1,9})$/,
          },
        ]}
      >
        <Input placeholder='Input phone number' />
      </Form.Item> */}
      {formData.map((formItem: ErrorTextType) => <ErrorText {...formItem} />)}
      <Form.Item<UserInfoType>
        label='Country'
        name='country'
        rules={[{ required: true, message: 'Please choose your country!' }]}
      >
        <Select
          placeholder='Select country'
          suffixIcon={<img src={arrow} alt='Your SVG' />}
        >
          {sortStr(countries).map((country: any) => (
            <Option key={country.cca2} value={country.name.official}>
              {country.name.common}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type='text' block htmlType='submit' disabled={!submittable}>
          Continue
        </Button>
      </Form.Item>
    </Form>
  )
}

export default InitialForm
