import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class BieuDoHoatDong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Tháng 01 ' , 'Tháng 02 ', 'Tháng 03 ', 'Tháng 04 ', 'Tháng 05 ', 'Tháng 06 ', 'Tháng 07 ', 'Tháng 08 ', 'Tháng 09 ', 'Tháng 10 ', 'Tháng 11 ', 'Tháng 12 '],
                datasets: [
                    {
                        label: 'Coin doanh thu',
                        data: [
                            400,
                            600,
                            200,
                            600,
                            400,
                            200,
                            2500,
                            1000,
                            2300,
                            1000,
                            1500,
                            2000,
                        ],
                        borderColor: [
                            '#76DDFB',

                        ]
                    },
                    {
                        label: 'Coin hoạt động',
                        data: [
                            100,
                            0,
                            1000,
                            1800,
                            900,
                            1600,
                            500,
                            2500,
                            1900,
                            1800,
                            1500,
                            1000,
                        ],
                        borderColor: [
                            '#51A5DE',

                        ]
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPositon: 'top'
    }

    render() {
        var { chartData } = this.state;
        var { displayTitle, displayLegend, legendPositon } = this.props;
        return (
            <div className="chart">
                <Line
                    data={chartData}
                    width={10}
                    height={4}
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        title: {
                            display: displayTitle,
                            text: 'BIỂU ĐỒ HOẠT ĐỘNG',
                            fontSize: 15,
                            fontColor: 'white',
                            fontFamily: 'My-Custom-Font, sans-serif'
                        },
                        legend: {
                            display: displayLegend,
                            position: legendPositon,
                            fontSize: 200,
                            fontColor: '#000',
                        },
                        maintainAspectRatio: true
                    }}
                />
            </div>
        )
    }
}

export default BieuDoHoatDong;
