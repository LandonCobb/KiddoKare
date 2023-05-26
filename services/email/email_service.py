from email.message import EmailMessage
import smtplib
from kafka import KafkaConsumer
import json
import os

def send_email(receiver, subject, body):
    # sender = "sophie2@ethereal.email"
    sender = os.environ.get("SENDER")
    # password = "VqwSZwvPq52H2DPuKT"
    password = 	os.environ.get("SENDER_PASSWORD")

    message = EmailMessage()
    message["From"] = sender
    message["To"] = receiver
    message["Subject"] = subject
    message.set_content(body)

    with smtplib.SMTP("smtp.ethereal.email", 587) as smtp:
        smtp.starttls()
        smtp.login(sender, password)
        smtp.sendmail(sender, receiver, message.as_string())

consumer = KafkaConsumer(os.environ.get("EMAIL_TOPIC"), bootstrap_servers=[os.environ.get("KAFKA_HOST")], group_id="email", value_deserializer=lambda value : json.loads(value.decode("utf-8")))

for msg in consumer:
    data = msg.value
    print(data)
    send_email(data["receiver"], data["subject"], data["body"])