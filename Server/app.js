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
                    name: "chen",
                    status: status.Success,
                    progress_percentile: 20
                },
                {
                    id: 2,
                    name: "dan",
                    status: status.Success,
                    progress_percentile: 10
                }
            ]
        }
    );
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});