string = input("Masukkan sebuah string: ")

is_palindrome = True
string_length = len(string)
for i in range(string_length // 2):
    if string[i] != string[string_length - i - 1]:
        is_palindrome = False
        break

if is_palindrome:
    print(f'"{string}" adalah palindrome')
else:
    print(f'"{string}" bukan palindrome')
