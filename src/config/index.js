const getRandomIPFSURL = () => {
  const ipfs = [
    "https://ipfs.io/ipfs/",
    "https://gateway.pinata.cloud/ipfs/",
    "https://cloudflare-ipfs.com/ipfs/",
  ];

  return ipfs[Math.floor(Math.random() * ipfs.length)];
};

export default {
  RPC: "https://songbird.towolabs.com/rpc",
  getRandomIPFSURL,
};
