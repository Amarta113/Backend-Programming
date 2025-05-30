const sumRequestHandler = (req, res) => {
  console.log('In sum reaquest handler', req.url);
  const body = [];
  req.on('data', chunk =>  {
    console.log(chunk);
    body.push(chunk); 
  });
  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.FirstNumber) + Number(bodyObj.SecondNumber);
    console.log(result);
  
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
    <head>
    <title>Practice set</title>
    <style>
        body {
              width: 100%;
              height: 100%;
              position: relative;
              background-color: rgb(138, 124, 208);
          }


        div.container{
              width: 100%;
              margin: 0;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
              font-family: "Trebuchet MS", Helvetica, sans-serif;    
              text-align: center;
          }
        h1 {
            font-size: 35px;
        }
      </style>
    </head>
    <body>
    <div class="container">
    <h1>Your sum result is ${result}</h1>
    </div>
    </body>
    </html>
    `);
  return res.end();
  })
}

exports.sumRequestHandler = sumRequestHandler;
