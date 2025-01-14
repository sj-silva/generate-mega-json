document.querySelector("#uploadButton").addEventListener("click", () => {
  document.getElementById("fileUpload").click();
});

document.querySelector("#fileUpload").addEventListener("change", (event) => {
  const file = event.target.files[0];
  const uploadMessage = document.querySelector("#uploadMessage");

  if (file) {
    uploadMessage.textContent = `Arquivo selecionado: ${file.name}`;
    uploadMessage.style.display = "block"; // Show the paragraph
  } else {
    uploadMessage.style.display = "none"; // Hide if no file selected
  }
});

document
  .querySelector("#uploadForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById("fileUpload");
    const file = fileInput.files[0];

    if (!file) {
      alert("Please select an Excel file to upload!");
      return;
    }

    const reader = new FileReader();

    reader.onload = async (e) => {
      const fileData = e.target.result;

      try {
        const workbook = XLSX.read(new Uint8Array(fileData), { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const startCol = "A";
        const endCol = "I";
        const startRow = 1;
        let endRow = 1;
        let row = 1;

        while (sheet[`${startCol}${row}`]) {
          endRow = row;
          row++;
        }

        const range = `${startCol}${startRow}:${endCol}${endRow}`;
        const sheetData = XLSX.utils.sheet_to_json(sheet, {
          range: range,
          header: 1,
        });

        let headers = [];
        sheetData[0].forEach((cell) => {
          headers.push(cell);
        });

        let rows = [];
        for (let i = 1; i < sheetData.length; i++) {
          let rowData = {};
          sheetData[i].forEach((cell, colNumber) => {
            rowData[headers[colNumber]] = cell;
          });
          rows.push(rowData);
        }

        const jsonData = {
          allResults: rows,
        };

        const jsonBlob = new Blob([JSON.stringify(jsonData, null, 2)], {
          type: "application/json",
        });

        const downloadLink = document.getElementById("downloadLink");
        downloadLink.href = URL.createObjectURL(jsonBlob);

        document.getElementById("resultSection").style.display = "block";
      } catch (err) {
        console.error("Error processing file:", err);
        alert("Error processing the Excel file. Please check its format.");
      }
    };

    reader.readAsArrayBuffer(file);
  });
