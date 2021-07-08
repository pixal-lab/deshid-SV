import random

users = open('users.csv','r')
artefactos = open('artefactos.csv','w')

id = 1000
inprocess = ''
for i in users:
    correo = i.split(',')[3]
    for j in range(2):
        if random.random() <= 0.8:
            inprocess = 'true'
            alimento = ',alimento' + str(id)
        else:
            inprocess = 'false'
            alimento = ',null'
        line = str(id) + ',' + correo + ',tipo' + str(id) + ',' + inprocess + alimento
        artefactos.write(line + '\n')
        id += 1

users.close()
artefactos.close()