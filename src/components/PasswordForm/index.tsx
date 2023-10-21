import React, {useState, useEffect} from 'react'
import { Button, Form, Input } from 'antd'
import {
  createTheme,
  useStyleRegister,
} from '@ant-design/cssinjs'
import { UserInfoType } from '../../types/type'
import { formCss } from '../../styles/formStyle'
import { PasswordFormProps } from '../../types/interfaces'
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
  pattern: {
    mismatch:'${label} is invalid'
  },
}

const PasswordForm: React.FC<PasswordFormProps> = ({ continueHandle }) => {
  useStyleRegister(
    {
      theme: createTheme(() => ({})),
      token: {},
      path: ['.password-form'],
    },
    () => ({
      '.password-form':formCss
    }),
  )
  const onFinish = (values: any) => {
    continueHandle(values)
  }
  const [form] = Form.useForm()
  const [submittable, setSubmittable] = useState(false)
  const values = Form.useWatch([], form)
  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      },
    )
  }, [values])
  return (
    <Form
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="password-form"
      validateMessages={validateMessages}
      autoComplete="off"
      form={form}
    >
      <Form.Item<UserInfoType>
        label="Password"
        name="password"
        rules={[{ required: true, min:8, max:16 }]}
      >
        <Input.Password visibilityToggle={false} />
      </Form.Item>

      <Form.Item<UserInfoType>
        label="Repeat password"
        name="confirm_password"
        dependencies={['password']}
        rules={[
          { required: true,  },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password visibilityToggle={false} />
      </Form.Item>

      <Form.Item>
        <Button type="text" block htmlType="submit" disabled={!submittable}>
          Continue
        </Button>
      </Form.Item>
    </Form>
  )
}

export default PasswordForm;
