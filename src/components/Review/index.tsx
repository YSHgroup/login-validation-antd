import React from 'react'
import { Button } from 'antd'
import {
  createTheme,
  useStyleRegister,
} from '@ant-design/cssinjs'
import { reviewStyle } from '../../styles/reviewStyle'
import { ReviewFormProps } from '../../types/interfaces'

const Review: React.FC<ReviewFormProps> = ({ finish, info }) => {
  useStyleRegister(
    {
      theme: createTheme(() => ({})),
      token: {},
      path: ['.review'],
    },
    () => (reviewStyle),
  )
  
  return (
    <div className="review">
      <div className="row">
        <div className="label">Username</div>
        <div className="middle"></div>
        <div className="value">{info?.username}</div>
      </div>
      <div className="row">
        <div className="label">Email</div>
        <div className="middle"></div>
        <div className="value">{info?.email}</div>
      </div>
      <div className="row">
        <div className="label">Phone number</div>
        <div className="middle"></div>
        <div className="value">{info?.phone}</div>
      </div>
      <div className="row">
        <div className="label">Country</div>
        <div className="middle"></div>
        <div className="value">{info?.country}</div>
      </div>
      <Button type="text" block onClick={finish}>
        Complete
      </Button>
    </div>
  )
}

export default Review
