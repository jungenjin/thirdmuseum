// import './App.css';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import '../style/main.css';

function Main() {
  return (
    <div className="Main">
      <section className="App-Main">
        <section className="main">
          <div className="container-xxl">
            <p className="h4">“I Think of Olimpia Zagnoli as Keith Haring’s<br/>
              radiant boby  come to life” - by Tamara Shopsin</p>
              <div className="mainText2">Color</div>
              <div className="mainText3">is life</div>
              <button className="mainBtn" ><a className="mainTextBtn display-6" href='/now'>전시보러가기</a></button>
          </div>
        </section>
        <section className="content">
            <div className="container-xxl">
              <div className='container-lg'>
                <h2 className="display-1 Ptext">Preview</h2>
                  <div className="g-col-6 Pimg1" style={{background: 'url(/resource/main/Preview1.png)'}}></div>
                  <div className="g-col-6 Pimg2" style={{background: 'url(/resource/main/Preview2.png)'}}></div>
                  <div className="g-col-6 Pimg3" style={{background: 'url(/resource/main/Preview3.png)'}}></div>
                  <div className="g-col-6 Pimg4" style={{background: 'url(/resource/main/Preview4.png)'}}></div>
                  <div className="g-col-6 Pimg5" style={{background: 'url(/resource/main/Preview5.png)'}}></div>
                  <div className="g-col-6 Pimg6" style={{background: 'url(/resource/main/Preview6.png)'}}></div>
                  <div className="g-col-6 Pimg7" style={{background: 'url(/resource/main/Preview7.png)'}}></div>
                  <div className="g-col-6 Pimg8" style={{background: 'url(/resource/main/Preview8.png)'}}></div>
                  <div className="g-col-6 Pimg9" style={{background: 'url(/resource/main/Preview9.png)'}}></div>
              </div>
            </div>
        </section>
      </section>
    </div>
  );
}

export default Main;
