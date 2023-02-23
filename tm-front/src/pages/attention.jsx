import Accordion from 'react-bootstrap/Accordion';
import '../style/attention.css'

function attention(){
    return (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>전시 관람을 위해 사전 예약을 해야하나요?</Accordion.Header>
            <Accordion.Body>
            세번째미술관 모든 분관은 사전 예약 없이 현장 관람이 가능합니다.
            <br></br>
            * 미술창작스튜디오는 입주작가만 출입가능합니다.
            <br></br>
            * SeMA 벙거 및 SeMA 창고는 전시가 개최 중일 때만 방문 가능합니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>신청하면 누구나 교육을 들을 수 있나요?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );
    }
export default attention;