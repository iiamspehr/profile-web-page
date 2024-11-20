document.addEventListener('DOMContentLoaded', () => {  
    console.log('Profile page loaded.');  

    const bioElement = document.querySelector('.bio');  
    const updateBioButton = document.querySelector('.update-bio-button');  
    
    // Update bio functionality  
    updateBioButton.addEventListener('click', () => {  
        const newBio = prompt('Please enter your new bio:');  
        if (newBio) {  
            bioElement.textContent = newBio;  
            console.log('Bio updated to:', newBio);  
        }  
    });  

    // Log changes for email and phone number inputs  
    const emailInput = document.querySelector('input[type="email"]');  
    const phoneInput = document.querySelector('input[type="tel"]');  

    if (emailInput) {  
        emailInput.addEventListener('input', () => {  
            console.log(`Email changed to: ${emailInput.value}`);  
        });  
    }  

    if (phoneInput) {  
        phoneInput.addEventListener('input', () => {  
            console.log(`Phone number changed to: ${phoneInput.value}`);  
        });  
    }  
});