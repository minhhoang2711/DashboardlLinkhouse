import React, { Component } from 'react';
import BieuDoKinhDoanh from './components/BieuDoKinhDoanh';
import BieuDoHoatDong from './components/BieuDoHoatDong';
import BieuDoNhanSu from './components/BieuDoNhanSu';
import './App.css';
import DoanhThu from './components/statistics/DoanhThu';
import SoLuongGiaoDich from './components/statistics/SoLuongGiaoDich';
import GiaoDichThanhCong from './components/statistics/GiaoDichThanhCong';
import SoLuongDoiTac from './components/statistics/SoLuongDoiTac';
import DoiTacMoi from './components/statistics/DoiTacMoi';
import SoLuongDuAn from './components/statistics/SoLuongDuAn';

class App extends Component {
    render() {
        return (
            <div>

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
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                            <DoanhThu className="ChartPie"/>
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongGiaoDich />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <GiaoDichThanhCong />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDoiTac />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <DoiTacMoi />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDuAn />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXanhla"></span>Tăng so với tháng trước
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareHong"></span>Giảm so với tháng trước
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXam"></span>Bằng so với tháng trước
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <BieuDoKinhDoanh />
                                    <BieuDoNhanSu />
                                    <BieuDoHoatDong />
                                </div>
                            </div>
                        </div>

                        <div id="quan2" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                            <DoanhThu />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongGiaoDich />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <GiaoDichThanhCong />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDoiTac />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <DoiTacMoi />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDuAn />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXanhla"></span>Tăng so với tháng trước
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareHong"></span>Giảm so với tháng trước
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXam"></span>Bằng so với tháng trước
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <BieuDoKinhDoanh />
                                    <BieuDoNhanSu />
                                    <BieuDoHoatDong />
                                </div>
                            </div>
                        </div>

                        <div id="quan7" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                            <DoanhThu />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongGiaoDich />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <GiaoDichThanhCong />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDoiTac />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <DoiTacMoi />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDuAn />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXanhla"></span>Tăng so với tháng trước
                                </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareHong"></span>Giảm so với tháng trước
                                </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXam"></span>Bằng so với tháng trước
                                </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <BieuDoKinhDoanh />
                                    <BieuDoNhanSu />
                                    <BieuDoHoatDong />
                                </div>
                            </div>
                        </div>

                        <div id="quan9" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                            <DoanhThu />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongGiaoDich />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <GiaoDichThanhCong />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDoiTac />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <DoiTacMoi />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDuAn />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXanhla"></span>Tăng so với tháng trước
                                </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareHong"></span>Giảm so với tháng trước
                                </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXam"></span>Bằng so với tháng trước
                                </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <BieuDoKinhDoanh />
                                    <BieuDoNhanSu />
                                    <BieuDoHoatDong />
                                </div>
                            </div>
                        </div>

                        <div id="binhtan" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                            <DoanhThu />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongGiaoDich />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <GiaoDichThanhCong />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDoiTac />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <DoiTacMoi />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDuAn />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXanhla"></span>Tăng so với tháng trước
                                </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareHong"></span>Giảm so với tháng trước
                                </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXam"></span>Bằng so với tháng trước
                                </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <BieuDoKinhDoanh />
                                    <BieuDoNhanSu />
                                    <BieuDoHoatDong />
                                </div>
                            </div>
                        </div>

                        <div id="binhthanh" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                            <DoanhThu />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongGiaoDich />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <GiaoDichThanhCong />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDoiTac />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <DoiTacMoi />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDuAn />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXanhla"></span>Tăng so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareHong"></span>Giảm so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXam"></span>Bằng so với tháng trước
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <BieuDoKinhDoanh />
                                    <BieuDoNhanSu />
                                    <BieuDoHoatDong />
                                </div>
                            </div>
                        </div>

                        <div id="bienhoa" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                            <DoanhThu />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongGiaoDich />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <GiaoDichThanhCong />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDoiTac />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <DoiTacMoi />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDuAn />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXanhla"></span>Tăng so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareHong"></span>Giảm so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXam"></span>Bằng so với tháng trước
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <BieuDoKinhDoanh />
                                    <BieuDoNhanSu />
                                    <BieuDoHoatDong />
                                </div>
                            </div>
                        </div>

                        <div id="nhatrang" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                            <DoanhThu />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongGiaoDich />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <GiaoDichThanhCong />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDoiTac />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <DoiTacMoi />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDuAn />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXanhla"></span>Tăng so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareHong"></span>Giảm so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXam"></span>Bằng so với tháng trước
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <BieuDoKinhDoanh />
                                    <BieuDoNhanSu />
                                    <BieuDoHoatDong />
                                </div>
                            </div>
                        </div>

                        <div id="cantho" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                            <DoanhThu />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongGiaoDich />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <GiaoDichThanhCong />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDoiTac />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <DoiTacMoi />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDuAn />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXanhla"></span>Tăng so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareHong"></span>Giảm so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXam"></span>Bằng so với tháng trước
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <BieuDoKinhDoanh />
                                    <BieuDoNhanSu />
                                    <BieuDoHoatDong />
                                </div>
                            </div>
                        </div>

                        <div id="haugiang" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                            <DoanhThu />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongGiaoDich />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <GiaoDichThanhCong />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDoiTac />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <DoiTacMoi />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDuAn />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXanhla"></span>Tăng so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareHong"></span>Giảm so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXam"></span>Bằng so với tháng trước
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <BieuDoKinhDoanh />
                                    <BieuDoNhanSu />
                                    <BieuDoHoatDong />
                                </div>
                            </div>
                        </div>

                        <div id="quangngai" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                            <DoanhThu />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongGiaoDich />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <GiaoDichThanhCong />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDoiTac />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <DoiTacMoi />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDuAn />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXanhla"></span>Tăng so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareHong"></span>Giảm so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXam"></span>Bằng so với tháng trước
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <BieuDoKinhDoanh />
                                    <BieuDoNhanSu />
                                    <BieuDoHoatDong />
                                </div>
                            </div>
                        </div>

                        <div id="quynhon" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                            <DoanhThu />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongGiaoDich />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <GiaoDichThanhCong />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDoiTac />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <DoiTacMoi />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDuAn />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXanhla"></span>Tăng so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareHong"></span>Giảm so với tháng trước
                                    </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <span className="glyphicon glyphicon-stop SquareXam"></span>Bằng so với tháng trước
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <BieuDoKinhDoanh />
                                    <BieuDoNhanSu />
                                    <BieuDoHoatDong />
                                </div>
                            </div>
                        </div>

                        <div id="phanthiet" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                            <DoanhThu />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongGiaoDich />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <GiaoDichThanhCong />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ChartReponsive">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDoiTac />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <DoiTacMoi />
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <SoLuongDuAn />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop">
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <div className="glyphicon glyphicon-stop SquareXanhla"></div>
                                            <div>Tăng so với tháng trước</div>
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <div className="glyphicon glyphicon-stop SquareHong"></div>
                                            <div>Giảm so với tháng trước</div>
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                            <div className="glyphicon glyphicon-stop SquareXam"></div>
                                            <div className="lineHeight">Bằng so với tháng trước</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ChartReponsive">
                                    <BieuDoKinhDoanh />
                                    <BieuDoNhanSu />
                                    <BieuDoHoatDong />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>


        );
    }
}

export default App;
