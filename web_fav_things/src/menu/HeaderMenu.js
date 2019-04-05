import React from 'react'
import { Menu, Button, Icon, Image, Dropdown, Transition } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import './HeaderMenu.scss'


const MenuHeader = props => (
  <Menu size="large" attached="top" borderless fluid style={{ margin: '0px' }} >

    <Menu.Item
      name="home"
      as={Link} to="/home"
      className="menu-item-plain"
    >
      <Image src={logo} alt="site logo" style={{ width: '3.25em' }} />
      <span
        style={{
          fontSize: '1.65em',
          fontWeight: 'bold',
          color: '#2185d0',
          marginLeft: '0.5em',
        }}
      >
        My Favorite Things
      </span>
    </Menu.Item>

    <Menu.Item name="movie">
      <Link to="/movie">电影</Link>
    </Menu.Item>
    <Menu.Item name="book">
      <Link to="/book">图书</Link>
    </Menu.Item>
    <Menu.Item name="music">
      <Link to="/music">音乐</Link>
    </Menu.Item>
    <Menu.Item name="game">
      <Link to="/game">游戏</Link>
    </Menu.Item>

  </Menu>
)

export default MenuHeader
