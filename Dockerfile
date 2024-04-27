#Usa la imagen php 8.3.4
FROM php:8.3.4

# Copia los archivos de tu aplicación al directorio de trabajo en el contenedor
COPY . /var/www/html
COPY composer.json .
COPY composer.lock .

RUN apt-get update && \
    apt-get install -y \
        git \
        zip \
        unzip && \
    rm -rf /var/lib/apt/lists/* && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
    composer install --no-scripts --no-autoloader

COPY . .

# Establece el directorio de trabajo
WORKDIR /var/www/html

# Expone el puerto 80 para acceder a la aplicación
EXPOSE 80

RUN composer dump-autoload --optimize

# Comando para iniciar tu aplicación (puedes cambiar esto según cómo ejecutes tu aplicación)
CMD php -S 0.0.0.0:80
