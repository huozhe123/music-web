import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    color: #ffffff;
  }
  .divider {
    height:5px;
    background-color:#C20C0C;
  }
`

export const HeaderLeft = styled.div`

  >a {
    display: inline-block;
    line-height:70px;
    color: #ffffff;
    font-size: 20px;
  }
  .select-list{
    display: inline-flex;
    line-height:70px;
    a{
      color: #ffffff;
      display: inline-block;
      line-height:67px;
      padding:0 40px;
    }
    .select-item{
      position:relative;
      a{
        display:block;
        padding:0 20px;
        color:#ccc;
        
      }
    :last-of-type a{
      position:relative;
      ::after{
        content:"";
        position: absolute;
        width:28px;
        display:block;
        height:19px;
        background-image:url(${require("@/assets/img/hot.png")});
        background-size: 28px 22px;
        top:20px;
        right:-15px;
      }
    }
    &:hover, a.active{
          color:#ffffff;
          background:#000;
        }
    &.active {
    }
  }
  }
  
`
export const HeaderRight = styled.div`
  display:flex;
    .ant-input-affix-wrapper{
    width:158px;
    height:32px;
    border-radius:22px;
  }
`