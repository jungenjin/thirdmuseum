import '../style/main.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main() {
  return (
    <div className="Main">
      <section className="App-Main">
        <section className="main mb-5">
          <div className="container-xxl">
              <p className="h4">“I Think of Olimpia Zagnoli as Keith Haring’s<br/>
              radiant boby  come to life” - by Tamara Shopsin</p>
              <div className="mainText2">Color</div>
              <div className="mainText3">is life</div>
              <button className="mainBtn" ><a className="mainTextBtn display-6" href='/now'>전시보러가기</a></button>
          </div>
        </section>
        <section className='pt-5 content'>
            <div className="container-xxl">
                <h2 className="display-1 Ptext">Preview</h2>
                <Row>
                  <Col md={1}></Col>
                    <Col xs={12} md={5} className="me-4"> 
                      <img src={process.env.PUBLIC_URL + '/resource/main/Preview1.png'} className="img-fluid mb-5 Pimg"/>
                      <img src={process.env.PUBLIC_URL + '/resource/main/Preview4.png'} className="img-fluid mb-5 Pimg"/>
                      <img src={process.env.PUBLIC_URL + '/resource/main/Preview6.png'} className="img-fluid mb-5 Pimg"/>
                      <img src={process.env.PUBLIC_URL + '/resource/main/Preview8.png'} className="img-fluid mb-5 Pimg"/>
                    </Col>
              
                    <Col xs={12} md={5}>
                      <img src={process.env.PUBLIC_URL + '/resource/main/Preview2.png'} className="img-fluid mb-5 Pimg1"/>
                      <img src={process.env.PUBLIC_URL + '/resource/main/Preview3.png'} className="img-fluid mb-5 Pimg1"/>
                      <img src={process.env.PUBLIC_URL + '/resource/main/Preview5.png'} className="img-fluid mb-5 Pimg1"/>
                      <img src={process.env.PUBLIC_URL + '/resource/main/Preview7.png'} className="img-fluid mb-5 Pimg1"/>
                      <img src={process.env.PUBLIC_URL + '/resource/main/Preview9.png'} className="img-fluid"/>
                    </Col>
                    <Col md={1}></Col>
                </Row>
                </div>
            </section>
          </section>
      </div>
  );
}

export default Main;
