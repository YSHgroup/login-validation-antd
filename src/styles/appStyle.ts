export const mainColor = '#817CA5'

export const appStyle = {
  '.header': {
    'h1': {
      fontSize: '36px',
      paddingTop: '50px',
      marginBottom: 0,
      fontWeight: 500,
    },
    'p': {
      color: mainColor,
      fontSize: '20px',
      margin: '10px',
      lineHeight: '22px'
    }
  },
    '@media only screen and (max-width: 600px)': {
      '.sider': {
        display: 'none',
      }
    },
  '.signup-steps': {
    '.ant-steps-item': {
      '.ant-steps-item-container': {
        '.ant-steps-item-icon': {
          '.ant-steps-icon': {
            '.ant-steps-icon-dot': {
              borderRadius: 0
            }
          }
        }
      }
    },
    '.ant-steps-item-process': {
      '.ant-steps-item-icon': {
        '>.ant-steps-icon': {
          '.ant-steps-icon-dot': {
            background: '#5845DD'
          }
        }
      }
    },
    '.ant-steps-item-wait .ant-steps-item-icon >.ant-steps-icon .ant-steps-icon-dot': {
      background: '#C9C5E8'
    },
    '.ant-steps-item-finish .ant-steps-item-icon >.ant-steps-icon .ant-steps-icon-dot': {
      background: '#87839F'
    },
    '.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title': {
      color: mainColor
    },
    '.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title': {
      color: mainColor
    },
    '&.ant-steps-vertical >.ant-steps-item': {
      '.ant-steps-item-title': {
        lineHeight: '30px'
      },
      '.ant-steps-item-content': {
        minHeight: '36px'
      },
      '>.ant-steps-item-container>.ant-steps-item-tail::after': {
        width: 0
      }
    },
    '.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title': {
      color: mainColor
    },
    '.ant-steps-item-title': {
      fontSize: '14px'
    }
  },
}

export const layoutStyle: React.CSSProperties = {
  height: '100vh',
  background: `url(img/bg.svg)`,
  backgroundSize: 'cover',
}
export const subLayoutStyle: React.CSSProperties = {
  background: `transparent`,
  padding: '24px 48px',
}

export const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 'auto',
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'transparent',
}

export const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'transparent',
}

export const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'transparent',
}

export const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'transparent',
}
