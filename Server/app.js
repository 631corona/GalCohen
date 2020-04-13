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
                    name: "Chen",
                    status: status.Success,
                    progress_percentile: 100
                },
                {
                    id: 2,
                    name: "Dan",
                    status: status.Success,
                    progress_percentile: 100
                },
                {
                    id: 3,
                    name: "Dvir",
                    status: status.Failed,
                    progress_percentile: 0
                },
                {
                    id: 4,
                    name: "Amit",
                    status: status.Failed,
                    progress_percentile: 10
                },
                {
                    id: 5,
                    name: "Liat",
                    status: status.InProgress,
                    progress_percentile: 15
                },
                {
                    id: 6,
                    name: "Ofir",
                    status: status.Failed,
                    progress_percentile: 26
                },
                {
                    id: 7,
                    name: "Roei",
                    status: status.InProgress,
                    progress_percentile: 5
                },
                {
                    id: 8,
                    name: "Adi",
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