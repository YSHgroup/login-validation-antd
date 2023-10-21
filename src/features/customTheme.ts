import type { ThemeConfig } from 'antd'
import { mainColor } from '../styles/appStyle'
const defaultTextColor = '#413C5F'

const customTheme: ThemeConfig = {
  token: {
    colorTextBase: defaultTextColor,
    fontFamily: '"Inter", sans-serif'
  },
  components: {
    Steps: {
      dotCurrentSize: 16,
      dotSize: 16,
    },
    Select: {
      clearBg: mainColor,
      colorPrimary: 'transparent',
      colorTextPlaceholder: '#C0BCDF',
      colorPrimaryHover: 'transparent',
    },
    Form: {
      labelColor: 'white',
      colorError: '#DA2121'
    },
    Input: {
      colorTextPlaceholder: '#C0BCDF',
      hoverBorderColor: 'transparent',
      activeBorderColor: 'transparent',
    },
    Button: {
      colorText: '#8B85B1',
      fontWeight: 500,
      fontSize: 24,
      controlHeight: 60,
    }
  }
}

export default customTheme