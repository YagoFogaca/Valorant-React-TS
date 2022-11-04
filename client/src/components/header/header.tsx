import { HeaderStyle } from './style-header';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
  return (
    <HeaderStyle>
      <img src="./img/logo.png" alt="" id="logo" />
    </HeaderStyle>
  );
}
