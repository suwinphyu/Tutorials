user_mark = int(input("Enter your marks :"))

if user_mark < 40:
    print("You're failed with {} marks".format(user_mark))

elif 40 < user_mark <65 :
    print("You're passed with {} marks". format(user_mark))

elif 65 < user_mark <80 :
    print("You're modified with {} marks".format(user_mark))

else:
    print("You're credited with {} marks ".format(user_mark))



