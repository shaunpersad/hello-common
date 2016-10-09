"use strict";
const http = require('http');
const async = require('async');

module.exports = (options, callback) => {

    var ready = false;

    async.whilst(
        () => {
            return !ready;
        },
        (callback) => {

            http.get(options, (res) => {

                ready = true;
                callback();

            }).on('error', (e) => {

                ready = false;
                callback();
            });

        },
        callback
    );
};