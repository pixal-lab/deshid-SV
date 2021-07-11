import random, time, math

# 576 muestras = 2 dias de muestras cada 5 min

alimList = ['Manzana', 'Kiwi', 'Platano', 'Damasco', 'Piña', 'Naranja']

def minOfDay(x): # GTM -4
    return ((x / 60) - 240) % 1440

def temp1(x): # 00:00 -> 08:00
    return (-3 * math.log(x + 120)) + 34

def temp2(x): # 08:00 -> 23:59
    return (45 * math.sin((x/400) + 200.17)) + 1

def temperatura(tiempo): # time epoch
    min = minOfDay(tiempo)
    variacion = ((random.random() * 0.5) - 0.25)
    if (min <= 480): 
        return (temp1(min) + variacion)
    else:
        return (temp2(min) + variacion)

def hum1(x): # 00:00 -> 08:00
    return (12 * math.log(x + 110)) + 3.5

def hum2(x): # 08:00 -> 23:59
    return (-45 * math.sin((x/400) + 199.99)) + 85

def humedad(tiempo): # time epoch
    min = minOfDay(tiempo)
    variacion = ((random.random() * 0.5) - 0.25)
    if (min <= 480):
        return (hum1(min) + variacion)
    else:
        return (hum2(min) + variacion)

def peso(tiempo, pesoi): # min relativos a 2 dias ---- 0 -> 2880
    return (-70 * math.sin((tiempo / 2880) + 0.4) + 127.26) * pesoi / 100

artefactos = open('artefactos.txt','r')
datos = open('datos.txt','w')

time1 = int(time.time()) - 3709000 # 42.9 dias antes de la ejecucion
time2 = int(time.time()) - 1709000 # 19.8 dias antes de la ejecucion
time3 = int(time.time()) - 109000 # 1.2 dias antes de la ejecucion
time0 = int(time.time())

for i in artefactos: # para cada artefacto
    id = i.split(',')[0]

    for j in range(2): # deshidrataciones
        pes = random.random() * 50 + 50 # peso entre 50 y 100
        variacion = (random.random() * 24 * 60 * 60) # variacion de 24 horas para inicio de deshidratacion
        variacion2 = (random.random() * 12 * 60 * 60) - (6 * 60 * 60)  # variacion de +-6 horas para termino de deshidratacion
        alimento = random.choice(alimList)
        if (j == 0) :
            tiempo = time1 + round(variacion)
        else:
            tiempo = time2 + round(variacion)

        for k in range(0, 172800 + round(variacion2), 300): # datos
            line = id + ',' + str(tiempo + k) + ',' + str(round(humedad(tiempo + k),2)) + ',' + str(round(temperatura(tiempo + k),2)) + ',' + str(round(peso(k/80,pes),2)) + ',0,' + alimento
            datos.write(line + '\n')
        else:
            line = id + ',' + str(tiempo + k + 250) + ',-100,-100,-100,-100,end'
            datos.write(line + '\n')

    if (i.split(',')[3] == 'true'): # deshidratacion activa
        variacion = (random.random() * 12 * 60 * 60) - (6 * 60 * 60) # variacion de +-6 horas
        tiempo = time3 + round(variacion)
        alimento = i.split(',')[4].split('\n')[0]
        pes = random.random() * 50 + 50 # peso entre 50 y 100
        
        for k in range(0, int(time0 - tiempo), 300): # datos
            line = id + ',' + str(tiempo + k) + ',' + str(round(humedad(tiempo + k),2)) + ',' + str(round(temperatura(tiempo + k),2)) + ',' + str(round(peso(k/80,pes),2)) + ',0,' + alimento
            print(line)
            datos.write(line + '\n')

artefactos.close()
datos.close()