import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  list-style-type: none;
  margin: 25px;
  padding-right: 20px;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  list-style-type: none;
`

export const ThumbnailImage = styled.img`
  width: 50%;
  height: 250px;
  object-fit: scale-down;
`

export const VideoCardBottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 12px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
`

export const VideoDetailsText = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: ${props => props.size}px;
  font-weight: bold;
`
