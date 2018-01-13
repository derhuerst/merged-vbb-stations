'use strict'

const test = require('tape')

const merged = require('.')

test('contains "Singerstr." as unmerged', (t) => {
	t.plan(1)
	// Singerstr.
	t.equal(merged['900000120022'], '900000120022')
})

test('contains "U Kottbusser Tor [Bus Adalbertstr.]" as merged', (t) => {
	t.plan(1)
	// U Kottbusser Tor [Bus Adalbertstr.] -> U Kottbusser Tor
	t.equal(merged['900000013172'], '900000013102')
})
