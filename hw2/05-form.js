const registrationForm = document.querySelector("#registrationForm");
const modalBody = document.querySelector("#modalBody");
const resultModal = new bootstrap.Modal(document.querySelector("#resultModal"));

registrationForm.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();

  const fullName = document.querySelector("#fullName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const registrationStatus = document.querySelector(
    "#registrationStatus",
  ).value;
  const anythingElse = document.querySelector("#anythingElse").value.trim();

  const selectedCourses = Array.from(
    document.querySelectorAll('input[name="courses"]:checked'),
  ).map(function getCourse(course) {
    return course.value;
  });

  const submittedData = [
    ["Full Name", fullName || "Not provided"],
    ["Email", email || "Not provided"],
    ["Registration Status", registrationStatus || "Not selected"],
    [
      "Courses Taken",
      selectedCourses.length > 0 ? selectedCourses.join(", ") : "None selected",
    ],
    ["Anything Else", anythingElse || "Nothing provided"],
  ];

  // Clear information from any previous submission.
  modalBody.replaceChildren();

  // Display the submitted information safely.
  submittedData.forEach(function displayField(field) {
    const paragraph = document.createElement("p");
    const label = document.createElement("strong");

    label.textContent = `${field[0]}: `;
    paragraph.append(label, document.createTextNode(field[1]));

    modalBody.append(paragraph);
  });

  resultModal.show();
});
