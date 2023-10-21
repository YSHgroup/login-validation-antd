import React, {useState} from 'react'
import { Layout, Space, Steps } from 'antd'
import {
  createTheme,
  useStyleRegister,
} from '@ant-design/cssinjs'
import InitialForm from './components/InitialForm'
import PasswordForm from './components/PasswordForm'
import Review from './components/Review'
import { UserInfoType } from './types/type'
import { appStyle, layoutStyle, subLayoutStyle, headerStyle, contentStyle, siderStyle, footerStyle } from './styles/appStyle'
const { Header, Footer, Sider, Content } = Layout

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
      path: ['.signup-steps','.header', '.sider'],
    },
    () => (appStyle),
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
          <Sider className='sider' style={siderStyle} breakpoint="sm" collapsedWidth="0" width="calc(25vw - 24px)">
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
