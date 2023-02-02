n = int(input("Masukkan jumlah bilangan Fibonacci yang ingin ditampilkan: "))
tampungan = 0
fib = [0, 1]

for i in range(2, n):
    tampungan = fib[i - 1] + fib[i - 2]
    fib.append(tampungan)

print(fib)

