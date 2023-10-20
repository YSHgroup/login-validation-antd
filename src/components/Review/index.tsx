import React from 'react'
import { Button } from 'antd'
import {
  createTheme,
  useStyleRegister,
} from '@ant-design/cssinjs'
import { UserInfoType } from '../../utils/type'

interface InitialFormProps {
  finish: () => void,
  info: UserInfoType | undefined,
}

const Review: React.FC<InitialFormProps> = ({ finish, info }) => {
  useStyleRegister(
    {
      theme: createTheme(() => ({})),
      token: {},
      path: ['.review'],
    },
    () => ({
      '.review': {
        marginLeft: 'calc(50% - 20vw - 100px)',
        maxWidth: '400px',
        padding: '30px 20px',
        borderRadius: '20px',
        background: '#817CA5',
        '.row': {
          lineHeight: '40px',
          display: 'flex',
          '.label': {
            display: 'inline-block',
            color: '#CECAEB',
            textAlign: 'left',
            flex: 'none',
          },
          '.middle': {
            flexGrow: 1
          },
          '.value': {
            display: 'inline-block',
            textAlign: 'right',
            color: '#FFFFFF',
            flex: 'none',
          },
        },
        '.ant-btn': {
          width: '100%',
          height: '60px',
          fontSize: '24px',
          fontWeight: 500,
          color: '#413C5F',
          background:'white',
        },
        '.ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover':{
          background:'white',
          color: '#413C5F',
        }
      }
    }),
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
      <Button type="text" onClick={finish}>
        Complete
      </Button>
    </div>
  )
}

export default Review
