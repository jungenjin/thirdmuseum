import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
// eslint-disable-next-line no-restricted-globals
import { Link, useHistory } from "react-router-dom";

function Header() {
    const logoutFunc = () => {
        localStorage.removeItem("login");
    
        if(localStorage.getItem("login_type")) {
          localStorage.removeItem("login_type");
        }
    
        alert("로그아웃 되었습니다.");
        // eslint-disable-next-line no-restricted-globals
        history.push("/");
      }
    return (
        <Navbar expand="lg" className="py-3">
            <Container fluid="xxl">
                <Navbar.Brand href="/main">세번째미술관</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end pt-3" id="basic-navbar-nav">
                    <Nav>
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
                            <NavDropdown.Item href="/attention">관람 유의사항</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/notice">공지사항</Nav.Link>
                        <Nav.Link href="/login">로그인</Nav.Link>
                        <Nav.Link label="로그아웃" onClick={logoutFunc}>로그아웃</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;