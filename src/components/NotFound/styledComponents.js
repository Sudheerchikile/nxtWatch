import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  overflow-y: auto;
  min-height: 88vh;
  width: 90%;

  align-items: center;
  background-color: ${props => props.isDark};
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  height: 100vh;

  background-color: white;
`

export const Image = styled.img`
  width: 250px;
  margin: 10px;
`

export const Heading = styled.h1`
color:${props => props.isDark}
text-align:center;
font-size:30px;
`

export const Desc = styled.p`
  color: ${props => props.isDark};
  text-align: center;
  font-size: 20px;
`
