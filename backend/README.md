# Database schema

1. [ERD](#ERD)
2. [How to Import database](#how-to-Import-database)
    - [Create container](#create-container)   
    - [Connect to a container](#connect-to-a-container)   
    - [Create database](#create-database)   
    - [Import database ](#import-database)   
3. [Connect](#connect)  
    - [Server](#server)   
    - [Mysql](#mysql)   


## ERD
![ERD](https://github.com/vincentli77/Projet-SGBDR/blob/main/backend/dbms/databaseSchema.png?raw=true)

## How to Import database
### Create container
```
docker run \
    --name mariadb \
    -d \
    -p 3306:3306 \
    --restart=always \
    -e MYSQL_ROOT_PASSWORD=xxxx \
    mariadb
```

<details><summary> Description
</summary>

- --name: Container name
- -d: Run container in background and print container ID
- -p: Publish a container's port(s) to the host
- --restart=always: Restart policy to apply when a container exits
- -e: Enviorment
-   MYSQL_ROOT_PASSWORD=xxxx // Set the password for the root user of mariadb
- mariadb: Image name
</details>

### Connect to a container

```
docker exec -it bf43befcf275 /bin/sh
```
 > docker exec -it **Container id** /bin/sh
### Create database
```
mysql -u root -p
CREATE DATABASE backendProject;
```
> mysql -u root -p
CREATE DATABASE **Database name**;
### Import database 
```
mysql -u root -p backendProject < data-dump.sql
```
> mysql -u root -p **Database name** < **file name**.sql

## Connect 

#### Server
- SERVER_HOSTNAME= xxx.xx.xxx.xx:port
- SERVER_USERNAME= xxxx
#### Mysql
- MYSQL_HOSTNAME=SGBDR-projet-final
- MYSQL_PORT=3306
- MYSQL_USERNAME=xxxx
