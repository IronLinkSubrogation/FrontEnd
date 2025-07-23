document.addEventListener("DOMContentLoaded", () => {
  // ==============================
  // Diary Page Logic
  // ==============================
  const diaryForm = document.querySelector("form textarea#entry")
    ? document.querySelector("form")
    : null;

  if (diaryForm) {
    const diaryEntry = document.getElementById("entry");

    diaryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = diaryEntry.value.trim();

      if (value) {
        let diaryLog = JSON.parse(localStorage.getItem("diaryLog")) || [];
        diaryLog.push({ entry: value, date: new Date().toLocaleString() });
        localStorage.setItem("diaryLog", JSON.stringify(diaryLog));
        alert("Diary entry saved.");
        diaryEntry.value = "";
      } else {
        alert("Please enter a note before submitting.");
      }
    });
  }

  // ==============================
  // Notes Page Logic
  // ==============================
  const notesForm = document.querySelector("form textarea#note-entry")
    ? document.querySelector("form")
    : null;

  if (notesForm) {
    const notesEntry = document.getElementById("note-entry");

    notesForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = notesEntry.value.trim();

      if (value) {
        let auditTrail = JSON.parse(localStorage.getItem("auditTrail")) || [];
        auditTrail.unshift({ note: value, date: new Date().toLocaleDateString() });
        localStorage.setItem("auditTrail", JSON.stringify(auditTrail));
        alert("Note saved to audit trail.");
        notesEntry.value = "";

        // Inject newly saved note into the audit list
        const auditSection = document.querySelector("ul");
        if (auditSection) {
          const newItem = document.createElement("li");
          newItem.innerHTML = `<strong>${new Date().toLocaleDateString()}:</strong> "${value}"`;
          auditSection.prepend(newItem);
        }
      } else {
        alert("Please type a note before saving.");
      }
    });

    // Render stored notes on page load
    const auditSection = document.querySelector("ul");
    if (auditSection) {
      const auditTrail = JSON.parse(localStorage.getItem("auditTrail")) || [];
      auditTrail.forEach((log) => {
        const item = document.createElement("li");
        item.innerHTML = `<strong>${log.date}:</strong> "${log.note}"`;
        auditSection.appendChild(item);
      });
    }
  }
});
