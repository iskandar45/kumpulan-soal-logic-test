n = int(input("Masukan nilai n : "))

def segitiga_siku_siku(n):
    for i in range(n):
        row = ""
        for j in range(i + 1):
            row += "*"
        print(row)

segitiga_siku_siku(n)
