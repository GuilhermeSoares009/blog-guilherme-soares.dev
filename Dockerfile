FROM php:8.1

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

RUN apt-get update
RUN apt-get -y install git libicu-dev libzip-dev libpng-dev libfreetype-dev
RUN docker-php-ext-install intl
RUN docker-php-ext-enable intl
RUN docker-php-ext-install zip
RUN docker-php-ext-enable zip
RUN docker-php-ext-configure gd --with-freetype
RUN docker-php-ext-install gd