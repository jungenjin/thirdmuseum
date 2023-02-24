import 'bootstrap/dist/css/bootstrap.css';
import '../style/common.css';

function Footer() {
  return (
      <div className="Footer">
        <footer className="App-Footer">
          <footer className="container-xxl p-3">
              <div className="FtextBox">
                <p className="Ftext">오시는 길</p>
                <p className="Ftext">이용약관</p>
                <p className="Ftext">개인정보처리방침</p>
              </div>
              <p className="FSubtext">Copyright © 2023 세번째미술관 All right reserved.</p>
          </footer>
        </footer>
      </div>
  );
}

export default Footer;
