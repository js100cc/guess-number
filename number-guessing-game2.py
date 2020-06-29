#!/usr/bin/env python
import random

print("This is a number guessing game. Guess a number from 1 to 99\n")


def guess_number():
    random_number = random.randrange(1, 100)
    number = int(input("Input a number: "))

    while True:
        if number < random_number:
            number = int(input("Too Low! Guess again: ") or -1)
        elif number > random_number:
            number = int(input("Too High! Guess again: ") or -1)
        else:
            print("You Win!")
            is_continue = input("Play again? (yes/no) ")

            while True:
                if is_continue != "yes" and is_continue != "no":
                    is_continue = input("input yes or no: ")
                else:
                    break

            break

    if is_continue == "no":
        print("Thanks for playing!")
    else:
        guess_number()


guess_number()
