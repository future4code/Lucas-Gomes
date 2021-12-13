B. Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Esse erro ocorreu por conta do id duplicado, visto que id são únicos, não é possível criar duas linhas com o mesmo id.

C. Error Code: 1136. Column count doesn't match value count at row 1
Na tabela, havia todas as informações de linha, porém, estava faltando a declaração das colunas birth_dath e gender.

D. Error Code: 1054. Unknown column "birth_date" in 'field list'
A coluna "birth_dath estava escrito de forma incorreta: 'birth_date'.

Error Code: 1364. Field 'name' doesn't have a default value
A coluna name não foi adicionada, assim como nada foi escrito na linha correspondente a ela.

E. Error Code: 1054. Unknown column "birth_date" in 'field list'
A coluna "birth_dath estava escrito de forma incorreta: 'birth_date'.

Error Code: 1292. Incorrect date value: '1950' for birth_dath at row 1
A data estava sem aspas.
