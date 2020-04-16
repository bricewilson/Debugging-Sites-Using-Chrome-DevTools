window.onload = function() {
  loadAllPies();
}

function loadAllPies() {
  let pieTable = document.getElementById('pieTableBody');

  fetch('/api/pies')
  .then(response => response.json())
  .then(data => {
    let string_data = JSON.stringify(data);

    let pieMarkup = '';

    data.forEach(element => {
      pieMarkup += `
        <tr>
          <td><img src=${element.imageURL} width="100"></td>
          <td>${element.name}</td>
          <td>${element.description}</td>
          <td>${element.price}</td>
          <td>View Details</td>
        </tr>
      `;
    });

    pieTable.innerHTML = pieMarkup;
  });
}