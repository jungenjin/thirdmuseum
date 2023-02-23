// import './App.css';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import '../style/main.css';

function Main() {
  return (
    <div className="Main">
      <section className="App-Main">
        <section className="main">
          <div className="container-xxl">
            <p className="mainText1">“I Think of Olimpia Zagnoli as Keith Haring’s<br/>
              radiant boby  come to life” - by Tamara Shopsin</p>
              <div className="mainText2">Color</div>
              <div className="mainText3">is life</div>
              <button className="mainBtn"><a className="mainTextBtn" href='/now'>전시보러가기</a></button>
          </div>
        </section>
        <section className="content">
            <div className="container-xxl">
              <div className='container-lg'>
                <h2 className="h2">Preview</h2>
                  <div className="Pimg1" style={{background: 'url(/resource/main/Preview1.png)'}}></div>
                  <div className="Pimg2" style={{background: 'url(/resource/main/Preview2.png)'}}></div>
                  <div className="Pimg3" style={{background: 'url(/resource/main/Preview3.png)'}}></div>
                  <div className="Pimg4" style={{background: 'url(/resource/main/Preview4.png)'}}></div>
                  <div className="Pimg5" style={{background: 'url(/resource/main/Preview5.png)'}}></div>
                  <div className="Pimg6" style={{background: 'url(/resource/main/Preview6.png)'}}></div>
                  <div className="Pimg7" style={{background: 'url(/resource/main/Preview7.png)'}}></div>
                  <div className="Pimg8" style={{background: 'url(/resource/main/Preview8.png)'}}></div>
                  <div className="Pimg9" style={{background: 'url(/resource/main/Preview9.png)'}}></div>
              </div>
            </div>
        </section>
      </section>
    </div>
  );
}

export default Main;
