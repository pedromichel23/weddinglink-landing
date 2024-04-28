# Usar la imagen oficial de PHP
FROM php:8.3.4

# Instalar las dependencias necesarias
RUN apt-get update && apt-get install -y \
    git \
    unzip

# Instalar Composer globalmente
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copiar los archivos de la aplicación al contenedor
COPY . /var/www/html

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Instalar las dependencias de Composer
RUN composer install

# Exponer el puerto
EXPOSE 80

# Comando para iniciar tu aplicación (puedes cambiar esto según cómo ejecutes tu aplicación)
CMD php -S 0.0.0.0:80
# CMD ["php", "-S", "0.0.0.0:80"]