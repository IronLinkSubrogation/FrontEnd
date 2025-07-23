document.addEventListener("DOMContentLoaded", () => {
  // ==============================
  // Dashboard Data Fetch Logic
  // ==============================
  if (document.title === "Dashboard") {
    const listItems = document.querySelectorAll("ul li");
    fetch("https://api.mockironlink.com/summary") // Replace with real endpoint
      .then((res) => res.json())
      .then((data) => {
        listItems[0].innerHTML = `Total Cases: <strong>${data.totalCases}</strong>`;
        listItems[1].innerHTML = `Pending Follow-ups: <strong>${data.pendingFollowups}</strong>`;
        listItems[2].innerHTML = `Recovered Amounts: <strong>$${data.recovered}</strong>`;
      })
      .catch(() => {
        console.warn("Failed to fetch dashboard data.");
      });
  }

  // ==============================
  // Diary Logic
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
  // Notes Logic
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
