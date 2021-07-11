import random

users = open('users.txt','r')
artefactos = open('artefactos.txt','w')

alimList = ['Manzana', 'Kiwi', 'Platano', 'Damasco', 'Piña', 'Naranja']

id = 1000
inprocess = ''
for i in users:
    correo = i.split(',')[3]
    for j in range(2):
        if random.random() <= 0.8:
            inprocess = 'true'
            alimento = random.choice(alimList) + '\n'
        else:
            inprocess = 'false'
            alimento = 'null' + '\n'
        line = str(id) + ',' + correo + ',tipo' + str(id) + ',' + inprocess + ',' + alimento
        artefactos.write(line)
        id += 1

users.close()
artefactos.close()