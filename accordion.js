// Array of FAQ objects
const faqs = [
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used for web development.",
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that retains access to its outer scope even when the function is executed outside that scope.",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answer: "You can declare a variable using var, let, or const.",
  },
];

// Method to display FAQ items on the page
function displayFAQs() {
  const faqContainer = document.getElementById("faq-container");
  faqContainer.innerHTML = ""; // Clear previous content

  faqs.forEach((faq) => {
    // Create question element
    const questionElement = document.createElement("div");
    questionElement.classList.add("faq-question");
    questionElement.textContent = faq.question;

    // Create answer element
    const answerElement = document.createElement("div");
    answerElement.classList.add("faq-answer");
    answerElement.textContent = faq.answer;

    // Set initial style for answer
    answerElement.style.display = "none"; // Hide answer by default

    // Toggle answer visibility on question click
    questionElement.addEventListener("click", function () {
      if (answerElement.style.display === "none") {
        answerElement.style.display = "block"; // Show the answer
      } else {
        answerElement.style.display = "none"; // Hide the answer
      }
    });

    // Append elements to the container
    faqContainer.appendChild(questionElement);
    faqContainer.appendChild(answerElement);
  });
}

// Call the function to display the FAQs
document.addEventListener("DOMContentLoaded", displayFAQs);
