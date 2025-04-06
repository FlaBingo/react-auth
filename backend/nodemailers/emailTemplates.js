export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }
        .logo {
            max-width: 150px;
        }
        .content {
            padding: 20px 0;
        }
        .verification-code {
            background-color: #f5f5f5;
            padding: 15px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            margin: 20px 0;
            border-radius: 5px;
            letter-spacing: 2px;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            margin: 10px 0;
        }
        .footer {
            text-align: center;
            padding: 20px 0;
            border-top: 1px solid #eee;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="header">
        <img src="https://example.com/logo.png" alt="Company Logo" class="logo">
        <h1>Verify Your Email Address</h1>
    </div>
    
    <div class="content">
        <p>Hello,</p>
        <p>Thank you for registering with us. To complete your registration, please verify your email address by using the following verification code:</p>
        
        <div class="verification-code">
            {verificationCode}
        </div>
        
        <p>This code will expire in 24 hours. If you didn't request this, please ignore this email.</p>
        
        <!-- <p>Alternatively, you can click the button below to verify your email:</p>
        
        <p style="text-align: center;">
            <a href="https://example.com/verify?token={verificationCode}" class="button">Verify Email</a>
        </p> -->
    </div>
    
    <div class="footer">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        <p>If you're having trouble with the button above, copy and paste the following URL into your web browser:</p>
        <p>https://example.com/verify?token={verificationCode}</p>
    </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Our Community!</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        
        body {
            font-family: 'Poppins', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f7f9fc;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            padding: 30px 0;
        }
        .logo {
            max-width: 180px;
        }
        .welcome-box {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            margin-bottom: 20px;
        }
        h1 {
            color: #2c3e50;
            margin-top: 0;
            font-weight: 600;
        }
        .highlight {
            color: #3498db;
            font-weight: 600;
        }
        .divider {
            height: 1px;
            background: linear-gradient(to right, transparent, #e0e0e0, transparent);
            margin: 30px 0;
        }
        .cta-button {
            display: inline-block;
            padding: 14px 28px;
            background: linear-gradient(135deg, #3498db, #2c3e50);
            color: white !important;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 500;
            margin: 20px 0;
            text-align: center;
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }
        .features {
            margin: 30px 0;
        }
        .feature-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        .feature-icon {
            width: 24px;
            height: 24px;
            margin-right: 15px;
            color: #3498db;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #7f8c8d;
            font-size: 14px;
        }
        .social-icons {
            margin: 20px 0;
        }
        .social-icon {
            display: inline-block;
            margin: 0 10px;
        }
        .user-info {
            background: #f1f9fe;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://example.com/logo.png" alt="Company Logo" class="logo">
        </div>
        
        <div class="welcome-box">
            <h1>Welcome, <span class="highlight">{name}</span>!</h1>
            <p>We're thrilled to have you join our community. Your account with email <span class="highlight">{email}</span> has been successfully created.</p>
            
            <div class="user-info">
                <p><strong>Registered name:</strong> {name}</p>
                <p><strong>Email address:</strong> {email}</p>
            </div>
            
            <p>Here at [Your Company], we're committed to providing you with an exceptional experience. To get started, click the button below:</p>
            
            <div style="text-align: center;">
                <a href="https://example.com/get-started" class="cta-button">Get Started</a>
            </div>
            
            <div class="divider"></div>
            
            <h3>What you can do now:</h3>
            <div class="features">
                <div class="feature-item">
                    <span class="feature-icon">✓</span>
                    <span>Complete your profile setup</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">✓</span>
                    <span>Explore our features</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">✓</span>
                    <span>Connect with other members</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">✓</span>
                    <span>Start your first project</span>
                </div>
            </div>
            
            <p>If you have any questions, simply reply to this email—we're always happy to help.</p>
            
            <p>Cheers,<br>The [Your Company] Team</p>
        </div>
        
        <div class="social-icons">
            <a href="#" class="social-icon">Twitter</a> •
            <a href="#" class="social-icon">Facebook</a> •
            <a href="#" class="social-icon">Instagram</a> •
            <a href="#" class="social-icon">LinkedIn</a>
        </div>
        
        <div class="footer">
            <p>© 2023 [Your Company]. All rights reserved.</p>
            <p>123 Business Street, City, Country</p>
            <p>
                <a href="#">Privacy Policy</a> | 
                <a href="#">Terms of Service</a> | 
                <a href="#">Unsubscribe</a>
            </p>
        </div>
    </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Request</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        
        body {
            font-family: 'Poppins', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f7f9fc;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            padding: 30px 0;
        }
        .logo {
            max-width: 150px;
        }
        .content-box {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            margin-bottom: 20px;
        }
        h1 {
            color: #2c3e50;
            margin-top: 0;
            font-weight: 600;
            font-size: 24px;
        }
        .highlight {
            color: #3498db;
            font-weight: 500;
        }
        .divider {
            height: 1px;
            background: linear-gradient(to right, transparent, #e0e0e0, transparent);
            margin: 25px 0;
        }
        .reset-button {
            display: inline-block;
            padding: 14px 28px;
            background: linear-gradient(135deg, #3498db, #2c3e50);
            color: white !important;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 500;
            margin: 20px 0;
            text-align: center;
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }
        .info-box {
            background: #f1f9fe;
            padding: 15px;
            border-radius: 8px;
            margin: 25px 0;
            font-size: 14px;
            border-left: 4px solid #3498db;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #7f8c8d;
            font-size: 13px;
        }
        .small-text {
            font-size: 13px;
            color: #7f8c8d;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://example.com/logo.png" alt="Company Logo" class="logo">
        </div>
        
        <div class="content-box">
            <h1>Password Reset Request</h1>
            
            <p>Hello,</p>
            
            <p>We received a request to reset the password for your account associated with <span class="highlight">{email}</span>.</p>
            
            <div style="text-align: center;">
                <a href="{resetLink}" class="reset-button">Reset Password</a>
            </div>
            
            <p class="small-text" style="text-align: center;">This link will expire in 1 hour.</p>
            
            <div class="divider"></div>
            
            <div class="info-box">
                <p><strong>Didn't request this?</strong></p>
                <p>If you didn't request a password reset, please ignore this email or contact support if you have concerns about your account's security.</p>
            </div>
            
            <p>For your security, this link can only be used once. If you need to reset your password again, please visit our <a href="https://example.com/forgot-password">password reset page</a>.</p>
        </div>
        
        <div class="footer">
            <p>© 2023 [Your Company]. All rights reserved.</p>
            <p>
                <a href="#" style="color: #3498db; text-decoration: none;">Help Center</a> | 
                <a href="#" style="color: #3498db; text-decoration: none;">Privacy Policy</a>
            </p>
            <p>123 Security Avenue, Tech City, TC 10001</p>
        </div>
    </div>
</body>
</html>

`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Updated Successfully</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        
        body {
            font-family: 'Poppins', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f7f9fc;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            padding: 30px 0;
        }
        .logo {
            max-width: 150px;
        }
        .success-box {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            margin-bottom: 20px;
            text-align: center;
        }
        h1 {
            color: #2ecc71;
            margin-top: 0;
            font-weight: 600;
            font-size: 24px;
        }
        .checkmark {
            color: #2ecc71;
            font-size: 48px;
            margin-bottom: 20px;
        }
        .highlight {
            color: #3498db;
            font-weight: 500;
        }
        .info-box {
            background: #f1f9fe;
            padding: 15px;
            border-radius: 8px;
            margin: 25px 0;
            font-size: 14px;
            text-align: left;
            border-left: 4px solid #3498db;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #7f8c8d;
            font-size: 13px;
        }
        .security-tip {
            display: flex;
            align-items: center;
            margin: 15px 0;
        }
        .security-icon {
            color: #e74c3c;
            margin-right: 10px;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://example.com/logo.png" alt="Company Logo" class="logo">
        </div>
        
        <div class="success-box">
            <div class="checkmark">✓</div>
            <h1>Password Updated Successfully</h1>
            
            <p>Your password for account <span class="highlight">{email}</span> has been successfully changed.</p>
            
            <div class="info-box">
                <p><strong>Security confirmation:</strong></p>
                <p>This change was completed on <strong>{currentDate}</strong> from <strong>{deviceInfo}</strong> at <strong>{location}</strong>.</p>
            </div>
            
            <div style="margin-top: 30px;">
                <div class="security-tip">
                    <span class="security-icon">!</span>
                    <span>If you didn't make this change, please contact us immediately.</span>
                </div>
                
                <div class="security-tip">
                    <span class="security-icon">✓</span>
                    <span>Consider enabling two-factor authentication for added security.</span>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>© 2023 [Your Company]. All rights reserved.</p>
            <p>
                <a href="#" style="color: #3498db; text-decoration: none;">Security Center</a> | 
                <a href="#" style="color: #3498db; text-decoration: none;">Contact Support</a>
            </p>
            <p>123 Security Avenue, Tech City, TC 10001</p>
        </div>
    </div>
</body>
</html>

`;