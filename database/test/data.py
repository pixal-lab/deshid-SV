import random, time

artefactos = open('artefactos.csv','r')

for i in artefactos:
    time1 = int(time.time()) - 3709000
    time2 = int(time.time()) - 1709000
    time2 = int(time.time()) - 109000
    id = i.split(',')[0]
    contador = 0
    if (i.split(',')[3] =='false'):
        contador = 2
    else:
        
    for j in range(3):
        
        line = id + ',' 


artefactos.close()