import React, { Component } from 'react';
import BieuDoKinhDoanh from './components/BieuDoKinhDoanh';
import BieuDoHoatDong from './components/BieuDoHoatDong';
import BieuDoNhanSu from './components/BieuDoNhanSu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >

        <header>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#linkhouse">LinkHouse</a></li>
                <li><a data-toggle="tab" href="#quan2">Quận 2</a></li>
                <li><a data-toggle="tab" href="#quan7">Quận 7</a></li>
                <li><a data-toggle="tab" href="#quan9">Quận 9</a></li>
                <li><a data-toggle="tab" href="#binhtan">Bình Tân</a></li>
                <li><a data-toggle="tab" href="#binhthanh">Bình Thạnh</a></li>
                <li><a data-toggle="tab" href="#bienhoa">Biên Hòa</a></li>
                <li><a data-toggle="tab" href="#nhatrang">Nha Trang</a></li>
                <li><a data-toggle="tab" href="#cantho">Cần Thơ</a></li>
                <li><a data-toggle="tab" href="#haugiang">Hậu Giang</a></li>
                <li><a data-toggle="tab" href="#quangngai">Quãng Ngãi</a></li>
                <li><a data-toggle="tab" href="#quynhon">Quy Nhơn</a></li>
                <li><a data-toggle="tab" href="#phanthiet">Phan Thiết</a></li>
              </ul>

            </div>
          </div>
        </header>

        <section className="content">
          <div className="tab-content">

            <div id="linkhouse" className="tab-pane fade in active">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 chartReponsive">
                  <BieuDoKinhDoanh />
                  <BieuDoNhanSu />
                  <BieuDoHoatDong />
                </div>
              </div>
            </div>

            <div id="quan2" className="tab-pane fade">
              <h3>QuAN 2</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>

            <div id="quan7" className="tab-pane fade">
              <h3>Menu 2</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>

            <div id="quan9" className="tab-pane fade">
              <h3>Menu 1</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div id="binhtan" className="tab-pane fade">
              <h3>Menu 3</h3>
              <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            <div id="binhthanh" className="tab-pane fade">
              <h3>Bình Thạnh</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>

            <div id="bienhoa" className="tab-pane fade">
              <h3>Biên Hòa</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>

            <div id="nhatrang" className="tab-pane fade">
              <h3>Menu 1</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div id="cantho" className="tab-pane fade">
              <h3>Cần Thơ</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div id="haugiang" className="tab-pane fade">
              <h3>Hậu Giang</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>

            <div id="quangngai" className="tab-pane fade">
              <h3>Menu 2</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>

            <div id="quynhon" className="tab-pane fade">
              <h3>Menu 3</h3>
              <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            <div id="phanthiet" className="tab-pane fade">
              <h3>Menu 1</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

          </div>
        </section>
      
      </div>
    );
  }
}
export default App;
