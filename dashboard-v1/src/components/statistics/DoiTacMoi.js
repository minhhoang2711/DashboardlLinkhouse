import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class DoiTacMoi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Đối tác mới', 'Đối tác trở lại'],
                datasets: [
                    {
                        label: 'Doanh thu',
                        data: [
                            42,
                            58,

                        ],
                        // borderWidth: '1',
                        backgroundColor: [
                            '#536188',
                            '#9195DA',
                        ],

                        borderColor: [
                            '#536188',
                            '#9195DA',

                        ]
                    },
                ]
            }
        }
    }



    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        //legendPosition: 'top'
    }

    render() {

        var { chartData } = this.state;
        var { displayTitle, displayLegend, /*legendPosition*/ } = this.props;
        return (
            <div className="chart item">
                <Pie
                    data={chartData}
                    width={4}
                    height={5}
                    options={{

                        scales: {
                            yAxes: [{
                                ticks: {
                                    // beginAtZero: true
                                    display: false,

                                }
                            }]
                        },



                        title: {
                            display: displayTitle,
                            text: 'Đối Tác Mới',
                            fontSize: 15,
                            position: 'bottom',
                            fontColor: 'white',
                            fontFamily: 'My-Custom-Font, sans-serif'
                        },
                        legend: {
                            display: displayLegend,
                            position: 'top',
                            fontSize: 10,

                            fontColor: 'white',
                        },
                        maintainAspectRatio: true
                    }}
                />

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <span className="glyphicon glyphicon-certificate circleTim"></span>Đối tác mới
                    <span className="member">84</span>&nbsp;42%
                    
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <span className="glyphicon glyphicon-certificate circleXam"></span>Đối tác trở lại
                    <span className="member">47</span>&nbsp;48%
                </div>
            </div>
        )
    }
}

export default DoiTacMoi;
