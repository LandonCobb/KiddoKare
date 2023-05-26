FROM python:3.9

WORKDIR /user/src/app

ADD email_service.py ./
RUN pip install kafka-python
CMD ["python", "./email_service.py"]