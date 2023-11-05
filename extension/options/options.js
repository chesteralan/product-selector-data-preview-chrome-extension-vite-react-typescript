// Saves options to chrome.storage
const loadOptions = (action = "save") => {
    const usStrapiServerUrl = document.getElementById('us-strapi-server-url')?.value;
    const usNextjsStagingUrl = document.getElementById('us-nextjs-staging-url')?.value;
    const usNextjsLiveUrl = document.getElementById('us-nextjs-live-url')?.value;

    const caStrapiServerUrl = document.getElementById('ca-strapi-server-url')?.value;
    const caNextjsStagingUrl = document.getElementById('ca-nextjs-staging-url')?.value;
    const caNextjsLiveUrl = document.getElementById('ca-nextjs-live-url')?.value;

    const ukStrapiServerUrl = document.getElementById('uk-strapi-server-url')?.value;
    const ukNextjsStagingUrl = document.getElementById('uk-nextjs-staging-url')?.value;
    const ukNextjsLiveUrl = document.getElementById('uk-nextjs-live-url')?.value;

    const nextjsLocalUrl = document.getElementById('nextjs-local-url')?.value;
    
    const storageOptions = { 
      usStrapiServerUrl: usStrapiServerUrl,
      usNextjsStagingUrl: usNextjsStagingUrl,
      usNextjsLiveUrl: usNextjsLiveUrl,
      // CA
      caStrapiServerUrl: caStrapiServerUrl,
      caNextjsStagingUrl: caNextjsStagingUrl,
      caNextjsLiveUrl: caNextjsLiveUrl,
      // UK
      ukStrapiServerUrl: ukStrapiServerUrl,
      ukNextjsStagingUrl: ukNextjsStagingUrl,
      ukNextjsLiveUrl: ukNextjsLiveUrl,

      nextjsLocalUrl: nextjsLocalUrl,
    };

    switch(action) {
      case "save":
        chrome.storage.local.set(storageOptions).then(() => {
          const status = document.getElementById('status');
          status.textContent = 'Options saved.';
          setTimeout(() => {
            status.textContent = '';
          }, 750);
        });
      break;
      case "restore":
        chrome.storage.local.get(Object.keys(storageOptions)).then((items) => {
          // us
          document.getElementById('us-strapi-server-url').value = items.usStrapiServerUrl || "";
          document.getElementById('us-nextjs-staging-url').value = items.usNextjsStagingUrl || "";
          document.getElementById('us-nextjs-live-url').value = items.usNextjsLiveUrl || "";
          // ca
          document.getElementById('ca-strapi-server-url').value = items.caStrapiServerUrl || "";
          document.getElementById('ca-nextjs-staging-url').value = items.caNextjsStagingUrl || "";
          document.getElementById('ca-nextjs-live-url').value = items.caNextjsLiveUrl || "";
          // uk
          document.getElementById('uk-strapi-server-url').value = items.ukStrapiServerUrl || "";
          document.getElementById('uk-nextjs-staging-url').value = items.ukNextjsStagingUrl || "";
          document.getElementById('uk-nextjs-live-url').value = items.ukNextjsLiveUrl || "";
          
          document.getElementById('nextjs-local-url').value = items.nextjsLocalUrl || "";
        });
        break;
    }
    

  };
  
  document.addEventListener('DOMContentLoaded', () => loadOptions("restore"));
  document.getElementById('save').addEventListener('click', () => loadOptions("save"));