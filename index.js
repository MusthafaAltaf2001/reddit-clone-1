const express = require("express");
const cors = require("cors");
const app = express();
const snoowrap = require("snoowrap");
const scopes = require("./scopes");

let moreBestPosts;
let moreHotPosts;
let moreNewPosts;
let moreTopPosts;


let r = null;


app.use(express.json());
app.use(cors());

app.post("/loginStatus", (req, res) => {});

app.get("/getRequester", (req, res) => {
  res.json(r);
});

app.get("/login", async (req, res) => {
  let authenticationUrl = await snoowrap.getAuthUrl({

  });
  res.json(authenticationUrl);
});

app.get("/", async (req, res) => {
  let code = req.query.code;
  console.log("code: " + code);
  await snoowrap
    .fromAuthCode({
    })
    .then((requester) => (r = requester))
    .catch((err) => console.log(err));

  console.log(r);
  // res.json(r.getMe());
});

app.get("/best", (req, res) => {
  r.getBest().then((bestPosts) => {
    res.json(bestPosts);
    moreBestPosts = bestPosts;
  });
});

app.get("/fetchMoreBest", (req, res) => {
  moreBestPosts.fetchMore({ amount: 25 }).then((bestPosts) => {
    res.json(bestPosts);
    moreBestPosts = bestPosts;
  });
});

app.get("/hot", (req, res) => {
  r.getHot().then((hotPosts) => {
    res.json(hotPosts);
    moreHotPosts = hotPosts;
  });
});

app.get("/fetchMoreHot", (req, res) => {
  moreHotPosts.fetchMore({ amount: 25 }).then((hotPosts) => {
    res.json(hotPosts);
    moreHotPosts = hotPosts;
  });
});

app.get("/new", (req, res) => {
  r.getNew().then((newPosts) => {
    res.json(newPosts);
    moreNewPosts = newPosts;
  });
});

app.get("/fetchMoreNew", (req, res) => {
  moreNewPosts.fetchMore({ amount: 25 }).then((newPosts) => {
    res.json(newPosts);
    moreNewPosts = newPosts;
  });
});

app.get("/top", (req, res) => {
  r.getTop().then((topPosts) => {
    res.json(topPosts);
    moreTopPosts = topPosts;
  });
});

app.get("/fetchMoreTop", (req, res) => {
  moreTopPosts.fetchMore({ amount: 25 }).then((topPosts) => {
    res.json(topPosts);
    moreTopPosts = topPosts;
  });
});

app.get("/fetchUserInfo", (req, res) => {
  r.getMe()
    // .then((userInfo) => console.log(userInfo))
    .then((userInfo) => res.json(userInfo))
    .catch((err) => console.log(err));
});

var port = process.env.PORT || 3001;

app.listen(port, () => console.log(`listening to port ${port}`));
