**USE** `maryam-lucas-gomes`;

**CREATE TABLE** Actor (
id **VARCHAR(255)** **PRIMARY KEY**,
name **VARCHAR(255)** **NOT NULL**,
salary **FLOAT** **NOT NULL**,
birth_dath **DATE** **NOT NULL**,
gender **VARCHAR(6)** **NOT NULL**
);

**SHOW DATABASES**;

**SHOW TABLES**;

**DESCRIBE** Actor;

**INSERT INTO** Actor (id, name, salary, birth_dath, gender)
**VALUES**(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

INSERT INTO Actor (id, name, salary, birth_dath, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

**INSERT INTO** Actor (id, name, salary, birth_dath, gender)
**VALUES**(
"002",
"Celso Portioli",
1900000,
"1973-01-14",
"male"
);

**INSERT INTO** Actor (id, name, salary, birth_dath, gender)
**VALUES**(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

**INSERT INTO** Actor (id, name, salary, birth_dath, gender)
**VALUES**(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

**INSERT INTO** Actor (id, name, salary, birth_dath, gender)
**VALUES**(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

**INSERT INTO** Actor (id, name, salary, birth_dath, gender)
**VALUES**(
"006",
"Amybeth McNulty",
300000,
"2001-11-07",
"female"
);

**SELECT** * **FROM** Actor **WHERE** gender = "female";

**SELECT** salary **FROM** Actor **WHERE** name = "Tony Ramos";

**SELECT** * **FROM** Actor **WHERE** gender = "invalid";

**SELECT** * **FROM** Actor Where salary <= 500;

**SELECT** id, nome **FROM** Actor **WHERE** id = "002";

**SELECT** * **FROM** Actor
**WHERE** (name **LIKE** "A%" OR name **LIKE** "J%") **AND** salary > 300000;

**UPDATE** Actor **SET** id = "004", name = "Antônio Fagundes" **WHERE** id= "Antônio Fagundes";

**SELECT** * FROM Actor
**WHERE** name **LIKE** "%G%";

**SELECT** * **FROM** Actor
**WHERE** (name **LIKE** "%A%" **OR** name **LIKE** "%G%") **AND** salary **BETWEEN** 350000 **AND** 900000;

**CREATE TABLE** Filmes (
id **VARCHAR(255)** **PRIMARY KEY**,
nome **VARCHAR(255)** **NOT NULL**,
sinopse **TEXT** **NOT NULL**,
data_de_lancamento **DATE** **NOT NULL**,
avaliacao **FLOAT** **CHECK** (avaliacao >= 0 AND avaliacao <= 10)
);

**INSERT INTO** Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
**VALUES** (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

**INSERT INTO** Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
**VALUES** (
"002",
"Doce de Mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
 A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida,
 empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
 "2012-12-27",
 10
 );
 
 **INSERT INTO** Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
**VALUES** (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates.
 A vida de abusos acaba por acarretar sua morte precoce.",
 "2017-11-02",
 8
 );
 
 **INSERT INTO** Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
**VALUES** (
"004",
"O Auto da Compadecida",
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver.
 Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju,
 que os persegue pela região.",
 "2000-09-10",
 9
 );
 
 **SELECT** id, nome, avaliacao **FROM** Filmes
 **WHERE** id = 001;
 
 **SELECT** * **FROM** Filmes
 **WHERE** nome = "O Auto da Compadecida";
 
 **SELECT** id, nome, sinopse **FROM** Filmes
 **WHERE** avaliacao >= 7;
 
 **SELECT** nome **FROM** Filmes
 **WHERE** nome **LIKE** "%vida%";
 
 **SELECT** * **FROM** Filmes
 **WHERE** nome **LIKE** "%vida%" **OR** sinopse **LIKE** "%vida%";
 
 **SELECT** * **FROM** Filmes
 **WHERE** data_de_lancamento < "2021-11-25";
 
 **SELECT** * **FROM** Filmes
 **WHERE** data_de_lancamento < "2021-11-25" **AND** nome **LIKE** "%Auto%" **AND** avaliacao >= 7;