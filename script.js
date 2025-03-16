document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("restaurant-form");
    const customerList = document.getElementById("customer-list");
    let editRow = null; 

    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const address = document.getElementById("address").value.trim();
        const phoneNumber = document.getElementById("phonenumber").value.trim();

        if (firstName === "" || lastName === "" || email  === "" || address === "" || phoneNumber === "") {
            alert("Please fill in all fields!");
            return;
        }

        if (editRow) {
            
            editRow.cells[0].textContent = firstName;
            editRow.cells[1].textContent = lastName;
            editRow.cells[2].textContent = email;
            editRow.cells[3].textContent = address;
            editRow.cells[4].textContent = phoneNumber;
            editRow = null; 
        } else {

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${email}</td>
                <td>${address}</td>
                <td>${phoneNumber}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            customerList.appendChild(row);
        }


        form.reset();
    });


    customerList.addEventListener("click", function (event) {
        if (event.target.classList.contains("edit")) {
            const row = event.target.closest("tr");
            document.getElementById("firstName").value = row.cells[0].textContent;
            document.getElementById("lastName").value = row.cells[1].textContent;
            document.getElementById("email").value = row.cells[2].textContent;
            document.getElementById("address").value = row.cells[3].textContent;
            document.getElementById("phonenumber").value = row.cells[4].textContent;
            editRow = row; 
        }

        if (event.target.classList.contains("delete")) {
            if (confirm("Are you sure you want to delete this entry?")) {
                event.target.closest("tr").remove();
            }
        }
    });
});
