 <script>
        document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');
            let toggleFormLink = document.getElementById('toggleFormLink');
            const formTitle = document.getElementById('formTitle');
            const toggleFormText = document.getElementById('toggleFormText');
            const messageDiv = document.getElementById('message');
            function displayMessage(msg, type) {
                messageDiv.textContent = msg;
                messageDiv.className = `message-box message-${type}`;
            }
            function handleFormToggle(e) {
                e.preventDefault();
                if (loginForm.style.display === 'none') {
                    loginForm.style.display = 'block';
                    signupForm.style.display = 'none';
                    formTitle.textContent = 'Login';
                    toggleFormText.innerHTML = "Don't have an account? <a href='#' id='toggleFormLink' class='toggle-link'>Sign Up</a>";
                } else {
                    loginForm.style.display = 'none';
                    signupForm.style.display = 'block';
                    formTitle.textContent = 'Sign Up';
                    toggleFormText.innerHTML = "Already have an account? <a href='#' id='toggleFormLink' class='toggle-link'>Login</a>";
                }
                messageDiv.textContent = '';
                messageDiv.className = 'message-box';
                toggleFormLink = document.getElementById('toggleFormLink');
                toggleFormLink.addEventListener('click', handleFormToggle);
            }
            toggleFormLink.addEventListener('click', handleFormToggle);
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                console.log('Login attempt:', { email, password });
                displayMessage('Login successful! Welcome.', 'success');
                loginForm.reset();
            });
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('signupUsername').value;
                const email = document.getElementById('signupEmail').value;
                const password = document.getElementById('signupPassword').value;
                const confirmPassword = document.getElementById('signupConfirmPassword').value;

                if (password !== confirmPassword) {
                    displayMessage('Passwords do not match!', 'danger');
                    return;
                }
                console.log('Signup attempt:', { username, email, password });
                displayMessage('Account created successfully! You can now log in.', 'success');
                signupForm.reset();
                setTimeout(() => {
                    handleFormToggle({ preventDefault: () => {} });
                    messageDiv.textContent = '';
                    messageDiv.className = 'message-box';
                }, 2000);
            });
        });
    </script>