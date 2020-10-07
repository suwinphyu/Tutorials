class Person:
    def __init__(self,name,fathername,age,address):
        self.name = name
        self.fathername = fathername
        self.age = age
        self.address = address

    def aboutMe(self):
        print("Hello , I'm {} and {} years old. I live in {} and My fathername is {}".format(self.name,self.age,self.address,self.fathername))

Mary = Person("Mary","Machael",43,"Landon")
Mary.aboutMe()


