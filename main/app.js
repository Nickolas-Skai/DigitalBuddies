document.getElementById('save-btn').addEventListener('click', saveEntry);

function saveEntry() {
    const senior = {
        name: document.getElementById('name').value,
        contact: document.getElementById('contact').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        smartphoneBasics: {
            turnPhoneOnOff: document.getElementById('turn-phone-on-off').checked,
            navigateHomeScreen: document.getElementById('navigate-home-screen').checked,
            adjustVolume: document.getElementById('adjust-volume').checked,
            makeCalls: document.getElementById('make-calls').checked,
            sendTexts: document.getElementById('send-texts').checked
        },
        applications: {
            downloadApps: document.getElementById('download-apps').checked,
            useWhatsApp: document.getElementById('use-whatsapp').checked,
            whatsappMessages: document.getElementById('whatsapp-messages').checked,
            whatsappCalls: document.getElementById('whatsapp-calls').checked,
            useFacebook: document.getElementById('use-facebook').checked,
            facebookPosts: document.getElementById('facebook-posts').checked
        },
        emailInternet: {
            setupEmail: document.getElementById('setup-email').checked,
            sendEmails: document.getElementById('send-emails').checked,
            browseInternet: document.getElementById('browse-internet').checked,
            searchInfo: document.getElementById('search-info').checked
        },
        onlineSafety: {
            recognizePhishing: document.getElementById('recognize-phishing').checked,
            createStrongPasswords: document.getElementById('create-strong-passwords').checked,
            safeBrowsing: document.getElementById('safe-browsing').checked,
            protectInfo: document.getElementById('protect-info').checked
        },
        additionalTopics: {
            onlineShopping: document.getElementById('online-shopping').checked,
            onlineBanking: document.getElementById('online-banking').checked,
            zoomCalls: document.getElementById('zoom-calls').checked,
            other: document.getElementById('other-topics').value
        },
        sessionSummary: {
            summary: document.getElementById('session-summary').value,
        },
        supervisorReview: {
            supervisorName: document.getElementById('supervisor-name').value,
            reviewDate: document.getElementById('review-date').value,
            supervisorSignature: document.getElementById('supervisor-signature').value
        }
    };

    // Save the senior's data in localStorage
    let seniors = JSON.parse(localStorage.getItem('seniors')) || [];
    seniors.push(senior);
    localStorage.setItem('seniors', JSON.stringify(seniors));

    // Clear the form
    document.getElementById('senior-form').reset();

    // Refresh the report display
    displayReports();
}

function displayReports() {
    const seniors = JSON.parse(localStorage.getItem('seniors')) || [];
    const reportList = document.getElementById('report-list');
    reportList.innerHTML = ''; // Clear previous entries

    seniors.forEach((senior, index) => {
        const listItem = document.createElement('li');
        
        // Constructing the display text for each entry
        let entryText = `
            <strong>Entry ${index + 1}:</strong><br>
            <strong>Name:</strong> ${senior.name}<br>
            <strong>Contact:</strong> ${senior.contact}<br>
            <strong>Phone:</strong> ${senior.phone}<br>
            <strong>Email:</strong> ${senior.email}<br>
            <strong>Address:</strong> ${senior.address}<br>
            <strong>Session Date:</strong> ${senior.sessionDate}<br>
            <strong>Summary of the Session:</strong> ${senior.sessionSummary.summary}<br>
            <strong>Skills Learned:</strong><br>
            <ul>
        `;
        
        // Add skills learned based on completed checkboxes
        if (senior.smartphoneBasics.turnPhoneOnOff) {
            entryText += '<li>Turning the phone on/off</li>';
        }
        if (senior.smartphoneBasics.navigateHomeScreen) {
            entryText += '<li>Navigating the home screen</li>';
        }
        if (senior.smartphoneBasics.adjustVolume) {
            entryText += '<li>Adjusting volume and brightness</li>';
        }
        if (senior.smartphoneBasics.makeCalls) {
            entryText += '<li>Making and receiving calls</li>';
        }
        if (senior.smartphoneBasics.sendTexts) {
            entryText += '<li>Sending and receiving text messages</li>';
        }
        
        if (senior.applications.downloadApps) {
            entryText += '<li>Downloading and installing apps</li>';
        }
        if (senior.applications.useWhatsApp) {
            entryText += '<li>Using WhatsApp</li>';
        }
        if (senior.applications.whatsappMessages) {
            entryText += '<li>Sending and receiving WhatsApp messages</li>';
        }
        if (senior.applications.whatsappCalls) {
            entryText += '<li>Making WhatsApp voice/video calls</li>';
        }
        if (senior.applications.useFacebook) {
            entryText += '<li>Using Facebook</li>';
        }
        if (senior.applications.facebookPosts) {
            entryText += '<li>Browsing and posting on Facebook</li>';
        }

        if (senior.emailInternet.setupEmail) {
            entryText += '<li>Setting up an email account</li>';
        }
        if (senior.emailInternet.sendEmails) {
            entryText += '<li>Sending and receiving emails</li>';
        }
        if (senior.emailInternet.browseInternet) {
            entryText += '<li>Browsing the internet</li>';
        }
        if (senior.emailInternet.searchInfo) {
            entryText += '<li>Searching for information online</li>';
        }

        if (senior.onlineSafety.recognizePhishing) {
            entryText += '<li>Recognizing phishing attempts</li>';
        }
        if (senior.onlineSafety.createStrongPasswords) {
            entryText += '<li>Creating strong passwords</li>';
        }
        if (senior.onlineSafety.safeBrowsing) {
            entryText += '<li>Safe browsing practices</li>';
        }
        if (senior.onlineSafety.protectInfo) {
            entryText += '<li>Protecting personal information online</li>';
        }

        if (senior.additionalTopics.onlineShopping) {
            entryText += '<li>Online shopping basics</li>';
        }
        if (senior.additionalTopics.onlineBanking) {
            entryText += '<li>Online banking introduction</li>';
        }
        if (senior.additionalTopics.zoomCalls) {
            entryText += '<li>Using Zoom for video calls</li>';
        }
        if (senior.additionalTopics.other) {
            entryText += `<li>Other: ${senior.additionalTopics.other}</li>`;
        }

        entryText += '</ul>'; // Close the list of skills learned
        listItem.innerHTML = entryText; // Set the HTML for the list item
        reportList.appendChild(listItem); // Append the item to the report list
    });
}

// Display reports on page load
window.onload = displayReports;
