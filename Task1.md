# Task 1

Шаблон "Ітератор" дозволяє реалізувати зручний інтерфейс для отримання доступу до елементів певної коллекції у певному порядку та здійснювати навігацію по ним.

Приклад інтерфейсу інтератора:

```csharp
interface Iterator<T> {
	bool hasNext();
	T getNext();
}
```

Приклад використання ітератора:

```csharp
Iterator<ItemType> iterator = someCollection.getIterator();

while (iterator.hasNext()) {
  ItemType item = iterator.getNext();

  //do somethingwith item
}
```

В деяких мовах програмування реалізація ітератора вбудавана в синтаксис мови прграмування, що ще більше спрощує його використання 

Переваги ітератора:
* Спрощує додавання нових операцій 
* Позбавляє класи частини обов'язків

Недоліки:
* Може порушити принцип закритості/відкритості
* Може порушити інкапсуляцію
* Потребує внесення змін синхронно зі змінами класів
* Суб'єктивно є більш громіздким паттерном в реалізації