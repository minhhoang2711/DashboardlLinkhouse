import React, { Component } from 'react';
import { Doughnut, Chart } from 'react-chartjs-2';

Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
            //Get ctx from string
            var ctx = chart.chart.ctx;

            //Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
            //Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight);

            //Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            //Draw text in center
            ctx.fillText(txt, centerX, centerY);
        }
    }
});

class GiaoDichThanhCong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Đạt', 'Chưa đạt'],
                datasets: [
                    {
                        label: 'Doanh thu',
                        data: [
                            25,
                            75,

                        ],
                        borderWidth: '0',
                        backgroundColor: [
                            '#2294E6',
                            '#242C3E',
                        ],

                        borderColor: [
                            '#2294E6',
                            '#242C3E',

                        ]
                    },
                ]
            }
        }
    }



    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPositon: 'top'
    }

    render() {

        var { chartData } = this.state;
        var { displayTitle, displayLegend, legendPositon } = this.props;
        return (
            <div className="chart item">
                <Doughnut
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
                        elements: {
                            center: {
                                text: '13.5 Tỷ',
                                color: 'white', //Default black
                                fontFamily: 'My-Custom-Font, sans-serif', //Default Arial
                                //sidePadding: 12 //Default 20 (as a percentage)
                            }
                        },
                        cutoutPercentage: 85,

                        title: {
                            display: displayTitle,
                            text: 'Giao dịch thành công',
                            fontSize: 15,
                            position: 'bottom',
                            fontColor: 'white',
                            fontFamily: 'My-Custom-Font, sans-serif'
                        },
                        legend: {
                            display: displayLegend,
                            position: legendPositon,
                            fontSize: 8,
                            fontColor: 'white',
                        },
                        maintainAspectRatio: true
                    }}
                />

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 target">
                    <p className="char">5%</p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 noChange">
                    <p className="charxam"><span className="glyphicon glyphicon-minus"></span> 5%</p>
                </div>
            </div>
        )
    }
}

export default GiaoDichThanhCong;
