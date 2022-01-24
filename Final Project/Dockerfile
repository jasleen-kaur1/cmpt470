FROM ubuntu:16.04
MAINTAINER Jasleen Kaur <jka185@sfu.ca>

#Update Repository
RUN apt-get update -y

#Install Apache
RUN apt-get install -y apache2

#Install PHP Modules
RUN apt-get install -y php7.0 libapache2-mod-php7.0 php7.0-cli php7.0-common php7.0-mbstring php7.0-gd php7.0-intl php7.0-xml php7.0-mysql php7.0-mcrypt php7.0-zip

# Manually set up the apache environment variables
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_LOCK_DIR /var/lock/apache2
ENV APACHE_PID_FILE /var/run/apache2.pid

#Open port 80
EXPOSE 80

#Copy Application
ADD app /var/www/site

# Update the default apache site with the config we created.
ADD apache-config.conf /etc/apache2/sites-enabled/000-default.conf


#Start Apache service
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]