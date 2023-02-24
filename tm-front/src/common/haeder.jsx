import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import '../style/common.css';

function Header() {
  return (
    <>
    <div className='container-xxl p-2'>
      <Navbar bg="white" expand="lg" >
        <Container className='navbar'>
        <Navbar.Brand href="/main">세번째미술관</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavDropdown title="미술관" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/intro">미술관 소개</NavDropdown.Item>
                <NavDropdown.Item href="/location">찾아오시는 길</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="전시" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/now">현재전시</NavDropdown.Item>
                <NavDropdown.Item href="/past">과거전시</NavDropdown.Item>
                <NavDropdown.Item href="/programe">프로그램</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="예약" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/reserve">관람예약</NavDropdown.Item>
                <NavDropdown.Item href="/attention">
                  관람 유의사항
                </NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="/notice">공지사항</Nav.Link>
              <Nav.Link href="/login">로그인</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </>
  );
}


export default Header;