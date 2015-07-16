var chance = require('chance').Chance()
  , spawn = require('json-spawn')(chance)

module.exports = function jsonChance(query) {
  return spawn(query)
}
