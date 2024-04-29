# Base Image
# For Creating the base image and for specifies the version with apache web server
FROM php:8.2-apache

# Set Apache ServerName
# For adding "ServerName" directive to the apache configuration file 
# /etc/apache2/apache2.conf : for surpressing any warning messages about not having a defined server name
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Set Apache Document Root 
# These commands set the Apache document root to /var/www/html/public. They update the Apache configuration files to reflect this change.
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# System Update and Installs
# Basically these commands will update the package lists and install some basic utilities, libraries and tools
RUN apt-get -y dist-upgrade
RUN apt-get -y update --fix-missing
RUN apt-get upgrade -y
RUN apt-get -y install apt-utils nano wget dialog
RUN apt-get -y install --fix-missing apt-utils build-essential git curl libcurl4 libcurl3-dev zip
    
# For intalling Composer, a dependency manager for php, globally on the system
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer --version=2.2.11

# Install php extensions
# Other PHP7 Extensions
RUN apt-get -y install libmcrypt-dev
 
#RUN docker-php-ext-install mcrypt
RUN apt-get -y install libsqlite3-dev libsqlite3-0 default-mysql-client
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install pdo_sqlite
RUN docker-php-ext-install mysqli
RUN docker-php-ext-install curl
 
# RUN docker-php-ext-install tokenizer
# RUN docker-php-ext-install json
RUN apt-get -y install zlib1g-dev
# RUN docker-php-ext-install zip
 
RUN apt-get -y install libicu-dev
RUN docker-php-ext-install -j$(nproc) intl
 
# RUN docker-php-ext-install mbstring
RUN apt-get update && apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libpng-dev
RUN docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/
RUN docker-php-ext-install -j$(nproc) gd
 
RUN pecl install redis
RUN docker-php-ext-enable redis
RUN apt-get install -y libcurl4-openssl-dev pkg-config libssl-dev
# RUN pecl install mongodb-1.11.1
# RUN docker-php-ext-enable mongodb

# For copying application files
COPY . /var/www/html
WORKDIR /var/www/html

# Set permissions for Laravel storage and sessions directories
# This command sets ownership (www-data:www-data) and permissions (775) recursively for specific directories within the Laravel application, including the storage and cache directories.
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache && \
    chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/storage/framework/sessions

# Enable apache modules
RUN php artisan package:discover --ansi
COPY .env .env
COPY composer.* ./
COPY database/ ./database
 
#RUN composer install --no-scripts
# a2enmod command used to enable apache modules.
RUN a2enmod rewrite headers
RUN a2enmod rewrite
RUN find /etc/apache2/sites-enabled/* -exec sed -i 's/#*[Cc]ustom[Ll]og/#CustomLog/g' {} \;
RUN find /etc/apache2/conf-enabled/other-vhosts-access-log.conf -exec sed -i 's/#*[Cc]ustom[Ll]og/#CustomLog/g' {} \;