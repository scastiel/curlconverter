'use strict';
var test = require('tape');
var fs = require('fs');

var curlconverter = require('../');

test('http get - python', function (t) {
  var curlHttpGetCommand = fs.readFileSync(__dirname + '/curl1.txt', 'utf-8');
  var pythonCode = curlconverter.toPython(curlHttpGetCommand);
  var goodPythonCode = fs.readFileSync(__dirname + '/python_output1.py', 'utf-8');
  t.equal(pythonCode, goodPythonCode);
  t.end();
});


test('http post - python', function (t) {
  var curlHttpGetCommand = fs.readFileSync(__dirname + '/curl2.txt', 'utf-8');
  var pythonCode = curlconverter.toPython(curlHttpGetCommand);
  var goodPythonCode = fs.readFileSync(__dirname + '/python_output2.py', 'utf-8');
  t.equal(pythonCode, goodPythonCode);
  t.end();
});


test('http post with data - python', function (t) {
  var curlHttpGetCommand = fs.readFileSync(__dirname + '/curl3.txt', 'utf-8');
  var pythonCode = curlconverter.toPython(curlHttpGetCommand);
  var goodPythonCode = fs.readFileSync(__dirname + '/python_output3.py', 'utf-8');
  t.equal(pythonCode, goodPythonCode);
  t.end();
});

test('http get - node', function (t) {
  var curlHttpGetCommand = fs.readFileSync(__dirname + '/curl1.txt', 'utf-8');
  var nodeCode = curlconverter.toNode(curlHttpGetCommand);
  var goodNodeCode = fs.readFileSync(__dirname + '/node_output1.js', 'utf-8');
  t.equal(nodeCode, goodNodeCode);
  t.end();
});


test('http post - node', function (t) {
  var curlHttpGetCommand = fs.readFileSync(__dirname + '/curl2.txt', 'utf-8');
  var nodeCode = curlconverter.toNode(curlHttpGetCommand);
  var goodNodeCode = fs.readFileSync(__dirname + '/node_output2.js', 'utf-8');
  t.equal(nodeCode, goodNodeCode);
  t.end();
});


test('http post with data - node', function (t) {
  var curlHttpGetCommand = fs.readFileSync(__dirname + '/curl3.txt', 'utf-8');
  var nodeCode = curlconverter.toNode(curlHttpGetCommand);
  var goodNodeCode = fs.readFileSync(__dirname + '/node_output3.js', 'utf-8');
  t.equal(nodeCode, goodNodeCode);
  t.end();
});