list_example = [12,89.443,"Apples","1998",40.3,2]
print(list_example)

list_example.append("orange")
print(list_example)

another_list = ["python","java","php"]
list_example.extend(another_list)
print(list_example)
print(another_list)

another_list.remove("java")
print(another_list)
print(list_example)

list_example.pop(0)
print(list_example)

list_example.pop(-1)
print(list_example)

print(list_example.index("orange"))

print("python" in list_example)
print("swift" in list_example)
