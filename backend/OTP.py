import os
import random
from twilio.rest import Client

def generateOTP():
    return random.randrange(100000, 999999)


def getOTPApi(phone_number, session):
    account_sid = os.getenv('TWILIO_ACCOUNT_SID')
    auth_token = os.getenv('TWILIO_AUTH_TOKEN')
    client = Client(account_sid, auth_token)
    otp = generateOTP()
    session['response'] = str(otp)
    body = 'Your OTP is' + str(otp)
    message = client.messages.create(
                                from_="+12057977769",
                                body=body,
                                to=phone_number
    )
    if message.sid:
        return True
    else:
        return False
