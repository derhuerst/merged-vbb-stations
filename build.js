'use strict'

const applyToAll = require('merge-vbb-stations/lib/apply-to-all')
const analyze = require('merge-vbb-stations')
const fs = require('fs')
const path = require('path')

const {mapping, instructions} = applyToAll()

for (let instruction of instructions) {
	const {op, src, dest, stopName} = instruction
	if (op === analyze.MERGE) {
		console.info(src.id, src.name, 'as', stopName, 'into', dest.id, dest.name)
	} else console.error('unknown merge operation:', op)
}

const writeJSON = (file, data) => {
	fs.writeFileSync(path.join(__dirname, file), JSON.stringify(data) + '\n')
}

writeJSON('index.json', mapping.toObject())
writeJSON('instructions.json', instructions)
