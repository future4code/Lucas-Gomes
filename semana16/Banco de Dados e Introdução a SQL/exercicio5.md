A. ********CREATE TABLE** Filmes (

id **VARCHAR(255)** **PRIMARY KEY**, //VARCHAR, pois será uma string de número.

nome **VARCHAR(255)** **NOT NULL**, //VARCHAR, pois serão nomes de filmes, podem conter tanto números quanto letras e não tem mais de 255 letras.

sinopse **TEXT** **NOT NULL**, // Para que se possa usar tanto número quanto letras em um espaço maior, ou seja, não é limitado a 255 (ou menos) caracteres como o VARCHAR.

data_de_lancamento **DATE** **NOT NULL**, // DATE sempre é utilizado para datas.

avaliacao **FLOAT** **CHECK** (avaliacao >= 0 AND avaliacao <= 10) // FLOAT, pois a nota pode ser um número não inteiro e o CHECK serve para que coloquem apenas os números entre 0 e 10.

);