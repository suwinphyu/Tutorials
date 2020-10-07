class Human:
    def __init__(self,hand,leg):
        self.hand = hand
        self.leg = leg

    def printHuman(self):
        print("Human has {} hands and {} legs".format(self.hand,self.leg))

    def methodOverriding(self):
        print("In Human class")

class Father(Human):
    def __init__(self,money,car,hand,leg):
        self.money = money
        self.car = car
        super().__init__(hand,leg)

    def printFather(self):
        print("As a father,I have {} money and {} cars".format(self.money,self.car))

    def methodOverriding(self):
        print("In Father class")
human = Human(2,2)
father = Father(100,2,2,2)
father.printHuman()
father.printFather()
father.methodOverriding()

# class Son(Father,Human):
#     def __init__(self,hobby,money,car,hand,leg):
#         Father.__init__(self,money,car,hand,leg)
#         Human.__init__(self,hand,leg)
#         self.hobby = hobby
#
#     def printSon(self):
#         print(" My hobby is ",self.hobby)
#
#     def methodOverriding(self):
#         print("In Son Class")
#
#


# son = Son("reading",234234,2,2,2)
# son.printFather()
# son.printHuman()
# son.printSon()
# son.methodOverriding()


