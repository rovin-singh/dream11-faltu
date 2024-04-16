const express = require("express");
const app = express();
const axios = require("axios")
const path = require("path")

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res, next) => {
    try {
        let data = JSON.stringify({
            "isNonCashAppVersion": false,
            "sportsType": 1
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://www.my11circle.com/api/lobbyApi/v1/getMatches',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'SSID=SSID1edc5de7-462d-4255-962d-95c4d72f0295; SSIDuser=SSID1edc5de7-462d-4255-962d-95c4d72f0295%3A179277280; device.info.cookie={"bv":"false","bn":"false","osv":"false","osn":"false","tbl":"false","vnd":"false","mdl":"false"}; '
            },
            data: data
        };
        let response = await axios.request(config);
        // res.send(response.data)
        // console.log(response.data)
        let keys = Object.keys(response.data.matches)
        res.render("index", { keys, data: response.data.matches });
    } catch (error) {
        next(error.message);
    }
});

app.get("/movie", async (req, res, next) => {
    try {
        let data = JSON.stringify({
            "matchId": req.query.matchid
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://www.my11circle.com/api/lobbyApi/matches/v1/getMatchPlayerPoints',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'SSID=SSID1edc5de7-462d-4255-962d-95c4d72f0295; SSIDuser=SSID1edc5de7-462d-4255-962d-95c4d72f0295%3A179277280; device.info.cookie={"bv":"false","bn":"false","osv":"false","osn":"false","tbl":"false","vnd":"false","mdl":"false"}; '
            },
            data: data
        };
        let response = await axios.request(config);
        res.status(200).send(response.data);
    } catch (error) {
        next(error.message);
    }
})

app.get("/leaderboard", (req, res, next) => {
    try {
        res.render("leaderboard");
    }
    catch (error) {
        next(error);
    }
})


app.get("/test", async (req, res, next) => {
    try {
        let data = JSON.stringify({
            "matchId": 78488,
            "teamId": 2142961218,
            "contestId": 197054030,
            "nonCashAppVersion": true
        }
        );
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://www.my11circle.com/api/lobbyApi/userteams/v1/getTeamDetails',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'SSID=SSID1edc5de7-462d-4255-962d-95c4d72f0295; SSIDuser=SSID1edc5de7-462d-4255-962d-95c4d72f0295%3A179277280; device.info.cookie={"bv":"false","bn":"false","osv":"false","osn":"false","tbl":"false","vnd":"false","mdl":"false"}; '
            },
            data: data
        };
        let response = await axios.request(config);
        console.log(response)
    }
    catch (error) {
        next(error)
    }
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
