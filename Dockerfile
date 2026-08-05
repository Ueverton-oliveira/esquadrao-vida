FROM ruby:3.3.0

RUN apt-get update -qq && \
    apt-get install -y \
      build-essential \
      libpq-dev \
      postgresql-client \
      git \
      curl \
      nodejs \
      npm

WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

COPY docker-entrypoint.sh /usr/bin/docker-entrypoint

RUN chmod +x /usr/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]

EXPOSE 3000

CMD ["bin/rails", "server", "-b", "0.0.0.0"]
