export const phoneMask = (e: React.ChangeEvent<HTMLInputElement>, setNumber : (arg: string) => void, ) => {

    const input = e.target.value;
    
    // Оставляем только цифры
    let numbers = input.replace(/\D/g, "");

    // Если удалили всё — очищаем
    if (!numbers) {
      setNumber("");
      return;
    }

    // Если начали ввод с 8 (РФ стандарт), меняем на 7
    if (numbers.startsWith("8")) {
      numbers = "7" + numbers.slice(1);
    }
    
    // Если начали ввод с 9, добавляем 7 в начало
    if (numbers.startsWith("9")) {
      numbers = "79" + numbers.slice(1);
    }

    // Если первая цифра не 7, принудительно ставим 7
    if (numbers[0] !== "7") {
        numbers = "7" + numbers;
    }

    // Ограничиваем количество цифр (11 штук: 7 + 10 цифр номера)
    numbers = numbers.slice(0, 11);

    // Формируем красивую строку: +7 (XXX) XXX-XX-XX
    let formatted = "";
    if (numbers.length > 0) formatted += "+7";
    if (numbers.length > 1) formatted += " (" + numbers.substring(1, 4);
    if (numbers.length > 4) formatted += ") " + numbers.substring(4, 7);
    if (numbers.length > 7) formatted += "-" + numbers.substring(7, 9);
    if (numbers.length > 9) formatted += "-" + numbers.substring(9, 11);

    setNumber(formatted);
  };

  export const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
