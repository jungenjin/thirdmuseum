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
                <h2 className="display-1 Ptext">Preview</h2>
                <div className="container-sm">
                  <div class="row-cols-8">
                    <div class="col">
                      <div className="Pimg1"><img src={process.env.PUBLIC_URL + '/resource/main/Preview1.png'}  className="Pi"/></div>
                    </div>
                    <div class="col">
                      <div className=" Pimg2"><img src={process.env.PUBLIC_URL + '/resource/main/Preview2.png'}  className="Pi"/></div>
                    </div>
                    <div class="col">
                      <div className=" Pimg3"><img src={process.env.PUBLIC_URL + '/resource/main/Preview3.png'}  className="Pi"/></div>
                    </div>
                    <div class="col">
                      <div className=" Pimg4"><img src={process.env.PUBLIC_URL + '/resource/main/Preview4.png'}  className="Pi"/></div>
                    </div>
                    <div class="col">
                      <div className=" Pimg5"><img src={process.env.PUBLIC_URL + '/resource/main/Preview5.png'}  className="Pi"/></div>
                    </div>
                    <div class="col">
                      <div className=" Pimg6"><img src={process.env.PUBLIC_URL + '/resource/main/Preview6.png'}  className="Pi"/></div>
                    </div>
                    <div class="col">
                      <div className=" Pimg7"><img src={process.env.PUBLIC_URL + '/resource/main/Preview7.png'}  className="Pi"/></div>
                    </div>
                    <div class="col">
                      <div className=" Pimg8"><img src={process.env.PUBLIC_URL + '/resource/main/Preview8.png'}  className="Pi"/></div>
                    </div>
                    <div class="col">
                      <div className=" Pimg9"><img src={process.env.PUBLIC_URL + '/resource/main/Preview9.png'}  className="Pi"/></div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
      </section>
    </div>
  );
}

export default Main;
