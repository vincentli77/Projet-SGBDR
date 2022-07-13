/*
Script de création de la base de données de test.
A noter, on utilise une stratégie avec DROP et IF NOT EXISTS afin de rendre 
notre script réutilisable dans le future, même si la base existe déjà
*/
create database IF NOT EXISTS backendProject;

/* Créer l'utilisateur API */
create user IF NOT EXISTS 'api-dev'@'%.%.%.%' identified by 'pDaaCq9q48Sm3cPpvU7za9h3D8bPds3c4Bd7Ld745B64464UpsnBN4q8thK7EiAK4ntDeF5rJD2vb5PTdsserwU5dUF8F86huC8374h49XpNkb62m278c27Rk63hN6CkPD5Ht5axkQUvTdTJ8r2ws3u62QTt78Y6wr3q52t582Bk6TGq5vj7WcvC3avicbqv2v6GdwWJA9qFvnsDfLC79Aq34P7cigjKs626p2paTN4LybM8NkTrm445T9RT3W22RF8RhSTMxuESh2gJ4vCdsad4VCBdpt62Uk8uze8DTZhY3f88PryrMPH6Y5VxzB76485qqgQ82xs7Du2ME59mesDMSE62vV9E2FJA954499S4ssg34NtPLS3G5jTBb24YE7yz6VttHmQZfqzWmxJKP3faziNMPWBM24CCQ35836T23CLZ5ct9jLNVx8L8X56hAiGzmJB6E466r2Gx8X8C2L3ujxMG88542JSTZR37RLK3U2c4YzJ926XpK6dKyR69';
grant select, update, insert, delete on backendProject.* to 'api-dev'@'%.%.%.%';
flush privileges;

