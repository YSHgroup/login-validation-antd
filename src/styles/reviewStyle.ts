import { mainColor } from "./appStyle"

export const reviewStyle: any = {
    '.review': {
      marginLeft: 'calc(50% - 20vw - 100px)',
      maxWidth: '400px',
      padding: '30px 20px',
      borderRadius: '20px',
      background: mainColor,
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
  }