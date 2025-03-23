function sendMail(){
    let parms = {
        email : document.getElementById("user_email").value,
        message : document.getElementById("additionalText").value,
         }

        emailjs.send("service_ih8imph","template_sl5sd0h", parms).then(alert("Mail został wysłany!"))



}


// Funkcja otwierająca wybraną sekcję
function openSection(sectionNumber) {
    // Ukryj wszystkie sekcje
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
  
    // Pokaż wybraną sekcję
    const activeSection = document.getElementById(`section${sectionNumber}`);
    if (activeSection) {
      activeSection.classList.add('active');
    }
  }
  
  // Funkcja obsługująca przesyłanie pliku
  function uploadFile(event, sectionNumber) {
    event.preventDefault();
  
    const fileInput = document.getElementById(`fileInput${sectionNumber}`);
    const fileList = document.getElementById(`fileList${sectionNumber}`);
  
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
  
      // Dodaj plik do listy
      const listItem = document.createElement('li');
      listItem.textContent = file.name;
  
      // Dodaj przycisk pobierania
      const downloadButton = document.createElement('button');
      downloadButton.textContent = 'Pobierz';
      downloadButton.onclick = () => {
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        a.click();
        URL.revokeObjectURL(url);
      };
  
      listItem.appendChild(downloadButton);
      fileList.appendChild(listItem);
  
      // Wyczyść pole wyboru pliku
      fileInput.value = '';
    }
  }

  

