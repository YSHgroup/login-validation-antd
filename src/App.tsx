import React, {useState} from 'react'
import { Layout, Space, Steps } from 'antd'
import {
  createTheme,
  useStyleRegister,
} from '@ant-design/cssinjs'
import InitialForm from './components/InitialForm'
import PasswordForm from './components/PasswordForm'
import Review from './components/Review'
import { UserInfoType } from './utils/type'

const { Header, Footer, Sider, Content } = Layout
const layoutStyle: React.CSSProperties = {
  height:'100vh',
  background: `url(img/bg.svg)`,
  backgroundSize: 'cover',
}
const subLayoutStyle: React.CSSProperties = {
  background: `transparent`,
  padding: '24px 48px',
}

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#413C5F',
  height: 'auto',
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'transparent',
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'transparent',
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'transparent',
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'transparent',
}
const items  =  [
  {
    title: 'Initial info',
  },
  {
    title: 'Password screen',
  },
  {
    title: 'Review',
  },  
]

function App() {
  useStyleRegister(
    {
      theme: createTheme(() => ({})),
      token: {},
      path: ['.signup-steps','.header'],
    },
    () => ({
      '.header':{
        'h1':{
          fontSize:'36px',
          paddingTop:'50px',
          marginBottom:0,
          color:'#413C5F',
          fontWeight:500,
        },
        'p':{
          color:'#817CA5',
          fontSize:'20px',
          margin:'10px',
          lineHeight:'22px'
        }
      },
      '.signup-steps': {
        '.ant-steps-item': {
          '.ant-steps-item-container': {
            '.ant-steps-item-icon': {
              '.ant-steps-icon': {
                '.ant-steps-icon-dot': {
                  borderRadius:0
                }
              }
            }
          }
        },
        '.ant-steps-item-process':{
          '.ant-steps-item-icon':{
            '>.ant-steps-icon':{
              '.ant-steps-icon-dot': {
                background:'#5845DD'
              }
            }
          }
        },
        '.ant-steps-item-wait .ant-steps-item-icon >.ant-steps-icon .ant-steps-icon-dot':{
          background:'#C9C5E8'
        },
        '.ant-steps-item-finish .ant-steps-item-icon >.ant-steps-icon .ant-steps-icon-dot':{
          background:'#87839F'
        },
        '.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title':{
          color:'#817CA5'
        },
        '.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title': {
          color:'#817CA5'
        },
        '&.ant-steps-vertical >.ant-steps-item': {
          '.ant-steps-item-title':{
            lineHeight:'30px'
          },
          '.ant-steps-item-content':{
            minHeight:'36px'
          },
          '>.ant-steps-item-container>.ant-steps-item-tail::after':{
            width:0
          }
        },
        '.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title':{
          color:'#817CA5'
        },
        '.ant-steps-item-title': {
          fontSize:'14px'
        }
      },
    }),
  )
  const [step, setStep] =  useState<number>(0)
  const [info, setInfo] = useState<UserInfoType>()
  const handleNextStep = (data:UserInfoType) => {
    setInfo({
      ...info,
      ...data
    })
    setStep(step + 1)
  }
  const onFinish = () => {
    alert("You completed sign up successfully.")
    setStep(0)
  }
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout style={layoutStyle}>
        <Header style={headerStyle} className='header'>
          <h1>Super test form</h1>
          <p>{items[step]?.title}</p>
        </Header>
        <Layout hasSider style={subLayoutStyle}>
          <Sider style={siderStyle} breakpoint="sm" collapsedWidth="0" width="calc(25vw - 24px)">
            <Steps
              className="signup-steps"
              progressDot
              current={step}
              direction="vertical"
              items={items}
            />
          </Sider>
          <Content style={contentStyle}>
            <>{step===0&&<InitialForm continueHandle={handleNextStep} />}</>
            <>{step===1&&<PasswordForm continueHandle={handleNextStep} />}</>
            <>{step===2&&<Review info={info} finish={onFinish}/>}</>
          </Content>
        </Layout>
        <Footer style={footerStyle}></Footer>
      </Layout>
    </Space>
  )
}

export default App
