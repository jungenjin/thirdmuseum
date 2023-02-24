import Accordion from 'react-bootstrap/Accordion';
import SubVisual from '../common/SubVisual';
import '../style/attention.css'

function attention(){
    return (
      <>
        <div>
          <SubVisual name={'관람 유의사항'} imgName={'attention'} />
        </div>
        <Accordion defaultActiveKey="0" className='attentionac'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Q. 전시 관람을 위해 사전 예약을 해야하나요?</Accordion.Header>
            <Accordion.Body>
            세번째미술관 모든 분관은 사전 예약 없이 현장 관람이 가능합니다.
            <br></br>
            <br></br>
            * 미술창작스튜디오는 입주작가만 출입가능합니다.
            <br></br>
            * SeMA 벙거 및 SeMA 창고는 전시가 개최 중일 때만 방문 가능합니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>신청하면 누구나 교육을 들을 수 있나요?</Accordion.Header>
            <Accordion.Body>
              신청하신분들 누구나 교육을 들으실 수 있습니다. <br></br>
              다만 일부 과목에는 과목의 특성상 연령제한이 있을 수 있으니 참고 부탁드립니다. <br></br>
              현재 전화 신청은 불가능하며 인터넷으로 신청해 주시기 바랍니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>강의계획서를 볼 수 있나요?</Accordion.Header>
            <Accordion.Body>
              현재 온라인 조회 업무가 중지된 상태로 전시실 입장 전에 요청하시는 분들에겐 따로 강의계획서를 배부하고 있습니다. <br>
              </br>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>교육 및 행사 선발 확인은 어디서 하나요?</Accordion.Header>
            <Accordion.Body>
              교육 및 행사 선발 확인은 공지사항에서 확인하실 수 있습니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>전시실에서 사진 촬영이 가능한가요?</Accordion.Header>
            <Accordion.Body>
            기본적으로 미술전시 관람 시 사진촬영은 금지하고 있습니다. <br></br>
              1. 작품의 저작권자인 작가의 허락 없이 작품을 무단으로 촬영할 수 없습니다. <br></br>
              2. 카메라 라이트를 사용시 작품에 안좋은 미칠 수 있습니다. <br></br>
              3. 촬영 시 다른 관람객의 관람에 방해를 줄 수도 있습니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>무료 관람 가능한 전시는 무엇인가요?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>유모차와 휠체어를 대여할 수 있나요?</Accordion.Header>
            <Accordion.Body>
              미술관 방문 하루 전 전화로 미리 예약을 주시거나, 현장 데스크에서 유모차나 휠체어 대여를 요청하시면 <br></br>
              대여가 가능합니다. 대여 보증금이 있으니 참고 부탁드립니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>세번째미술관에서 발견한 전시 관련 도서 및 도록은 어디서 구매하나요?</Accordion.Header>
            <Accordion.Body>
              전시 도록 미은 세번째미술관 1층에 있는 예술서점 TMU X 더레퍼런스에서 구매 가능합니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>현재 진행중인 전시는 어떤 전시인가요?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>아트상품 구입은 어디서 할 수 있나요?</Accordion.Header>
            <Accordion.Body>
              세번째미술관 아트상품은 1층 예술서점 TMU X 더레퍼런스에서 구매할 수 있습니다. 
              모든 기획전시가 아트상품을 제작, 판매하지는 않습니다.
              자세한 문의사항은 방문 전 유선전화로 문의해주시기 바랍니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>소장품의 수집은 어떻게 이루어지나요?</Accordion.Header>
            <Accordion.Body>
            매년 공모(일반/주제)와 미술관 학예직 제안을 통해 수집 대상 작품을 구성하며 내·외부 전문가로 이루어진 소장작품 추천회의, 가격평가심의위원회, 미술관운영자문위원회를 거쳐 작품을 수집하고 있습니다
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </>
      );
    }
export default attention;