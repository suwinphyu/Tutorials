#positional argument
def addition(*args):
    print(sum(args))

#addition()

#keyword arguments
def getUserInfo(**kwargs):
    for key,value in kwargs.items():
        print("%s = %s " %(key,value))

#getUserInfo()


def combileFunc(*args,**kwargs):
    print("args: ", args)
    print("kwargs: ", kwargs)


combileFunc(10,20,30,music ="rock",channel ="radio")


