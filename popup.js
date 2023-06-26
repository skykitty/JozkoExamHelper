// Function to parse CSV data
function parseCSV(csv) {
    var lines = csv.split('\n');
    var result = [];
  
    for (var i = 0; i < lines.length; i++) {
      var data = lines[i].split(',');
      var question = data[0];
      var answer = data[1];
      var faqItem = '<div class="faq-item"><h3>' + question + '</h3><p>' + answer + '</p></div>';
      result.push(faqItem);
    }
  
    return result.join('');
  }
  
  // Function to read the CSV file
  function readCSVFile(file) {
    var reader = new FileReader();
    reader.onload = function(event) {
      var contents = event.target.result;
      var faqContainer = document.getElementById('faqContainer');
      faqContainer.innerHTML = parseCSV(contents);
    };
    reader.readAsText(file);
  }
  
  // Event listener for file input
  document.getElementById('csvFileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    readCSVFile(file);
  });
  
  // Event listener for search input
  document.getElementById('searchInput').addEventListener('input', function(event) {
    var searchTerm = event.target.value.toLowerCase();
    var faqItems = document.getElementsByClassName('faq-item');
    
    Array.from(faqItems).forEach(function(item) {
      var question = item.querySelector('h3').textContent.toLowerCase();
      if (question.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
  