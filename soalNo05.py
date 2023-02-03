n = int(input("Masukkan bilang bulat: "))

for i in range(n, 0, -1):
    s = ""
    for j in range(1, i + 1):
        s += "* "
    print(s)
