import { postRequest } from "./dataAccess.js"

// Grab the HTML main container
const mainContainer = document.querySelector("#container")

// Create click event on 'submit request' button
mainContainer.addEventListener("click", e => {
    // If button was clicked
    if (e.target.id === "submitRequest") {
        // Save users form input answers
        const userName = document.querySelector("input[name='serviceName']").value
        const userChildName = document.querySelector("input[name='serviceChildName']").value
        const userTotalChildren = document.querySelector("input[name='serviceTotalChildren']").value
        const userLength = document.querySelector("input[name='serviceLength']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataSendToAPI = {
            name: userName,
            childName: userChildName,
            totalChildren: userTotalChildren,
            timeLength: userLength,
            address: userAddress,
            date: userDate
        }

        // Send the data to the API for permanent storage
        postRequest(dataSendToAPI)
    }

    
})

// Function to create and send form in HTML
export const ServiceForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="serviceName">Name</label>
        <input type="text" name="serviceName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceChildName">Child's Name</label>
        <input type="text" name="serviceChildName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceTotalChildren">Total Children at Event</label>
        <input type="text" name="serviceTotalChildren" class="input" /> 
    </div>
    <div class="field">
        <label class="label" for="serviceLength">Length of Time Needed</label>
        <input type="text" name="serviceLength" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceAddress">Address of Event</label>
        <input type="text" name="serviceAddress" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceDate"> Date of Event</label>
        <input type="date" name="serviceDate" class="input" />
    </div>
    
    <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}