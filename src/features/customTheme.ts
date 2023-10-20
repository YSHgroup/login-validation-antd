import type { ThemeConfig } from 'antd'

const customTheme: ThemeConfig = {
  token: {
    colorTextBase: '#FFFFFF',
    fontFamily: '"Inter", sans-serif',
  },
  components: {
    Steps: {
      dotCurrentSize: 16,
      dotSize: 16,
    },
    Select: {
      clearBg: '#817CA5',
      colorText: '#413C5F',
      colorTextPlaceholder: '#C0BCDF'
    },
    Input: {
      colorTextPlaceholder: '#C0BCDF'
    },
  }
}

export default customTheme