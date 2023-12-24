import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: sticky;
  height: 50px;
  background-color: ${props => props.bgColor};
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  margin-left: 10px;
`
export const ContentContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`

export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 8px 16px;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 14px;
  outline: none;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px none;
  cursor: pointer;
  color: ${props => props.color};
`

export const WebsiteLogo = styled.img`
  width: 110px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  background-color: #cbd5e1;
  border-radius: 10px;
`

export const ContentListItem = styled.li`
  display: flex;
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
`

export const ProfileImg = styled.img`
  width: 40px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: 1px solid grey;
  padding: 13px;
  padding-right: 20px;
  margin: 12px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: blue;
  border: 1px solid grey;
  padding: 13px;
  padding-right: 20px;
  margin: 12px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
`

export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-ize: 25px;
  margin: 10px;
  color: black;
`

export const HeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`
