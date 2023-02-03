angka = input("Masukan bilang bulat: ")
n = int(angka)
m = 3

def deret_kelipatan(n, m):
    deret_kelipatan = 0
    for i in range(m, n + 1, m):
        deret_kelipatan = i
        print(deret_kelipatan)

deret_kelipatan(n, m)
