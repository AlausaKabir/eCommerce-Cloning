const EncyptedPassword = (req.body.password = CryptoJs.AES.encrypt(
  req.body.password,
  PASS_SEC
).toString());

module.exports = { EncyptedPassword };
