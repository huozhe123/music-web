import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'
import {Input} from 'antd'
import { UserOutlined,SearchOutlined } from '@ant-design/icons';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { headerLinks } from '../../common/local-data'
export default memo(function HYAppHeader() {
  //页面代码
  const showSelectItem = (item,index) => {
    if(index<3){
    return (<NavLink to={item.link} exact>{item.title}</NavLink>)
    } else {
    return (<a href={item.link}>{item.title}</a>)
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <NavLink to='/'>网易云音乐</NavLink>
          <div className="select-list">
            {
              headerLinks.map((item,index)=>{
              return (
              <div key={item.title} className="select-item">{showSelectItem(item,index)}</div>
              )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder="large size" prefix={<SearchOutlined />} className="mysearch"/>
        </HeaderRight>
      </div>
      <div className="divider"></div>      
    </HeaderWrapper>
  )
})
