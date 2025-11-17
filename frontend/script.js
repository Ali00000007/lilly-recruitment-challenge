document.addEventListener("DOMContentLoaded", () => {
    fetchMedicines();
});

function fetchMedicines() {
    fetch("http://localhost:8000/medicines")
        .then((response) => response.json())
        .then((data) => {
            displayMedicines(data.medicines || []);
        })
        .catch((error) => {
            console.error("Error fetching medicines:", error);
            const medicineList = document.getElementById("medicineList");
            medicineList.innerHTML = "<p>Failed to load medicines.</p>";
        });
}

function displayMedicines(medicines) {
    const medicineList = document.getElementById("medicineList");
    medicineList.innerHTML = "";

    if (!medicines.length) {
        medicineList.innerHTML = "<p>No medicines found.</p>";
        return;
    }

    medicines.forEach((medicine) => {
        let medName = typeof medicine.name === "string" && medicine.name.trim() ? medicine.name : "Unknown Medicine";
        let medPrice = typeof medicine.price === "number" && !isNaN(medicine.price) ? `$${medicine.price.toFixed(2)}` : "N/A";

        const medDiv = document.createElement("div");
        medDiv.className = "medicine-item";
        medDiv.innerHTML = `${medName}: ${medPrice}`;
        medicineList.appendChild(medDiv);
    });
}

document.getElementById("addMedicineForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("medName").value.trim();
    const price = parseFloat(document.getElementById("medPrice").value);

    if (!name) {
        alert("Please enter a medicine name.");
        return;
    }
    if (isNaN(price) || price <= 0) {
        alert("Please enter a valid price.");
        return;
    }

    createMedicine(name, price);
});

function createMedicine(name, price) {
    fetch("http://localhost:8000/create", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ name, price })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                alert(`Error: ${data.error}`);
            } else {
                alert(data.message);
                fetchMedicines();
                document.getElementById("addMedicineForm").reset();
            }
        })
        .catch((error) => {
            console.error("Error creating medicine:", error);
            alert("Failed to add medicine.");
        });
}

document.getElementById("deleteMedicineForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("medNameDel").value.trim();

    if (!name) {
        alert("Please enter a medicine name.");
        return;
    }

    deleteMedicine(name);
});


function deleteMedicine(name) {
    fetch("http://localhost:8000/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ name })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                alert(`Error: ${data.error}`);
            } else {
                alert(data.message);
                fetchMedicines();
                document.getElementById("deleteMedicineForm").reset();
            }
        })
        .catch((error) => {
            console.error("Error deleting medicine:", error);
            alert("Failed to delete medicine.");
        });
}

document.getElementById("averagePriceButton").addEventListener("click", fetchAveragePrice);

function fetchAveragePrice() {
    fetch("http://localhost:8000/average-price")
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch average price");
            return response.json();
        })
        .then((data) => {
            const display = document.getElementById("averagePriceDisplay");
            if (data.error) {
                display.textContent = `Error: ${data.error}`;
            } else {
                display.textContent = `Average Price: $${data.average_price.toFixed(2)}`;
            }
        })
        .catch((error) => {
            console.error("Error fetching average price:", error);
            document.getElementById("averagePriceDisplay").textContent = "Failed to calculate average price.";
        });
}
