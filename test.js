const snoowrap = require("snoowrap");
const scopes = require("./scopes");

// username: 'dummy-account1234'
// password: 'qwertyuiop1234'

const r = new snoowrap({
  userAgent: "redita-clone2",
  clientId: "L6EI6xqvoK0d2_nN4YTCVg",
  clientSecret: "WHpK0bWweUDurveE4X76WeTqgPnsHA",
  username: "dummy-account1234",
  password: "qwertyuiop1234",
});

let authenticationUrl = snoowrap.getAuthUrl({
  userAgent: "redita-clone2",
  clientId: "L6EI6xqvoK0d2_nN4YTCVg",
  clientSecret: "WHpK0bWweUDurveE4X76WeTqgPnsHA",
  scope: scopes,
  redirectUri: "http://127.0.0.1:3000",
  username: "dummy-account1234",
  password: "qwertyuiop1234",
  permanent: true,
  state: "fe211bebc52eb3da9bef8db6e63104d3",
});
res.redirect(authenticationUrl);

r.getMe().then((res) => console.log(res));

r.getSubscriptions().then((res) => console.log(res[0]));
