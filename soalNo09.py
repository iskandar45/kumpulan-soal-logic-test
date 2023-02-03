x = int(input("Masukkan nilai x: "))
result = 1
for i in range(1, x + 1):
    result *= i

print("Nilai faktorial dari", x,"! adalah", result)
