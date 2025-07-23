document.addEventListener("DOMContentLoaded", () => {
  // Handle Diary Form Logic
  const diaryForm = document.querySelector("form textarea#entry")
    ? document.querySelector("form")
    : null;

  if (diaryForm) {
    const diaryEntry = document.getElementById("entry");

    diaryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = diaryEntry.value.trim();

      if (value) {
        alert(`Diary entry submitted:\n\n${value}`);
        // Future: Send value to backend or local storage
        diaryEntry.value = "";
      } else {
        alert("Please enter a follow-up note before submitting.");
      }
    });
  }

  // Handle Notes Form Logic
  const notesForm = document.querySelector("form textarea#note-entry")
    ? document.querySelector("form")
    : null;

  if (notesForm) {
    const notesEntry = document.getElementById("note-entry");

    notesForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = notesEntry.value.trim();

      if (value) {
        alert(`Note saved:\n\n${value}`);
        // Future: Append to UI or store as audit trail entry
        notesEntry.value = "";
      } else {
        alert("Please enter a note before saving.");
      }
    });
  }
});
