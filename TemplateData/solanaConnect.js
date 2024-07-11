let provider;
window.onload = async () => {
  if (!window.keplr) {
    alert("Please install keplr extension");
  } else {
    const chainId = "omniflixhub-1";
    await window.keplr.enable(chainId);
    const offlineSigner = window.keplr.getOfflineSigner(chainId);
    const accounts = await offlineSigner.getAccounts();
    provider = accounts[0].address;
  }
};
// account change function in keplr wallet
// window.addEventListener("keplr_keystorechange", async () => {
//   console.log(
//     "Key store in Keplr is changed. You may need to refetch the account info."
//   );
//   const chainId = "omniflixhub-1";
//   await window.keplr.enable(chainId);
//   const offlineSigner = window.keplr.getOfflineSigner(chainId);
//   const accounts = await offlineSigner.getAccounts();
//   provider = accounts[0].address;
//   forping.SendMessage("photonchatmanager", "getwalletaddress");
//   console.log(provider);
// });
