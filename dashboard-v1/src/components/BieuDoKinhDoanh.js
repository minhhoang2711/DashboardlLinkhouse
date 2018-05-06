import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class BieuDoKinhDoanh extends Component {

    constructor(props){
		super(props);
		this.state = {
            chartData:{
              labels:['Quận 2', 'Quận 7', 'Quận 9', 'Bình Tân', 'Bình Thạnh', 'Biên Hòa', 'Nha Trang', 'Cần Thơ', 'Hậu Giang', 'Quãng Ngãi', 'Quy Nhơn', 'Phan Thiết'],
              datasets:[
                  {
                      label:'Doanh thu',
                      data:[
                          2000,
                          1500,
                          1000,
                          1000,
                          900,
                          1200,
                          1500,
                          900,
                          1000,
                          2000,
                          1000,
                          1500,
                          
                      ],
                      backgroundColor:[
                          '#2294E6',
                          '#2294E6',
                          '#2294E6',
                          '#2294E6',
                          '#2294E6',
                          '#2294E6',
                          '#2294E6',
                          '#2294E6',
                          '#2294E6',
                          '#2294E6',
                          '#2294E6',
                          '#2294E6',
                      ]
                  },
                  {
                      label:'Lợi nhuận',
                      data:[
                        1500,
                        1500,
                        1000,
                        900,
                        1000,
                        1000,
                        1500,
                        2000,
                        1500,
                        2000,
                        900,
                        1000,
                        
                      ],
                      backgroundColor:[
                          '#60C8E8',
                          '#60C8E8',
                          '#60C8E8',
                          '#60C8E8',
                          '#60C8E8',
                          '#60C8E8',
                          '#60C8E8',
                          '#60C8E8',
                          '#60C8E8',
                          '#60C8E8',
                          '#60C8E8',
                          '#60C8E8',
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
                    width={8}
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
							text:'BIỂU ĐỒ KINH DOANH',
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
						maintainAspectRatio: true
					}}
				/>
			</div>
		)
    }
    
}

export default BieuDoKinhDoanh;
