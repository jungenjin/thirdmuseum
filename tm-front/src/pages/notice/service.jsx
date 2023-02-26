import axios from 'axios'; 

const BOARD_API_BASE_URL = "http://localhost:9008/notice"; 

class BoardService {
   
    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }
    
    //글 작성 함수를 추가; axios의 post함수를 사용해서 통신
    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board);
    }

    getOneBoard(ntcNo) {
        return axios.get(BOARD_API_BASE_URL + "/" + ntcNo);
    }

    //글 수정 함수 추가; 경로 파라미터로 글 번호를 설정, 수정할 객체정보를 body에 담아 통신한다
    updateBoard(ntcNo, board) {
        return axios.put(BOARD_API_BASE_URL + "/" + ntcNo, board);
    }

    //글 삭제 함수 추가; 경로 파라미터로 글 번호를 설정, 글 번호에 해당하는 글을 삭제
    deleteBoard(ntcNo) {
        return axios.delete(BOARD_API_BASE_URL + "/" + ntcNo);
    }


}

export default new BoardService();