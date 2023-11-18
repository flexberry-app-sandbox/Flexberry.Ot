




CREATE TABLE ТчРабВодАвто (
 primaryKey UUID NOT NULL,
 ПоказСпидом DOUBLE PRECISION NULL,
 ВремяРаботы DOUBLE PRECISION NULL,
 НулевойПробег DOUBLE PRECISION NULL,
 ДатаВремя TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организация (
 primaryKey UUID NOT NULL,
 ИНН INT NULL,
 Телефон INT NULL,
 ОГРН INT NULL,
 Почта VARCHAR(255) NULL,
 ЮрАдрес VARCHAR(255) NULL,
 Наименование VARCHAR(255) NULL,
 КПП INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Персонал (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Телефон INT NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТчДвижГСМ (
 primaryKey UUID NOT NULL,
 Количество DOUBLE PRECISION NULL,
 Дата TIMESTAMP(3) NULL,
 Остаток DOUBLE PRECISION NULL,
 МаркаГСМ VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЖурналУчета (
 primaryKey UUID NOT NULL,
 Пробег DOUBLE PRECISION NULL,
 ФИО VARCHAR(255) NULL,
 ВремяВыезда TIMESTAMP(3) NULL,
 ПоказСпидом DOUBLE PRECISION NULL,
 ВремяВозвр TIMESTAMP(3) NULL,
 Примечания VARCHAR(255) NULL,
 Дата TIMESTAMP(3) NULL,
 ТранспСр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТранспСр (
 primaryKey UUID NOT NULL,
 Марка VARCHAR(255) NULL,
 ГосЗнак VARCHAR(255) NULL,
 Модель VARCHAR(255) NULL,
 Персонал UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 IDДолжности INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧВодитель (
 primaryKey UUID NOT NULL,
 ТабелНомер INT NULL,
 Допущен BOOLEAN NULL,
 Персонал UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РукОтдЛог (
 primaryKey UUID NOT NULL,
 Персонал UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Договор (
 primaryKey UUID NOT NULL,
 ДатаЗаключ TIMESTAMP(3) NULL,
 ДатаОконч TIMESTAMP(3) NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 ОбязанПосред VARCHAR(255) NULL,
 Контрагент UUID NOT NULL,
 Организация UUID NOT NULL,
 РукОтдЛог UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Контрагент (
 primaryKey UUID NOT NULL,
 Организация VARCHAR(255) NULL,
 ОтветсЛицо VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧЗаданВод (
 primaryKey UUID NOT NULL,
 Расстояние DOUBLE PRECISION NULL,
 ДатаВремя TIMESTAMP(3) NULL,
 ПунктНазнач VARCHAR(255) NULL,
 ПунктОтправ VARCHAR(255) NULL,
 Контрагент UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПутевойЛист (
 primaryKey UUID NOT NULL,
 ВыдатьТоплива INT NULL,
 Номер INT NULL,
 СопровожЛица VARCHAR(255) NULL,
 ГаражНомер INT NULL,
 ТранспСр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Персонал ADD CONSTRAINT FK20483ffaca49581badeade018a121c50ee7c35a1 FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Index20483ffaca49581badeade018a121c50ee7c35a1 on Персонал (Должности); 

 ALTER TABLE ЖурналУчета ADD CONSTRAINT FKc0f15c3cd15b69b53df89577c478e7c118821bd1 FOREIGN KEY (ТранспСр) REFERENCES ТранспСр; 
CREATE INDEX Indexc0f15c3cd15b69b53df89577c478e7c118821bd1 on ЖурналУчета (ТранспСр); 

 ALTER TABLE ТранспСр ADD CONSTRAINT FK34774dd65c4ba29110c04b852f6faa1c7f6f33bc FOREIGN KEY (Персонал) REFERENCES Персонал; 
CREATE INDEX Index34774dd65c4ba29110c04b852f6faa1c7f6f33bc on ТранспСр (Персонал); 

 ALTER TABLE ТЧВодитель ADD CONSTRAINT FK45d857f2e7a819ea10f3fa25d686c822ddac1cb2 FOREIGN KEY (Персонал) REFERENCES Персонал; 
CREATE INDEX Index45d857f2e7a819ea10f3fa25d686c822ddac1cb2 on ТЧВодитель (Персонал); 

 ALTER TABLE РукОтдЛог ADD CONSTRAINT FK84521e8fc4ba01d22286ca897aca4c6c93d723fc FOREIGN KEY (Персонал) REFERENCES Персонал; 
CREATE INDEX Index84521e8fc4ba01d22286ca897aca4c6c93d723fc on РукОтдЛог (Персонал); 

 ALTER TABLE Договор ADD CONSTRAINT FK103921508857ac0aa291801aaab2c06353507417 FOREIGN KEY (Контрагент) REFERENCES Контрагент; 
CREATE INDEX Index103921508857ac0aa291801aaab2c06353507417 on Договор (Контрагент); 

 ALTER TABLE Договор ADD CONSTRAINT FKdae20386adafafa5414e439ca25af8b657797878 FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Indexdae20386adafafa5414e439ca25af8b657797878 on Договор (Организация); 

 ALTER TABLE Договор ADD CONSTRAINT FK3c35d73f6883280f401fde53b1bb08da5e95e60a FOREIGN KEY (РукОтдЛог) REFERENCES РукОтдЛог; 
CREATE INDEX Index3c35d73f6883280f401fde53b1bb08da5e95e60a on Договор (РукОтдЛог); 

 ALTER TABLE ТЧЗаданВод ADD CONSTRAINT FKc284c81b6a7c408bc998be9536fa73c8297cfd5b FOREIGN KEY (Контрагент) REFERENCES Контрагент; 
CREATE INDEX Indexc284c81b6a7c408bc998be9536fa73c8297cfd5b on ТЧЗаданВод (Контрагент); 

 ALTER TABLE ПутевойЛист ADD CONSTRAINT FKfff3d5b766dcddd8c1bbc0f2d8bffe9ed1f1a3ef FOREIGN KEY (ТранспСр) REFERENCES ТранспСр; 
CREATE INDEX Indexfff3d5b766dcddd8c1bbc0f2d8bffe9ed1f1a3ef on ПутевойЛист (ТранспСр); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

