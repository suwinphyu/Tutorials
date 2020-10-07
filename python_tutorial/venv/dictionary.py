dictionary = {"rice" : 2500 , "noodle": 300 ,"oil" : 1700}
print(dictionary)

print(dictionary.get("noodle"))
print(dictionary.items())
print(dictionary.keys())
print(dictionary.values())

dictionary.popitem()
print(dictionary)

dictionary.setdefault("egg",1890)
print(dictionary)

dictionary.setdefault("juice")
print(dictionary)

another_dict = {"vivo" :134009 , "samsung" :450093}
dictionary.update(another_dict)
print(dictionary)

another_dict.update(vivo= 90000)
print(another_dict)


