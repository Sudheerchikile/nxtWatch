import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`
export const NavLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`
export const VideoDetailViewContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
`

export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const VideoDetailsSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  align-items: center;
`

export const VideoDetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`

export const VideoDetailsTitle = styled.p`
  font-family: 'Roboto';
  color: brown;
  font-weight: bold;
  margin-left: 10px;
`
export const ViewsDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`

export const LikesContainer = styled.div`
  display: flex;
`

export const ViewsText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  margin-left: 10px;
`
export const IconContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  background-color: transparent;
  border: none;
  color: ${props => props.color};
`
export const HorizontalLine = styled.hr`
  background-color: brown;
  color: brown;
  width: 100%;
  margin: 15px;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ChannelLogo = styled.img`
  height: 50px;
  width: 50px;
`

export const LogoContainer = styled.div`
  background-color: #cbd5e1;
  border-radius: 40px;
  padding: 10px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  marin-left: 20px;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`
export const Image = styled.img`
  width: 300px;
  margin: 20px;
`

export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 20px;
`

export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 20px;
`
export const Retry = styled.button`
  padding: 15px;
  color: blue;
  cursor: pointer;
`
