import turtle
colors = ('red', 'yellow', 'pink', 'white', 'blue', 'green')
turtle.bgColor('black')
turtle.speed(20)
for i in range(150):
    turtle.color(colors[i%6])
    turtle.forward(i*4)
    turtle.left(150)
    turtle.width(2)