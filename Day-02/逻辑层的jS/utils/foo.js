
function say(msg) {
  console.log('Hello ' + msg)
}

module.exports = {
  say : say 
}
// 不支持exports.say,仅支持module.exports
// exports.say = { }
