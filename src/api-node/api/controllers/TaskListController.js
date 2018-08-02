'use strict';

exports.list_all_tasks = function(req, res) {
    console.log('[FC] list_all_tasks');

    res.json(
    {
        "id": 1,
        "name": "Josie Greenfelder",
        "email": "Raoul_Aufderhar@yahoo.com",
        "status": "active",
        "lorem": true
    });

};




exports.create_task = function(req, res) {

    console.log('[FC] create_task');

};


exports.read_task = function(req, res) {
    console.log('[FC] read_task');

};


exports.update_task = function(req, res) {

    console.log('[FC] update_task');

};


exports.delete_task = function(req, res) {

    console.log('[FC] delete_task');

};

