// App.js

// Fonction pour mettre à jour la prévisualisation
function updatePreview() {
  const textarea = document.getElementById('markdown-input');
  const preview = document.getElementById('preview');
  const text = textarea.value;

  // Convertir le Markdown en HTML (utilisation de marked.js)
  preview.innerHTML = marked.parse(text);
}

// Gestionnaire d'événement pour l'import de fichier Markdown
function handleFileImport(event) {
  const file = event.target.files[0];
  if (file && file.type === "text/markdown") {
      const reader = new FileReader();
      reader.onload = function (e) {
          const content = e.target.result;
          const textarea = document.getElementById('markdown-input');
          textarea.value = content;
          updatePreview(); // Mettre à jour la prévisualisation
      };
      reader.readAsText(file);
  } else {
      alert("Veuillez sélectionner un fichier .md valide.");
  }
}

// Gestionnaire d'événement pour l'export de fichier Markdown
function handleFileExport() {
  const textarea = document.getElementById('markdown-input');
  const markdown = textarea.value;

  const blob = new Blob([markdown], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "exported_markdown.md";
  a.click();
  URL.revokeObjectURL(url);
}

// Initialisation des événements après le chargement de la page
document.addEventListener('DOMContentLoaded', function () {
  // Écouteur pour le textarea
  const textarea = document.getElementById('markdown-input');
  textarea.addEventListener('input', updatePreview);

  // Écouteur pour l'import de fichier
  const fileInput = document.getElementById('file-input');
  fileInput.addEventListener('change', handleFileImport);

  // Écouteur pour l'export de fichier
  const exportButton = document.getElementById('export-button');
  exportButton.addEventListener('click', handleFileExport);
});