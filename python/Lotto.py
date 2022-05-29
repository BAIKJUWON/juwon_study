import random

number = []

while len(number)<6:
    N = random.randint(1,45)

    if N not in number:
        number.append(N)

print("당신의 이번주 로또번호는?")
print(f'{number}')
print("입니다.")