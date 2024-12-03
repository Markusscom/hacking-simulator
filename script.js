document.getElementById('commandInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const command = event.target.value.trim();
        const output = document.getElementById('output');

        // Show the entered command in the output
        output.innerHTML += `<div>> ${command}</div>`;

        // Simulate different hacking commands
        if (command.toLowerCase() === 'hack') {
            setTimeout(() => {
                output.innerHTML += `<div>Accessing the mainframe...</div>`;
                output.innerHTML += `<div class="animate">Hacking successful!</div>`;
                output.innerHTML += `<div>System compromised. Sending data...</div>`;
            }, 1500);
        } else if (command.toLowerCase() === 'scan') {
            setTimeout(() => {
                output.innerHTML += `<div>Scanning network for vulnerabilities...</div>`;
                output.innerHTML += `<div>Vulnerability found: Unpatched exploit detected in firewall.</div>`;
                output.innerHTML += `<div class="animate">Vulnerability mapped successfully.</div>`;
            }, 2000);
        } else if (command.toLowerCase() === 'shutdown') {
            setTimeout(() => {
                output.innerHTML += `<div>Shutting down system...</div>`;
                output.innerHTML += `<div class="animate">System shutting down in 3...</div>`;
                setTimeout(() => output.innerHTML += `<div>System shutting down in 2...</div>`, 1000);
                setTimeout(() => output.innerHTML += `<div>System shutting down in 1...</div>`, 2000);
                setTimeout(() => output.innerHTML += `<div>System shut down.</div>`, 3000);
            }, 1500);
        } else if (command.toLowerCase() === 'decrypt') {
            setTimeout(() => {
                output.innerHTML += `<div>Decrypting files...</div>`;
                output.innerHTML += `<div class="animate">Decryption in progress...</div>`;
                setTimeout(() => output.innerHTML += `<div>Decryption complete. Files accessed!</div>`, 3000);
            }, 2000);
        } else if (command.toLowerCase() === 'clear') {
            output.innerHTML = ''; // Clear the terminal output
        } else if (command.toLowerCase() === 'help') {
            setTimeout(() => {
                output.innerHTML += `<div>Available commands:</div>`;
                output.innerHTML += `<div>- hack: Access the mainframe</div>`;
                output.innerHTML += `<div>- scan: Scan the network for vulnerabilities</div>`;
                output.innerHTML += `<div>- shutdown: Shutdown the system</div>`;
                output.innerHTML += `<div>- decrypt: Decrypt protected files</div>`;
                output.innerHTML += `<div>- clear: Clear the terminal screen</div>`;
                output.innerHTML += `<div>- help: Show this help message</div>`;
            }, 1000);
        } else {
            setTimeout(() => {
                output.innerHTML += `<div class="error">Unknown command: ${command}</div>`;
            }, 1000);
        }

        // Scroll to the bottom of the terminal
        output.scrollTop = output.scrollHeight;

        // Clear the input field
        event.target.value = '';
    }
});
