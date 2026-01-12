function handleReferralParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref');

    // If a referral parameter exists, store it in localStorage
    if (refParam) {
        console.log("handleReferralParams refParam=", refParam);
        if (!localStorage.getItem('referral')) {
            localStorage.setItem('referral', refParam);
            console.log("handleReferralParams setItem and send XMLHttpRequest");
            // if user lands first time we need to send "visit" to backend
            const xhttp = new XMLHttpRequest();
            xhttp.open("GET", "https://www.nameswitch-staging-app.nameswitch.co.uk/referral?ref=" + refParam, true);
            xhttp.send();
        }
    }

    // Get the stored referral value
    const storedRef = localStorage.getItem('referral');

    // Update all CTA links to include the referral parameter
    if (storedRef) {
        // Find all relevant CTA links
        const links = document.querySelectorAll('a[href*="https://www.nameswitch-staging-app.nameswitch.co.uk"]');
        links.forEach(function(link) {
            const originalHref = link.getAttribute('href');
            try {
                const url = new URL(originalHref);
                // Add or update the ref parameter
                url.searchParams.set('ref', storedRef);
                link.setAttribute('href', url.toString());
            } catch (e) {
                console.error('handleReferralParams_Invalid_URL:', originalHref);
            }
        });
    }
}

handleReferralParams();
