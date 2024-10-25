// import { useAccount, useConnect, useDisconnect } from 'wagmi';
// import { useDispatch } from 'react-redux';
// import { updateWalletState } from '../redux/actions'; // Your Redux action creator



// const ConnectWallet = () => {
//     const dispatch = useDispatch();
//     const { connectors, connect, status, error } = useConnect();
//     const { disconnect } = useDisconnect();
//     const account = useAccount();
  
//     const handleConnect = async (connector) => {
//       await connect({ connector });
//       dispatch(updateWalletState({ status: account.status, address: account.addresses[0] }));
//     };
  
//     const handleDisconnect = async () => {
//       await disconnect();
//       dispatch(updateWalletState({ status: 'disconnected', address: null }));
//     };
  
//     return { handleConnect, handleDisconnect, account, status, error };
//   };
  
//   export default ConnectWallet;
  