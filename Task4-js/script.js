const form = document.getElementById('registrationForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('nameField').value;
  const age = document.getElementById('ageField').value;
  const date = document.getElementById('birthDateField').value;
  const imageInput = document.getElementById('imageUploadField');
  const description = document.getElementById('descriptionField').value;
  const major = document.getElementById('majorUniversityField').value;

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const selectedValues = [];
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selectedValues.push(checkbox.value);
    }
  });

  const siblings_number = document.getElementById('siblingsNumberField').value;
  const description_of_siblings = document.getElementById('siblingsDescriptionField').value;

  const formData = {
    name,
    age,
    date,
    image: null, // سيتم تحديثه لاحقًا
    description,
    major,
    selectedValues,
    siblings_number,
    description_of_siblings
  };

  const reader = new FileReader();
  if (imageInput.files[0]) {
    reader.readAsDataURL(imageInput.files[0]);
    reader.onload = () => {
      formData.image = reader.result;

      localStorage.setItem('formData', JSON.stringify(formData));
      updateContainer(formData);
      alert('Sent successfully');
    };
  } else {
    localStorage.setItem('formData', JSON.stringify(formData));
    updateContainer(formData);
    alert('Sent successfully');
  }
});

const storedData = localStorage.getItem('formData');
if (storedData) {
  const parsedData = JSON.parse(storedData);
  updateContainer(parsedData);
}

function updateContainer(data) {
  const container = document.getElementById('container');
  container.innerHTML = `
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Age:</strong> ${data.age}</p>
    <p><strong>Birth Date:</strong> ${data.date}</p>
    <p><strong>Description:</strong> ${data.description}</p>
    <p><strong>Major:</strong> ${data.major}</p>
    <p><strong>Selected Checkboxes:</strong> ${data.selectedValues.join(', ')}</p>
    <p><strong>Siblings Number:</strong> ${data.siblings_number}</p>
    <p><strong>Siblings Description:</strong> ${data.description_of_siblings}</p>
    <p><strong>Uploaded Image:</strong></p>
    ${data.image ? `<img src="${data.image}" alt="Uploaded Image" style="max-width: 200px; height: auto;">` : '<p>No image uploaded</p>'}
  `;
}
