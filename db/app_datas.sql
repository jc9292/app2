CREATE TABLE app_datas (
  ID int(11) NOT NULL,
  type varchar(4) NOT NULL,
  date varchar(16) NOT NULL,
  datas BLOB,
  PRIMARY KEY (ID)
);
CREATE INDEX index1 ON app_datas (date);
