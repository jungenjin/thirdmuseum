
import axios from "axios";
import React, { Component } from "react";
import SubVisual from '../../common/SubVisual';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resNo: "",          //글번호
      resRegId: "",       //예약자이름
      resDate: "",        //예약일
      resTime: "",        //예약시간
      resPersoner: "",    //방문인원수
      crud: this.props.crud,
    };
    if (this.state.crud !== "Insert") {
      this.getData();
    }
  }

  createCrudBtn() {
    const crud = this.state.crud;
    if (crud === "View") {
      return null;
    } else {
      const crudName =
      crud === "Update" ? "수정" : crud === "Insert" ? "관람예약 신청하기" : "삭제";
      return (
        <button className="btn btn-dark btn-lg" onClick={() => this.crud()}>{crudName}</button>
      );
    }
  }

  crud() {
    const { resNo, resRegId, resDate, resTime, resPersoner, crud } = this.state;

    let crudType = "";

    if (crud === "Update") {
      crudType = "/updateProcess.do";
    } else if (crud === "Delete") {
      crudType = "/deleteProcess.do";
    } else if (crud === "Insert") {
      crudType = "/insertProcess.do";
    } else if (crud === "View") {
      return null;
    }

    let form = new FormData();
    form.append("resDate", resDate);
    form.append("resRegId", resRegId);
    form.append("resTime", resTime);
    form.append("resPersoner", resPersoner);
    if (crud !== "Insert") {
      form.append("resNo", resNo);
    }

    axios
      .post(crudType, form)
      .then((res) => {
        alert("예약이 완료되었습니다.")
        this.props.history.push("/reserveOk");
      })
      .catch((err) => alert("error: " + err.response.data.msg));
  }

  getData() {
    axios.get("/view.do").then((res) => {
      const data = res.data;
      this.setState({
        resNo: data.resNo,
        resRegId: data.resRegId,
        resDate: data.resDate,
        resTime: data.resTime, 
        resPersoner: data.resPersoner
      });
    });
  }

  createresNoTag() {
    const resNo = this.state.resNo;
    const crud = this.state.crud;
    if (crud !== "Insert") {
      return <input type="hidden" value={resNo} readOnly />;
    } else {
      return null;
    }
  }

  cancel() {
    this.props.history.push('/reserve');
  }


  render() {
    const resRegId = this.state.resRegId;
    const resDate = this.state.resDate;
    const resTime = this.state.resTime;
    const resPersoner = this.state.resPersoner;

    return (
      <>
      <SubVisual name={'관람예약'} imgName={'reserve'} />
      <div className='container-xxl'>
        <div className="row">
        {this.createresNoTag()}
          <div className="mb-5">
            <label className="form-label">예약자이름</label>
            <input type="text" className="form-control form-control-lg" 
            value={resRegId} onChange={(event) => this.setState({ resRegId: event.target.value })} placeholder="이름을 입력하세요." />
          </div>
          <div className="mb-5">
            <label className="form-label">예약일</label>
            <input type="date" className="form-control  form-control-lg" 
            value={resDate} onChange={(event) => this.setState({ resDate: event.target.value })} />
          </div>
          <div className="mb-5">
            <label className="form-label">예약시간</label>
            <input type="time" className="form-control form-control-lg" 
            value={resTime} onChange={(event) => this.setState({ resTime: event.target.value })} />
          </div>
          <div className="mb-5">
            <label className="form-label">방문인원수</label>
            <input type="text" className="form-control form-control-lg" 
            value={resPersoner} onChange={(event) => this.setState({ resPersoner: event.target.value })} placeholder="방문인원수를 입력하세요." />
          </div>
          <div className="">
            <label className="form-label">예약시 주의사항</label>
            <div>aa</div>
          </div>
        </div>
        <div className="row justify-content-end pt-3 mt-5">
          <div className='col-auto'>
            {this.createCrudBtn()}
            <button className="btn btn-dark btn-lg" onClick={this.cancel.bind(this)} style={{marginLeft:"20px"}}>취소</button>
          </div>
        </div>
      </div>
      </>
    );
  }
}
InputForm.defaultProps = {
  crud : 'Insert'
}
export default InputForm;
