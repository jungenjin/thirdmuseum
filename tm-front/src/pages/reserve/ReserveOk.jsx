import React from "react";
import { Link } from "react-router-dom";
import SubVisual from '../../common/SubVisual';

function Reserve(){
    return(
        <>
        <SubVisual name={'관람예약'} imgName={'reserve'} />
        <div className='container-xxl'>
            예약완료
            <div className="row pt-3 mt-5">
                <div className='col-auto'>
                    <Link to="/">
                        <button className="btn btn-dark btn-lg">메인으로</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Reserve;