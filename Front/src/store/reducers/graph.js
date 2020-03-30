
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
                switch (val) {
                    case (1):
                        return "FAILED";
                    case (2):
                        return "PROGRESS";
                    case (3):
                        return "SUCCESS";
                    default:
                        return "no status";
                }
            },
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
    if (action.type === 'GET_CURE_DETAILS') {
        const updatedData = action.labsData.map(lab => {
            const status = {
                'FAILED': 1,
                'IN_PROGRESS': 2,
                'SUCCESS': 3
            }
            return status[lab.status];
        });
        const updatedCatagories = action.labsData.map(lab => lab.name);
        return {
            ...state,
            options: {
                ...state.options,
                xaxis: {
                    ...state.options.xaxis,
                    categories: updatedCatagories
                }
            },
            series: [{
                name: 'CureFound',
                data: updatedData
            }]
        }
    }
    return state;
};

export default reducer;