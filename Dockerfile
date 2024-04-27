#Usa la imagen php 8.3.4
FROM php:8.3.4

# Copia los archivos de tu aplicación al directorio de trabajo en el contenedor
COPY . /var/www/html

# Establece el directorio de trabajo
WORKDIR /var/www/html

# Expone el puerto 80 para acceder a la aplicación
EXPOSE 80

RUN composer install

# Comando para iniciar tu aplicación (puedes cambiar esto según cómo ejecutes tu aplicación)
CMD php -S 0.0.0.0:80
# CMD ["php", "-S", "0.0.0.0:80"]