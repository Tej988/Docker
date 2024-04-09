FROM openjdk:11-slim

RUN groupadd -r -g 1000 myuser && useradd -r -u 1000 -g myuser myuser

WORKDIR /app

COPY helloworld.java .

RUN javac  helloworld.java

RUN chown -R myuser:myuser /app

USER myuser

CMD ["java", "helloworld"]