import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'

import Header from '../Header'

import SearchVideos from '../SearchVideos'

import CartContext from '../../context/CartContext'

import {
  HomeContainer,
  HomeSideContainer,
  BannerImage,
  MainContainer,
  HomeStickyContainer,
  CloseButton,
  ModalContainer,
  GetItNowButton,
  BannerImageContainer,
} from './styledComponents'

import SideBar from '../SideBar'

class HomeRoute extends Component {
  state = {display: 'flex'}

  onCloseBanner = () => {
    this.setState(
      {
        display: 'none',
      },
      this.renderHomeVideos,
    )
  }

  renderHomeVideos = () => {
    const {display} = this.state
    console.log(display)
    const bannerDisplay = display === 'flex' ? 'flex' : 'none'
    return (
      <>
        <BannerImageContainer
          data-testid="banner"
          bannerDisplay={bannerDisplay}
        >
          <ModalContainer>
            <BannerImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />

            {display === 'flex' ? <p>Buy Nxt Watch Premium</p> : null}
            <GetItNowButton>GET IT NOW</GetItNowButton>
          </ModalContainer>
          <CloseButton
            type="button"
            data-testid="close"
            onClick={this.onCloseBanner}
          >
            <IoMdClose size={30} color="#231f20" />
          </CloseButton>
        </BannerImageContainer>
        <SearchVideos />
      </>
    )
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <MainContainer bgColor={bgColor} data-testid="home">
              <Header />
              <HomeContainer bgColor={bgColor}>
                <HomeStickyContainer>
                  <SideBar onChangeActiveTab={this.onChangeActiveTab} />
                </HomeStickyContainer>
                <HomeSideContainer bgColor={bgColor}>
                  {this.renderHomeVideos()}
                </HomeSideContainer>
              </HomeContainer>
            </MainContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default HomeRoute
