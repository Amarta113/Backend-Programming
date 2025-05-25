const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
    if (req.url === "/home-page"){
        res.setHeader('Content-Type', 'text/html');
        res.write(`
          <html>
          <head>
          <title>Home</title>
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
                  background-color: rgb(36, 160, 179);
              }

              .center {
                  width: 100%;
                  height: 50%;
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

              p {
                  font-size: 40px;
              }
              </style>
          </head>
          </html>
          <div class="center">
          <h1>Welcome to the Home Page</h1>
          <p>This is your launchpad to an exciting shopping adventure!</p>
          </div>
          `);
        return res.end();
    } else if (req.url === "/man-page"){
        res.setHeader('Content-Type', 'text/html');
        res.write(`
          <html>
          <head>
          <title>Men's collection</title>
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
                  background-color: rgb(229, 150, 33);
              }

              .center {
                  width: 100%;
                  height: 50%;
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

              p {
                  font-size: 40px;
              }
              </style>
          </head>
          </html>
          <div class="center">
          <h1>Welcome to the Men's Collection</h1>
          <p>Explore trending fashion and must-have essentials for men.</p>
          </div>`);
        return res.end();
    } else if (req.url === "/women-page"){
        res.setHeader('Content-Type', 'text/html');
        res.write(`
          <html>
          <head>
          <title>Women's world</title>
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
                  background-color: rgb(74, 125, 94);
              }

              .center {
                  width: 100%;
                  height: 50%;
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

              p {
                  font-size: 40px;
              }
              </style>
          </head>
          </html>
          <div class="center">
          <h1>Welcome to the Women's World</h1>
          <p>Discover beauty, elegance, and bold styles crafted for women.</p>
          </div>`);
        return res.end();
    } else if (req.url === "/kids-page"){
        res.setHeader('Content-Type', 'text/html');
        res.write(`
          <html>
          <head>
          <title>Kids Zone</title>
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
                  background-color: rgb(187, 42, 236);
              }

              .center {
                  width: 100%;
                  height: 50%;
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

              p {
                  font-size: 40px;
              }
              </style>
          </head>
          </html>
          <div class="center">
          <h1>Welcome to the Kids Zone</h1>
          <p>Find joyful and playful picks for your little stars.</p>
          </div>`);
        return res.end();
      }
    else if (req.url === "/cart-page"){
        res.setHeader('Content-Type', 'text/html');
        res.write(`
          <html>
          <head>
          <title>View Cart</title>
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
                  background-color: rgba(244, 128, 61, 0.69);
              }

              .center {
                  width: 100%;
                  height: 50%;
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

              p {
                  font-size: 40px;
              }
              </style>
          </head>
          </html>
          <div class="center">
          <h1>Your Cart</h1>
          <p>Review your selected treasures before checkout!</p>
          </div> `);
        return res.end();
    }
   
    res.write(`
    <html>
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
              background-color: rgb(42, 78, 236);
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
      <body>
        <div class="container">
          <h1>Welcome to the Adventure Hub!</h1>
          <p>Choose your path below and begin your journey</p>
          <ul class="myUL">
          <li><a href="/home-page">Home Page</a></li>
          <li><a href="/man-page">Man's Collection</a></li>
          <li><a href="/women-page">Women's World</a></li>
          <li><a href="/kids-page">Kids Zone</a></li>
          <li><a href="/cart-page">View Cart</a></li>
          </ul>
        </div>
      </body>
    </html>
    `);
    res.end();

});


const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
