import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2';

class BieuDoHoatDong extends Component {
    constructor(props){
		super(props);
		this.state = {
            chartData:{
              labels:['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
              datasets:[
                  {
                      label:'Coin doanh thu',
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
                      borderColor:[
                          'blue'
                      ]
                  },
                  {
                      label:'Coin hoạt động',
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
                      borderColor:[
                        'red'
                    ]
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
				<Line
                    
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
							text:'BIỂU ĐỒ HOẠT ĐỘNG',
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

export default BieuDoHoatDong;
