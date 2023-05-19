const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  const installPromptEvent = event;
  butInstall.style.display = 'block';
  butInstall.textContent = 'Install App';
});

butInstall.addEventListener('click', async () => {
  if (installPromptEvent) {
    installPromptEvent.prompt();
    const choiceResult = await installPromptEvent.userChoice;
    console.log('User choice:', choiceResult.outcome);
    installPromptEvent = null;
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully!');
});
