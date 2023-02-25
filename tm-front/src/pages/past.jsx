//import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubVisual from '../common/SubVisual';
import '../style/past.css'

function past(){
    return(
        <>
        <SubVisual name={'과거전시'} imgName={''} />
        <div className='container-xxl'>
            <Row>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className="pastArt">
                        <img src="../resource/past/past1.png" alt="past1" className="pastImg"/>
                        <div className="pastInfo">
                            <div className="pastTitle">창동레지던시 입주보고서 2022: <br/>
                            김 홀 리 첸</div>
                            <div className="pastText">2022-11-25 ~ 2022-12-04</div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className="pastArt">
                        <img src="../resource/past/past2.png" alt="past2" className="pastImg"/>
                        <div className="pastInfo">
                            <div className="pastTitle">국립현대미술관 «2022 고양레지던시 오픈스튜디오 18 모두 다른 빛깔»</div>
                            <div className="pastText">2022-11-11 ~ 2022-11-13</div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className="pastArt">
                        <img src="../resource/past/past3.png" alt="past3" className="pastImg"/>
                        <div className="pastInfo">
                            <div className="pastTitle">김순기: 게으른 구름</div>
                            <div className="pastText">2022-11-25 ~ 2022-12-04</div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className="pastArt">
                        <img src="../resource/past/past4.png" alt="past4" className="pastImg"/>
                        <div className="pastInfo">
                            <div className="pastTitle">MMCA 과천프로젝트 2021: <br/>예술버스쉼터_쓸모없는 건축과<br/> 유용한 조각에 대하여</div>
                            <div className="pastText">2021-12-15 ~ 2022-11-20</div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className="pastArt">
                        <img src="../resource/past/past5.png" alt="past5" className="pastImg"/>
                        <div className="pastInfo">
                            <div className="pastTitle">대지의 시간</div>
                            <div className="pastText">2021-11-25 ~ 2022-03-27</div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className="pastArt">
                        <img src="../resource/past/past6.png" alt="past6" className="pastImg"/>
                        <div className="pastInfo">
                            <div className="pastTitle">DMZ 극장</div>
                            <div className="pastText">2021-08-20 ~ 2021-10-03</div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className="pastArt">
                        <img src="../resource/past/past7.png" alt="past7" className="pastImg"/>
                        <div className="pastInfo">
                            <div className="pastTitle">최욱경, 앨리스의 고양이</div>
                            <div className="pastText">2021-10-27 ~ 2022-02-13</div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3}>
                    <div className="pastArt">
                        <img src="../resource/past/past8.png" alt="past8" className="pastImg"/>
                        <div className="pastInfo">
                            <div className="pastTitle">DMZ 극장</div>
                            <div className="pastText">2021-08-20 ~ 2021-10-03</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        </>
        );
    }
export default past;