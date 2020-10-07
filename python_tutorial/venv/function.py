def calculateDOB():
    age = input("Enter a number for your age :")
    birthyear = 2020 - int(age)
    print("Your birth year is {} ".format(birthyear))

#calculateDOB()


def signUpForm(name,age,phone,address ="Yangon"):
    print("Registration information : {}, {}, {}, {}".format(name,age,phone,address))

signUpForm("SuPhyu",30,"091234567","Innwa")

signUpForm(phone = "09112232323",address="Ayeyarwaddy",name="Aye Aye", age= 50)



signUpForm(phone = "09112232323",address="Ayeyarwaddy","Aye Aye", 50)















