const WebSocket = require('ws');

const port = process.env.PORT || 3000;

const wss = new WebSocket.Server({ port });

wss.on('connection', (ws) => {
  ws.on('message', (msg) => {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg.toString());
      }
    });
  });
});

console.log("running on", port);