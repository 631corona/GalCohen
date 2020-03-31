import { getStatusTitle } from '../utility';

const initialState = {
    options: {
        chart: {
            background: '#f4f4f4',
            foreColor: '#333'
        },
        xaxis: {
            type: 'category',
            categories: []
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        fill: {
            colors: ['#f44336']
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return getStatusTitle(val)
            }
            ,
            style: {
                fontSize: '10px'
            }
        },
        title: {
            text: 'Cure found status',
            align: 'center',
            margin: 50,
            offsetY: 20,
            style: {
                fontSize: '30px'
            }
        }
    },
    series: [
        {
            name: 'CureFound',
            data: []
        }
    ]
}

const reducer = (state = initialState, action) => {

    return state;
};

export default reducer;