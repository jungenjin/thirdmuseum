import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubVisual from '../common/SubVisual';
import '../style/intro.css'

function intro(){
    return(
        <>
        <SubVisual name={'미술관소개'} imgName={'intro'} />
        <div className='container-xxl'>
          <Row>
            <Col xs={4} md={4} lg={4}>
              <div className="welcome">세번째미술관에<br/>오신 걸 환영합니다</div>
            </Col>
            <Col xs={8} md={8} lg={8}>
              <div className="welcomeTxt">
                세번째미술관은 개관 반세기의 역사를 자랑하는 국내 유일의 국가현대미술관입니다.
                우리 미술관은 서울관, 과천관, 덕수궁관, 청주관의 4관 체제에서 이제 대전관 신설로 5관 체제로 진입하고 있습니다.
                우리 미술관은 ‘확장과 연결’로 열린 미술관을 지향하고 있습니다. 생활 속에서 삶의 질을 높이고, 감동과 상상력의 
                충전소로 거듭 나기를 노력하고 있습니다. 더불어 이건희컬렉션의 대량기증으로 소장품 1만점 시대에 진입했고, 보다 
                다양한 전시와 미술관 프로젝트로 국민의 곁에 늘 있기를 희망하고 있습니다. 거기다 미술한류 사업에도 박차를 가해 
                세계 속에서 한국현대미술의 존재감을 높이고자 합니다. <br/><br/>
                세번째미술관은 항상 여러분의 곁에 있습니다. 언제라도 방문하셔서 다양한 프로그램을 즐기시기를 바랍니다. 바로 
                이웃과 같은 친근하고 포근한 열린 미술관이기 때문입니다.
                개방적이고도 신바람 나는 미술관, 그러면서도 감동을 주는 미술관으로 여러분을 초대합니다. 함께하시는 
                여러분! 감사합니다.
              </div>
            </Col>
          </Row>
          <Row>
              <Col xs={12} md={12} lg={12}>
                <div className="introSub">history</div>
              </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
            </Col>
            <Col xs={12} md={6} lg={6}>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
            <div className="historyTxt">2012.02.09<br/>개관</div>
            </Col>
            <Col xs={12} md={6} lg={6}>
            <div className="historyTxt">2018.05.08<br/>c홀 신설</div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
                <img src="../resource/intro/intro_1.png" alt="intro1" className="historyImg"/>
            </Col>
            <Col xs={12} md={6} lg={6}>
                <img src="../resource/intro/intro_2.png" alt="intro2" className="historyImg"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} className="introSub">
              <div className="introSub">vision</div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={3}>
                <img src="../resource/intro/intro_3.png" alt="intro3" className="visionImg"/>
            </Col>
            <Col xs={12} md={6} lg={3}>
                <img src="../resource/intro/intro_4.png" alt="intro4" className="visionImg"/>
            </Col>
            <Col xs={12} md={6} lg={3}>
                <img src="../resource/intro/intro_5.png" alt="intro5" className="visionImg"/>
            </Col>
            <Col xs={12} md={6} lg={3}>
                <img src="../resource/intro/intro_6.png" alt="intro6" className="visionImg"/>
            </Col>
          </Row>
        </div>
        </>
        );
    }
export default intro;