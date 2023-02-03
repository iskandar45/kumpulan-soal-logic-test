array_input = input("Masukkan angka pemisah dengan koma (,): ")
arr = [int(x) for x in array_input.split(",")]

largest_number = arr[0]
for i in range(1, len(arr)):
    if arr[i] > largest_number:
        largest_number = arr[i]

print(f"Angka terbesar dari array {arr} adalah: {largest_number}")
