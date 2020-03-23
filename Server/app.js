var express = require("express");
var app = express();
var cors = require('cors')

const status = {
    Failed: 'FAILED',
    InProgress: 'IN_PROGRESS',
    Success: 'SUCCESS'
}

app.use(cors())
app.get("/v1/labs", (req, res, next) => {
    res.json(
        {
            labs: [
                {
                    id: 1,
                    name: "חן",
                    status: status.Success,
                    progress_percentile: 90
                },
                {
                    id: 2,
                    name: "דן",
                    status: status.Success,
                    progress_percentile: 99
                },
                {
                    id: 3,
                    name: "דביר",
                    status: status.Failed,
                    progress_percentile: 0
                },
                {
                    id: 4,
                    name: "עמית",
                    status: status.Failed,
                    progress_percentile: 10
                },
                {
                    id: 5,
                    name: "ליאת",
                    status: status.InProgress,
                    progress_percentile: 15
                },
                {
                    id: 6,
                    name: "אופיר",
                    status: status.Failed,
                    progress_percentile: 26
                },
                {
                    id: 7,
                    name: "רועי",
                    status: status.InProgress,
                    progress_percentile: 5
                },
                {
                    id: 8,
                    name: "עדי",
                    status: status.Failed,
                    progress_percentile: 74
                }
            ]
        }
    );
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});