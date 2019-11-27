// import Styliner from 'styliner';
// import fs from 'fs';

export default async (userName, password, type) => {
  // const styliner = new Styliner(__dirname + '/');

  // const originalSource = fs.readFileSync(__dirname + '/index.html', 'utf8');

  // const string = await styliner.processHTML(originalSource);
  // console.log('resulting string', string);
  const htmlString = ` <html>
  <head>
  </head>
    <body class="body" style="background: white;">
    <div class="container" style="width: 500; height: 400; background: white; text-align: center;">
      <div class="content" style="width: 500; height: 400; background: white; text-align: center; align-self: center; border-width: 1; border-color: #757575; border-style: solid; margin-top: 0; margin-right: 0; margin-bottom: 0; margin-left: 0; padding-top: 0; padding-right: 0; padding-bottom: 0; padding-left: 0;">
        <div class="banner" style="background: #00B0FF; height: 80; margin-top: 0; margin-right: 0; margin-bottom: 0; margin-left: 0;">
          <h1 style="color: white; margin-top: 0; margin-right: 0; margin-bottom: 0; margin-left: 0;">User email verification</h1>
      </div>
      <div class="main-body" style="background: white; width: 500; margin-top: 0; margin-right: 0; margin-bottom: 0; margin-left: 0; height: auto;">
        <h2>Congratulation you are added as ${type}</h2>
        <p style="color: black;">Please login by using following user name and password.</p>
        <div class="data" style="width: 500; height: auto; margin-left: 100;">
        <p style="color: black;">User Name: ${userName} </p>
        <p style="color: black;">Password: ${password}</p>
      </div>
      <a style="background: white; text-align: center; width: 100;" href="http://bidha.co/#/login" target="_blank">
      <button style="background: #00B0FF; color: white; width: 100; text-align: center;">Login</button>
      </a>
      <p style="color: black;">If you have any type of login issue then please send email to info.bidha.123@gmail.com <br> Thank You! </p>
    </div>
    </div>
  </div>
</body>
</html>`;
  return htmlString;
};
