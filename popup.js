// Definujte seznam otázek a odpovědí
const data = [
  { otazka: 'První otázka', odpoved: 'První odpověď' },
  { otazka: 'Druhá otázka', odpoved: 'Druhá odpověď' },
  { otazka: 'Třetí otázka', odpoved: 'Třetí odpověď' },
  // Přidejte další otázky a odpovědi podle potřeby
];

// Funkce pro vykreslení tabulky s otázkami a odpověďmi
function renderTable() {
  const table = document.getElementById('question-table');

  // Vyčistění obsahu tabulky
  while (table.rows.length > 1) {
      table.deleteRow(1);
  }

  const searchTerm = document.getElementById('search-bar').value.toLowerCase();

  // Filtrujeme otázky na základě hledaného výrazu
  const filteredData = data.filter(item =>
      item.otazka.toLowerCase().includes(searchTerm) ||
      item.odpoved.toLowerCase().includes(searchTerm)
  );

  // Vykreslení řádků tabulky pro každou odpovídající otázku a odpověď
  filteredData.forEach(item => {
      const row = table.insertRow();
      const questionCell = row.insertCell(0);
      const answerCell = row.insertCell(1);

      questionCell.innerHTML = item.otazka;
      answerCell.innerHTML = item.odpoved;
  });
}

// Při načtení stránky vykreslíme tabulku
window.onload = renderTable;

// Při změně hodnoty v hledacím poli vykreslíme tabulku znovu
document.getElementById('search-bar').addEventListener('input', renderTable);
