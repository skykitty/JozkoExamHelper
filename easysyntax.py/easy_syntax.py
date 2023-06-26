import pyautogui
import time
def read_questions_from_file(file_path):
    questions = []
    with open(file_path, 'r') as file:
        for line in file:
            # Předpokládáme, že otázka a odpověď jsou oddělené čárkou
            question, answer = line.strip().split(',')
            questions.append({'otazka': question, 'odpoved': answer})
    return questions

def main():
    file_path = 'easysyntax.py\data.txt'  # Změňte cestu k textovému souboru
    questions = read_questions_from_file(file_path)

    for question in questions:
        time.sleep(4)
        pyautogui.press('{')
        pyautogui.write(" otazka: ")
        pyautogui.write(f"'{question['otazka']}', ")
        pyautogui.write("odpoved: ")
        pyautogui.write(f"'{question['odpoved']}' ")
        pyautogui.press('}')
        pyautogui.write(",")
        pyautogui.press('enter')

if __name__ == '__main__':
    main()
