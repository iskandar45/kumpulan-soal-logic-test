x = int(input("Masukan bilangan bulat: "))
is_prime = True

for i in range(2, int(x / 2) + 1):
    if x % i == 0:
        is_prime = False
        break

if is_prime and x != 1:
    print(f"{x} is a prime number.")
else:
    print(f"{x} is not a prime number.")
