DROP DATABASE IF EXISTS image_viewer;

CREATE DATABASE image_viewer;

USE image_viewer;

CREATE TABLE images (
  id INTEGER(11) NOT NULL AUTO_INCREMENT,
  product_id INTEGER NOT NULL,
  img_src VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table Properties
-- ---
ALTER TABLE images ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*  Execute this file from the command line at root of project by typing:
 *    mysql -u root -p < server/db/image.sql
*/
/*
resulting 'images' table in 'images_viewer' db:
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | int(11)      | NO   | PRI | NULL    | auto_increment |
| product_id | int(11)      | NO   |     | NULL    |                |
| img_src    | varchar(200) | NO   |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+
*/
/*
insert sttement:
INSERT INTO images (product_id, img_src) VALUES (0, 'https://s3.amazonaws.com/etsy-page-images/0/0-beach-zoom.jpg');
INSERT INTO images (product_id, img_src) VALUES (0, 'https://s3.amazonaws.com/etsy-page-images/0/0-beach-zoom.jpg');
Query OK, 1 row affected (0.00 sec)

result:
+----+------------+--------------------------------------------------------------+
| id | product_id | img_src                                                      |
+----+------------+--------------------------------------------------------------+
|  1 |          0 | https://s3.amazonaws.com/etsy-page-images/0/0-beach-zoom.jpg |
+----+------------+--------------------------------------------------------------+
*/