'use strict'

const applyToAll = require('merge-vbb-stations/lib/apply-to-all')
const fs = require('fs')
const path = require('path')

const {mapping, instructions} = applyToAll()

const writeJSON = (file, data) => {
	fs.writeFileSync(path.join(__dirname, file), JSON.stringify(data) + '\n')
}

writeJSON('index.json', mapping.toObject())
writeJSON('instructions.json', instructions)
