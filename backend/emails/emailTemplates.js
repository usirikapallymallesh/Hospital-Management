exports.welcomeMail = ({ userName, userEmail, userDashboardLink }) => {
  return `
    <div>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to [Your Service Name]</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: auto;
                background: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            h1 {
                color: #333;
                text-align: center;
            }
            p {
                color: #555;
                line-height: 1.5;
            }
            .button {
                display: inline-block;
                background-color: #007bff;
                color: white;
                padding: 10px 15px;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 10px;
            }
            .footer {
                margin-top: 20px;
                font-size: 12px;
                color: #999;
                text-align: center;
            }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to [Your Service Name]!</h1>
          <p>Hi ${userName},</p>
          <p>Thank you for joining us! We’re excited to have you on board.</p>
          <p>To get started, visit your <a href="${userDashboardLink}" class="button">dashboard</a>.</p>
          <p>If you have any questions, feel free to reach out!</p>
          <p>Best Regards,<br>[Your Service Name] Team</p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Hospital. All rights reserved.
        </div>
      </body>
    </div>`;
};

exports.forgottenPasswordMail = ({ userName, resetLink }) => {
  return `
    <div>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset Request</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: auto;
                background: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            h1 {
                color: #333;
                text-align: center;
            }
            p {
                color: #555;
                line-height: 1.5;
            }
            .button {
                display: inline-block;
                background-color: #007bff;
                color: white;
                padding: 10px 15px;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 10px;
            }
            .footer {
                margin-top: 20px;
                font-size: 12px;
                color: #999;
                text-align: center;
            }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Password Reset Requested</h1>
          <p>Hi ${userName},</p>
          <p>We received a request to reset your password. To create a new password, please click the link below:</p>
          <a href="${resetLink}" class="button">Reset Password</a>
          <p>If you did not request this change, please ignore this email.</p>
          <p>Best Regards,<br>[Your Service Name] Team</p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} [Your Service Name]. All rights reserved.
        </div>
      </body>
    </div>`;
};

exports.passwordUpdatedMail = ({ userName }) => {
  return `
    <div>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Updated Successfully</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: auto;
                background: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            h1 {
                color: #333;
                text-align: center;
            }
            p {
                color: #555;
                line-height: 1.5;
            }
            .footer {
                margin-top: 20px;
                font-size: 12px;
                color: #999;
                text-align: center;
            }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Password Updated Successfully</h1>
          <p>Hi ${userName},</p>
          <p>This is to confirm that your password has been updated successfully.</p>
          <p>If you did not make this change, please contact our support team immediately.</p>
          <p>Thank you for being a valued member of our community!</p>
          <p>Best Regards,<br>[Your Service Name] Team</p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} [Your Service Name]. All rights reserved.
        </div>
      </body>
    </div>`;
};
