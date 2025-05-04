import { useState } from 'react';
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { petNFTAddress, petNFTAbi } from './ABI/petNFTABI';
import { useRouter } from 'next/router';
import Footer from './footer';
import { healthRegistryAddress, healthRegistryAbi } from './ABI/healthRegistryABI';

// Colors from the logo
const pawBlue = "#2ec4f1";
const pawOrange = "#ffb347";
const pawGreen = "#7be495";
const pawPink = "#ff5fa2";
const pawDark = "#1a2233";

export default function AdminPage() {
  const router = useRouter();
  const [txHash, setTxHash] = useState<`0x${string}` | undefined>(undefined);

  // Admin Transfer
  const [adminTransfer, setAdminTransfer] = useState({ from: '', to: '', tokenId: '' });
  // Approve
  const [approve, setApprove] = useState({ to: '', tokenId: '' });
  // Authorize Custody Manager
  const [custodyManager, setCustodyManager] = useState({ manager: '', status: false });
  // Authorize Updater
  const [updater, setUpdater] = useState({ updater: '', status: false });
  // Mark Lost
  const [markLost, setMarkLost] = useState({ tokenId: '', lost: false });
  // Safe Transfer From
  const [safeTransfer, setSafeTransfer] = useState({ from: '', to: '', tokenId: '' });
  // Set Approval For All
  const [approvalForAll, setApprovalForAll] = useState({ operator: '', approved: false });
  // Transfer From
  const [transferFrom, setTransferFrom] = useState({ from: '', to: '', tokenId: '' });
  // Transfer Ownership
  const [transferOwnership, setTransferOwnership] = useState({ newOwner: '' });

    // Health Registry Admin: Authorize Vet
    const [vetAuth, setVetAuth] = useState({ vet: '', status: false });

      // Health Registry: Authorize Vet
  const handleAuthorizeVet = () => {
    if (!vetAuth.vet) return;
    writeContract(
      {
        address: healthRegistryAddress,
        abi: healthRegistryAbi,
        functionName: 'authorizeVet',
        args: [vetAuth.vet, vetAuth.status],
      },
      { onSuccess: (data) => setTxHash(data) }
    );
  };

  const { writeContract, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash,
    query: { enabled: !!txHash },
  });

  // All handlers (same as before, but setTxHash)
  const handleAdminTransfer = () => {
    writeContract(
      {
        address: petNFTAddress,
        abi: petNFTAbi,
        functionName: 'adminTransfer',
        args: [adminTransfer.from, adminTransfer.to, BigInt(adminTransfer.tokenId)],
      },
      { onSuccess: (data) => setTxHash(data) }
    );
  };
  const handleApprove = () => {
    writeContract(
      {
        address: petNFTAddress,
        abi: petNFTAbi,
        functionName: 'approve',
        args: [approve.to, BigInt(approve.tokenId)],
      },
      { onSuccess: (data) => setTxHash(data) }
    );
  };
  const handleAuthorizeCustodyManager = () => {
    writeContract(
      {
        address: petNFTAddress,
        abi: petNFTAbi,
        functionName: 'authorizeCustodyManager',
        args: [custodyManager.manager, custodyManager.status],
      },
      { onSuccess: (data) => setTxHash(data) }
    );
  };
  const handleAuthorizeUpdater = () => {
    writeContract(
      {
        address: petNFTAddress,
        abi: petNFTAbi,
        functionName: 'authorizeUpdater',
        args: [updater.updater, updater.status],
      },
      { onSuccess: (data) => setTxHash(data) }
    );
  };
  const handleMarkLost = () => {
    writeContract(
      {
        address: petNFTAddress,
        abi: petNFTAbi,
        functionName: 'markLost',
        args: [BigInt(markLost.tokenId), markLost.lost],
      },
      { onSuccess: (data) => setTxHash(data) }
    );
  };
  const handleSafeTransferFrom = () => {
    writeContract(
      {
        address: petNFTAddress,
        abi: petNFTAbi,
        functionName: 'safeTransferFrom',
        args: [safeTransfer.from, safeTransfer.to, BigInt(safeTransfer.tokenId)],
      },
      { onSuccess: (data) => setTxHash(data) }
    );
  };
  const handleSetApprovalForAll = () => {
    writeContract(
      {
        address: petNFTAddress,
        abi: petNFTAbi,
        functionName: 'setApprovalForAll',
        args: [approvalForAll.operator, approvalForAll.approved],
      },
      { onSuccess: (data) => setTxHash(data) }
    );
  };
  const handleTransferFrom = () => {
    writeContract(
      {
        address: petNFTAddress,
        abi: petNFTAbi,
        functionName: 'transferFrom',
        args: [transferFrom.from, transferFrom.to, BigInt(transferFrom.tokenId)],
      },
      { onSuccess: (data) => setTxHash(data) }
    );
  };
  const handleTransferOwnership = () => {
    writeContract(
      {
        address: petNFTAddress,
        abi: petNFTAbi,
        functionName: 'transferOwnership',
        args: [transferOwnership.newOwner],
      },
      { onSuccess: (data) => setTxHash(data) }
    );
  };

  return (
    <main className="main-container" style={{
      background: "#f9fafb",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
      boxSizing: "border-box"
    }}>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.25rem 0.25rem 0.25rem 0.25rem',
        background: pawDark,
        borderBottom: `4px solid ${pawBlue}`,
        marginBottom: 5
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1 }}>
          <img
            src="/logo.jpg"
            alt="PawChain Logo"
            style={{
              height: 48,
              width: 48,
              borderRadius: 12,
              objectFit: 'cover',
              boxShadow: `0 2px 8px ${pawBlue}55`
            }}
          />
          <span style={{
            flex: 1,
            textAlign: 'center',
            fontWeight: 700,
            fontSize: 28,
            color: pawBlue,
            letterSpacing: 1,
            textShadow: `1px 1px 0 ${pawGreen}, 2px 2px 0 ${pawPink}`
          }}>
            PawChain Admin
          </span>
        </div>
        <button
          className="button"
          style={{
            maxWidth: 180,
            minWidth: 100,
            background: `linear-gradient(90deg, ${pawBlue} 0%, ${pawGreen} 100%)`,
            color: pawDark,
            fontWeight: 700,
            border: `2px solid ${pawPink}`,
            boxShadow: `0 2px 8px ${pawPink}22`
          }}
          onClick={() => router.push('/')}
        >
          Back to Dashboard
        </button>
      </header>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 32,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        padding: '0 32px'
      }}>
        

        <div className="section" style={{
          maxWidth: 420,
          minWidth: 320,
          flex: 1,
          background: "#fff",
          border: `2px solid ${pawGreen}`,
          boxShadow: `0 2px 16px ${pawGreen}11`
        }}>
          <h2 className="section-title" style={{ color: pawGreen }}>Authorize Custody Manager</h2>
          <div className="form-container">
            <input className="input" placeholder="Manager" value={custodyManager.manager} onChange={e => setCustodyManager({ ...custodyManager, manager: e.target.value })} />
            <label>
              <input type="checkbox" checked={custodyManager.status} onChange={e => setCustodyManager({ ...custodyManager, status: e.target.checked })} />
              Status
            </label>
            <button className="button" style={{
              maxWidth: 180,
              minWidth: 100,
              alignSelf: 'flex-end',
              background: `linear-gradient(90deg, ${pawGreen} 0%, ${pawBlue} 100%)`,
              color: pawDark,
              fontWeight: 700,
              border: `2px solid ${pawGreen}`,
              boxShadow: `0 2px 8px ${pawGreen}22`
            }} onClick={handleAuthorizeCustodyManager}>Authorize Custody Manager</button>
          </div>
        </div>

        <div className="section" style={{
          maxWidth: 420,
          minWidth: 320,
          flex: 1,
          background: "#fff",
          border: `2px solid ${pawOrange}`,
          boxShadow: `0 2px 16px ${pawOrange}11`
        }}>
          <h2 className="section-title" style={{ color: pawOrange }}>Authorize Updater</h2>
          <div className="form-container">
            <input className="input" placeholder="Updater" value={updater.updater} onChange={e => setUpdater({ ...updater, updater: e.target.value })} />
            <label>
              <input type="checkbox" checked={updater.status} onChange={e => setUpdater({ ...updater, status: e.target.checked })} />
              Status
            </label>
            <button className="button" style={{
              maxWidth: 180,
              minWidth: 100,
              alignSelf: 'flex-end',
              background: `linear-gradient(90deg, ${pawOrange} 0%, ${pawPink} 100%)`,
              color: pawDark,
              fontWeight: 700,
              border: `2px solid ${pawOrange}`,
              boxShadow: `0 2px 8px ${pawOrange}22`
            }} onClick={handleAuthorizeUpdater}>Authorize Updater</button>
          </div>
        </div>

        <div className="section" style={{
          maxWidth: 420,
          minWidth: 320,
          flex: 1,
          background: "#fff",
          border: `2px solid ${pawBlue}`,
          boxShadow: `0 2px 16px ${pawBlue}11`
        }}>
          <h2 className="section-title" style={{ color: pawBlue }}>Mark Lost</h2>
          <div className="form-container">
            <input className="input" placeholder="Token ID" value={markLost.tokenId} onChange={e => setMarkLost({ ...markLost, tokenId: e.target.value })} />
            <label>
              <input type="checkbox" checked={markLost.lost} onChange={e => setMarkLost({ ...markLost, lost: e.target.checked })} />
              Lost
            </label>
            <button className="button" style={{
              maxWidth: 180,
              minWidth: 100,
              alignSelf: 'flex-end',
              background: `linear-gradient(90deg, ${pawBlue} 0%, ${pawGreen} 100%)`,
              color: pawDark,
              fontWeight: 700,
              border: `2px solid ${pawBlue}`,
              boxShadow: `0 2px 8px ${pawBlue}22`
            }} onClick={handleMarkLost}>Mark Lost</button>
          </div>
        </div>
 {/* Health Registry: Authorize Vet */}
        <div className="section" style={{
          maxWidth: 420,
          minWidth: 320,
          width: 380,
          minHeight: 320,
          background: "#fff",
          border: `2px solid ${pawPink}`,
          boxShadow: `0 2px 16px ${pawPink}11`
        }}>
          <h2 className="section-title" style={{ color: pawPink }}>Authorize Vet (Health Registry)</h2>
          <div className="form-container">
            <input
              className="input"
              placeholder="Vet Address"
              value={vetAuth.vet}
              onChange={e => setVetAuth({ ...vetAuth, vet: e.target.value })}
            />
            <label>
              <input
                type="checkbox"
                checked={vetAuth.status}
                onChange={e => setVetAuth({ ...vetAuth, status: e.target.checked })}
              />
              Status
            </label>
            <button
              className="button"
              style={{
                maxWidth: 180,
                minWidth: 100,
                alignSelf: 'flex-end',
                background: `linear-gradient(90deg, ${pawPink} 0%, ${pawGreen} 100%)`,
                color: pawDark,
                fontWeight: 700,
                border: `2px solid ${pawPink}`,
                boxShadow: `0 2px 8px ${pawPink}22`
              }}
              onClick={handleAuthorizeVet}
            >
              Authorize Vet
            </button>
          </div>
        </div>
        
      </div>

      <div style={{ maxWidth: 600, margin: '2rem auto 0 auto' }}>
        {isConfirming && <p className="loading-message" style={{ color: pawBlue }}>Confirming transaction...</p>}
        {isSuccess && <p className="success-message" style={{ color: pawGreen }}>✅ Transaction successful!</p>}
      </div>
      <Footer />
    </main>
  );
}