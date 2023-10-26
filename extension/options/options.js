// Saves options to chrome.storage
const saveOptions = () => {
    const strapiServerUrl = document.getElementById('strapi-server-url')?.value;
    const nextjsStagingUrl = document.getElementById('nextjs-staging-url')?.value;
    const nextjsLocalUrl = document.getElementById('nextjs-local-url')?.value;
    const nextjsLiveUrl = document.getElementById('nextjs-live-url')?.value;
    
    chrome.storage.local.set({ 
        strapiServerUrl: strapiServerUrl,
        nextjsStagingUrl: nextjsStagingUrl,
        nextjsLocalUrl: nextjsLocalUrl,
        nextjsLiveUrl: nextjsLiveUrl,
    }).then(() => {
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      });

  };
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {
    chrome.storage.local.get(["strapiServerUrl","nextjsStagingUrl","nextjsLocalUrl","nextjsLiveUrl"]).then((items) => {
        document.getElementById('strapi-server-url').value = items.strapiServerUrl || "";
        document.getElementById('nextjs-staging-url').value = items.nextjsStagingUrl || "";
        document.getElementById('nextjs-local-url').value = items.nextjsLocalUrl || "";
        document.getElementById('nextjs-live-url').value = items.nextjsLiveUrl || "";
      });
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);