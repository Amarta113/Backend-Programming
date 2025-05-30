const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
    <head>
      <style>
          body {
              width: 100%;
              height: 100%;
              position: relative;
              background-color: rgb(97, 210, 201);
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
          ul.myUL {
            display: inline-block;
            text-align: left;
            }

          li {
             margin: 10px 0;
          }
        h1 {
            font-size: 35px;
        }

        p {
            font-size: 40px;
        }

          a{
            font-size: 24px;
            margin: 10px 0;
            text-decoration: none;
            color: #ffd;
            transition: color 0.3s;
          }
          a:hover {
            color:rgb(112, 235, 254);
          }
          
      </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to the Adventure Hub Of Maths!</h1>
          <li><a href="/calculator">Go to Calculations!</a></li></div>
      </body>
    </html>
    `);
    return res.end();
  } else if (req.url.toLowerCase() === '/calculator'){
      res.setHeader('Content-Type', 'text/html');
      res.write(`
      <html>
          <head>
            <script>
              function add(){
                  var num1, num2;
                  num1 = parseInt(document.getElementById('FirstNumber).value);
                  num2 = parseInt(document.getElementById('SecondNumber).value);
            }
            </script>
          </head>
        <body>
          <h1>Here is the Calculator</h1>
          <form action="/calculator-result" method="POST">
          <p>First Number: <input id='FirstNumber' name="FirstNumber"></p>
          <p>Second Number: <input id='SecondNumber' name="SecondNumber"></p>
          <button onclick='add()'>Sum</button> 
          </form>
        </body>
      </html>
      `);
      return res.end();
  } else if (req.url.toLowerCase() === '/calculator-result' && req.method === 'POST'){
      return sumRequestHandler(req, res);
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head>
      <style>
          *,
          html {
              margin: 0;
              padding: 0;
              border: 0;
          }

          html {
              width: 100%;
              height: 100%;
          }

          body {
              width: 100%;
              height: 100%;
              position: relative;
              background-color: rgb(66, 147, 161);
          }

          .center {
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
          ul.myUL {
            display: inline-block;
            text-align: left;
            }

          li {
             margin: 10px 0;
          }

        h1{
            font-size: 35px;
        }

        p{
            font-size: 40px;
        }
         
        a{
            font-size: 24px;
            margin: 10px 0;
            text-decoration: none;
            color: #ffd;
            transition: color 0.3s;
        }

        a:hover {
            color:rgb(112, 235, 254);
        }

      </style>
      </head>
      <body>
        <div class="container">
          <h1>Ooops!, 404 page not found!</h1>
          <ul>
          <li><a href="/">Go to home!</a></li>
          </ul>
        </body>
    </html>
    `);
    return res.end();

}

exports.requestHandler = requestHandler;
