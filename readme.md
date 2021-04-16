# merged-vbb-stations

**A precomputed list of [VBB stations that should be one](https://derhuerst.github.io/merge-vbb-stations/).** The result of running [`merge-vbb-stations`](https://github.com/derhuerst/merge-vbb-stations#merge-vbb-stations), published to npm.

[![npm version](https://img.shields.io/npm/v/merged-vbb-stations.svg)](https://www.npmjs.com/package/merged-vbb-stations)
[![build status](https://api.travis-ci.org/derhuerst/merged-vbb-stations.svg?branch=master)](https://travis-ci.org/derhuerst/merged-vbb-stations)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/merged-vbb-stations.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


## Installing

```shell
npm install merged-vbb-stations
```


## Usage

```js
const merged = require('merged-vbb-stations')

console.log('900000120022') // Singerstr.
// 900000120022 // Singerstr.

console.log('900000013172') // U Kottbusser Tor [Bus Adalbertstr.]
// 900000013102 // U Kottbusser Tor
```


## Contributing

If you have a question or have difficulties using `merged-vbb-stations`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/merged-vbb-stations/issues).
