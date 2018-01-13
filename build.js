'use strict'

const applyToAll = require('merge-vbb-stations/lib/apply-to-all')

const {mapping} = applyToAll()

process.stdout.write(JSON.stringify(mapping.toObject()) + '\n')
