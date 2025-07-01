
const io = require('socket.io');
const Client = require('socket.io-client');

let ioServer;
let httpServer;
let httpServerAddr;
let clientSocket1;
let clientSocket2;

beforeAll((done) => {
  const express = require('express');
  const app = express();
  httpServer = require('http').createServer(app);
  ioServer = io(httpServer);

  ioServer.on('connection', (socket) => {
    socket.on('canvas-data', (data) => {
      socket.broadcast.emit('canvas-data', data);
    });
  });

  httpServer.listen(() => {
    httpServerAddr = httpServer.address();
    clientSocket1 = Client(`http://localhost:${httpServerAddr.port}`);
    clientSocket2 = Client(`http://localhost:${httpServerAddr.port}`);
    done();
  });
});

afterAll(() => {
  ioServer.close();
  clientSocket1.close();
  clientSocket2.close();
  httpServer.close();
});

test('canvas-data event should be broadcasted to other clients', (done) => {
  const dummyData = { lines: [{ x: 1, y: 1 }] };

  clientSocket2.on('canvas-data', (data) => {
    expect(data).toEqual(dummyData);
    done();
  });

  clientSocket1.emit('canvas-data', dummyData);
});
