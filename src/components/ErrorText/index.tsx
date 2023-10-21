import React from 'react'
import { Form, Input } from 'antd'
import { UserInfoType } from '../../types/type'
import { ErrorTextType } from '../../types/interfaces'


const Index: React.FC<ErrorTextType> = ({label, name, rules, placeholder}) => {
//   const {label, name, rules, placeholder} = formItem;
    return (
    <>
      <Form.Item<UserInfoType>
        hasFeedback
        label={label}
        name= {name}
        rules={rules}
      >
        <Input placeholder={placeholder} />
      </Form.Item>
    </>
  )
}

export default Index
