import { mainColor } from "./appStyle"

export const formCss:any = {
  marginLeft:'calc(50% - 20vw - 100px)',
  maxWidth:'400px',
  padding:'40px 20px',
  borderRadius:'20px',
  background:mainColor,
  '.ant-form-item .ant-form-item-label >label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before':{
    display:'none'
  },
  '.ant-input': {
    padding:'8px 14px',
    borderRadius:0,
  },
  '&.ant-form-vertical .ant-form-item-label':{
    padding:'0 0 2px'
  },
  '.ant-input-affix-wrapper':{
    borderRadius: 0,
    padding: '8px',
    ' >input.ant-input':{
      padding: '0 8px',
    }
  },
  '.ant-select-single':{
    height:'40px',
    '.ant-select-selector':{
      borderRadius:0
    }
  },
  '.ant-select .ant-select-arrow':{
    color:mainColor
  },
  '.ant-select-single.ant-select-show-arrow .ant-select-selection-item':{
    textAlign:'left'
  },
  '.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder':{
    textAlign:'left'
  },
  // 'button[type="submit"]':{
  //   width:'100%',
  //   height:'60px',
  //   fontSize:'24px',
  //   fontWeight:500,
  //   color:'#8B85B1'
  // },
  '.ant-btn-text':{
    backgroundColor:'#FFFFFF',
    // color:'#413C5F',
  },
  '.ant-btn-text:not(:disabled):not(.ant-btn-disabled)':{
    backgroundColor:'#FFFFFF',
    // color:'#413C5F',
  },
  '.ant-btn-text:disabled': {
    backgroundColor:'#A39FC1'
  },
  '.ant-form-item .ant-form-item-explain-error':{
    textAlign:'left'
  },
  '.ant-form-item:last-child': {
    marginBottom: "0"
  }
}