import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class BieuDoNhanSu extends Component {
    constructor(props){
		super(props);
		this.state = {
            chartData:{
              labels:['Quận 2', 'Quận 7', 'Quận 9', 'Bình Tân', 'Bình Thạnh', 'Biên Hòa', 'Nha Trang', 'Cần Thơ', 'Hậu Giang', 'Quãng Ngãi', 'Quy Nhơn', 'Phan Thiết'],
              datasets:[
                  {
                      label:'Tổng số đối tác',
                      data:[
                          1000,
                          2000,
                          900,
                          2000,
                          900,
                          1000,
                          2000,
                          1900,
                          1500,
                          2000,
                          1500,
                          2000,
                          
                      ],
                      backgroundColor:[
                          '#27AE60',
                          '#27AE60',
                          '#27AE60',
                          '#27AE60',
                          '#27AE60',
                          '#27AE60',
                          '#27AE60',
                          '#27AE60',
                          '#27AE60',
                          '#27AE60',
                          '#27AE60',
                          '#27AE60',
                      ]
                  },
                  {
                      label:'Đối tác hoạt động',
                      data:[
                        1000,
                        1000,
                        1500,
                        1500,
                        2000,
                        2000,
                        1500,
                        2000,
                        1000,
                        2000,
                        1500,
                        1000,
                        
                      ],
                      backgroundColor:[
                          '#44D581',
                          '#44D581',
                          '#44D581',
                          '#44D581',
                          '#44D581',
                          '#44D581',
                          '#44D581',
                          '#44D581',
                          '#44D581',
                          '#44D581',
                          '#44D581',
                          '#44D581',
                      ],
                  }
              ]
          }
        }
	}

	static defaultProps = {
		displayTitle:true,
		displayLegend:true,
		legendPositon:'top'
	}

	render(){
		var { chartData } = this.state;
		var { displayTitle, displayLegend, legendPositon } = this.props;
		return(
			<div className="chart">
				<Bar
                    data={chartData}
                    width={7}
                    height={3}
					options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
						title:{
							display:displayTitle,
							text:'BIỂU ĐỒ NHÂN SỰ',
                            fontSize:15,
                            fontColor:'white',
                            fontFamily:'Nunito, sans-serif'
						},
						legend:{
							display:displayLegend,
                            position:legendPositon,
                            fontSize:8,
                            fontColor:'white',
						},
						responsive: true,
                        maintainAspectRatio: true,
					}}
				/>
			</div>
		)
    }
}

export default BieuDoNhanSu;
