import React from 'react'
import { BarChart } from 'react-native-svg-charts'

class BarChartExample extends React.PureComponent {

    render() {

        const {
                  fillColor         = 'rgb(134, 65, 244)',
                  fillColorNegative = 'rgba(134, 65, 244, 0.2)',
              } = this.props

        const data    = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        const barData = [
            {
                values: data,
                positive: {
                    fill: fillColor,
                    // other react-native-svg supported props
                },
                negative: {
                    fill: fillColorNegative,
                    // other react-native-svg supported props
                },
            },
        ]

        return (
            <BarChart
                style={ { height: 200 } }
                data={ barData }
                contentInset={ { top: 30, bottom: 30 } }
                { ...this.props }
            />
        )
    }

}

export default BarChartExample
