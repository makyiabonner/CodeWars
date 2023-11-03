def between(a, b):
    return list(range(a, b + 1))

def repeat_str(repeat, string):
    return string * repeat

def find_average(numbers):
    return sum(numbers) / len(numbers) if len(numbers) >= 1 else 0

def century(years):
    century = 0
    if years >= 1000 :
        if int(str(years)[-2:]):
            century = int(str(years)[:2]) + 1
        else: century = int(str(years)[:2])
    elif years >= 100 :
        if int(str(years)[-2:]):
            century = int(str(years)[:1]) + 1
        else: century = int(str(years)[:1])
    else : century = 1
    return century
    
#Solved python question: Century From Year