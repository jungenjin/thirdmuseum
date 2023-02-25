import SubVisual from '../common/SubVisual';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/program.css'

function programe(){
    return(
        <>
        <div>
          <SubVisual name={'프로그램'} imgName={''} />
        </div>
        <Container>
          <Row className='programrow'>
            <Col sm><img src="../resource/display/program_1.png" class="programimg" alt='프로그램1'></img></Col>
            <Col sm>
              <div class="programtxt">
                <p className='psub'>《강석호: 3분의 행복》전시연계 대담</p>
                세번째 미술관은《강석호: 3분의 행복》 전시와 연계하여 진행하는 대담에 여러분을 초대합니다. <br /> 
                본 연계 프로그램에서는 동료 예술가의 관점에서 강석호 작가의 회화관과 <br /> 미감에 대한 통찰을 공유하고 작가의 예술 세계에 대해 심층적으로 탐구합니다. <br /> 별도의 사전 예약 없이 현장 등록을 통해 참여할 수 있습니다.<br /> 
                <br /> 
                <div className='psub1'>대상</div>
                누구나
                <div className='psub1'>운영 시기</div>
                2023-02-17 ~ 2023-02-28
                <div className='psub1'>장소</div>
                세번째 미술관 B홀
              </div>
            </Col>
          </Row>
          <Row className='programrow'>
            <Col sm><img src="../resource/display/program_2.png" class="programimg" alt='프로그램2'></img></Col>
            <Col sm>
              <div class="programtxt">
                <p className='psub'>아트랜드, 너는 누구니?</p>
                생활 속에서 나온 재활용 용기들을 가지고 구조물을 만듭니다.<br /> 점토를 활용해 다양한 색상을 조색하고, 자신만의 캐릭터를 상상합니다.<br />  스스로 창작한 캐릭터에 이름을 붙이고, 창의력을 발휘하며 <br /> 캐릭터가 먹는 먹이, 사는 장소 등 다양한 특성들을 지어 나갑니다. <br /> 아이들이 직접 만든 결과물은 '아트랜드'의 일부로 더해지며 작품으로 전시됩니다.<br /> 
                <br />
                <div className='psub1'>대상</div>
                어린이
                <div className='psub1'>운영 시기</div>
                2023-01-25 ~ 2023-02-03
                <div className='psub1'>장소</div>
                세번째 미술관 C홀
              </div>
            </Col>
          </Row>
          <Row className='programrow'>
            <Col sm><img src="../resource/display/program_3.png" class="programimg" alt='프로그램3'></img></Col>
            <Col sm>
              <div class="programtxt">
                <p className='psub'>학급단체를 위한 티쳐스 팩</p>
                “나는 사람의 피부와 모낭을 그리면서 동물을 바라보기 시작했다.<br />  그러고 나서 나는 동물을 그리기 시작했는데, 내가 머리카락 그리는 것을 좋아했기 때문이다.<br />  나는 우리가 얼마나 새나 다른 포유류와 유사한지 깨닫게 되었다.<br />  비례는 바뀔지라도 털과 피부가 얼굴로 옮겨가는 방식은 털이 동물의 몸에 나타나는 방식과 같다.” - 키키 스미스<br /> 
                <br />
                <div className='psub1'>대상</div>
                누구나
                <div className='psub1'>운영 시기</div>
                2023-01-04 ~ 2023-02-09
                <div className='psub1'>장소</div>
                세번째 미술관 A홀
              </div>
            </Col>
          </Row>
      </Container>
        </>
    )
}
export default programe;