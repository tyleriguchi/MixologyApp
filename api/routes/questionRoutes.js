'use strict';
var FirstQuestion = require('../models/FirstQuestion');
var SecondQuestion = require('../models/SecondQuestion');

// exports.collection = function(req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   User.find({}, function(err, users) {
//     if(err) {
//       res.send(500, {'error': err});
//     } else {
//       res.send(JSON.stringify(users));
//     }
//   });
// };

exports.getFirstQuestion = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  FirstQuestion.count({}, function(err, count){
    var rand = Math.ceil(Math.random()*count);
    FirstQuestion.findOne({ random: rand }, function(err, responseQuestion) {
      if(err) {
        res.send(500, {'error': err});
      } else {
        res.send(responseQuestion);
      }
    });
  });
};

exports.getSecondQuestion = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  SecondQuestion.count({}, function(err, count){
    var rand = Math.ceil(Math.random()*count);
    SecondQuestion.findOne({ random: rand }, function(err, responseQuestion) {
      if(err) {
        res.send(500, {'error': err});
      } else {
        res.send(responseQuestion);
      }
    });
  });
};

exports.createFirstQuestion = function(req, res) {
  FirstQuestion.count({}, function(err, count){
    req.body.random = count + 1;
    var question = new FirstQuestion(req.body);
    question.save(function(err, responseQuestion) {
      if(err) {
        res.send(500, {'error': err});
      } else {
        res.send(responseQuestion);
      }
    });
  });
};

exports.createSecondQuestion = function(req, res) {
  SecondQuestion.count({}, function(err, count){
    req.body.random = count + 1;
    var question = new SecondQuestion(req.body);
    question.save(function(err, responseQuestion) {
      if(err) {
        res.send(500, {'error': err});
      } else {
        res.send(responseQuestion);
      }
    });
  });
};

// exports.update = function(req, res) {
//   var id = req.params.id;
//   delete req.body._id;
//   User.update({'_id': String(id)}, user, function(err){
//   var user = req.body;
//     if(err) {
//       res.send(500, {'error': err});
//     } else {
//       res.send({msg: 'success'});
//     }
//   });
// };

// exports.destroy = function(req, res) {
//   var id = String(req.params.id);
//   User.remove({'_id': id}, function(err){
//     if(err){
//       res.send(500, {'error': err});
//     } else {
//       res.send({'msg': 'success'});
//     }
//   });
// };
