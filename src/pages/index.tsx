import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { useState } from 'react';
import { petNFTAddress, petNFTAbi } from './ABI/petNFTABI';
import { useRouter } from 'next/router';
import Footer from './footer';

type PetInfo = [string, string, bigint, boolean];

// Returns YYYY-MM-DD for today
function getTodayISOString() {
  return new Date().toISOString().slice(0, 10);
}

// Colors from the logo
const pawBlue = "#2ec4f1";
const pawOrange = "#ffb347";
const pawGreen = "#7be495";
const pawPink = "#ff5fa2";
const pawDark = "#1a2233";

export default function Home() {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const [form, setForm] = useState({ name: '', breed: '', birthDate: '', tokenURI: '' });
  const [tokenId, setTokenId] = useState('');
  const [txHash, setTxHash] = useState<`0x${string}` | undefined>(undefined);

  const { writeContract, isPending } = useWriteContract();

  // Read pet info
  const { data, isLoading: isFetchingPetInfo } = useReadContract({
    address: petNFTAddress,
    abi: petNFTAbi,
    functionName: 'pets',
    args: tokenId ? [BigInt(tokenId)] : undefined,
    query: { enabled: !!tokenId },
  });
  const petInfo = data as PetInfo | undefined;

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash,
    query: { enabled: !!txHash },
  });

  // Register pet
  const handleRegister = () => {
    if (!address || !form.name || !form.breed || !form.birthDate || !form.tokenURI) return;
    // Convert date value to unix timestamp (seconds, at midnight)
    const birthDateTimestamp = Math.floor(new Date(form.birthDate).setHours(0, 0, 0, 0) / 1000);
    writeContract(
      {
        address: petNFTAddress,
        abi: petNFTAbi,
        functionName: 'registerPet',
        args: [address, form.name, form.breed, BigInt(birthDateTimestamp), form.tokenURI],
      },
      {
        onSuccess: (data) => setTxHash(data),
      }
    );
  };

  return (
    <main
      className="main-container"
      style={{
        background: "#f9fafb",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        boxSizing: "border-box"
      }}
    >
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.25rem 0.25rem 0.25rem 0.25rem',
        background: pawDark,
        marginBottom: 5,
        borderBottom: `4px solid ${pawBlue}`
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
            PawChain
          </span>
        </div>
        <ConnectButton />
      </header>

      <nav style={{
        marginBottom: 24,
        display: 'flex',
        justifyContent: 'center',
        gap: 16
      }}>
        <button
          className="button"
          style={{
            maxWidth: 220,
            width: '100%',
            minWidth: 140,
            margin: '0 auto',
            background: `linear-gradient(90deg, ${pawBlue} 0%, ${pawGreen} 100%)`,
            color: pawDark,
            fontWeight: 700,
            border: `2px solid ${pawPink}`,
            boxShadow: `0 2px 8px ${pawPink}22`
          }}
          onClick={() => router.push('/admin')}
        >
          Go to Admin Functions
        </button>
        <button
          className="button"
          style={{
            maxWidth: 220,
            width: '100%',
            minWidth: 140,
            margin: '0 auto',
            background: `linear-gradient(90deg, ${pawPink} 0%, ${pawBlue} 100%)`,
            color: pawDark,
            fontWeight: 700,
            border: `2px solid ${pawGreen}`,
            boxShadow: `0 2px 8px ${pawGreen}22`
          }}
          onClick={() => router.push('/healthRegistry')}
        >
          Health Registry
        </button>
      </nav>

      {isConnected && (
        <>
          {/* Register New Pet Section */}
          <div
            className="section"
            style={{
              maxWidth: 380,
              marginLeft: 20,
              marginRight: '2vw',
              width: '100%',
              display: 'inline-block',
              verticalAlign: 'top',
              background: "#fff",
              border: `2px solid ${pawBlue}`,
              boxShadow: `0 2px 16px ${pawBlue}11`
            }}
          >
            <h2 className="section-title" style={{ color: pawBlue }}>Register New Pet</h2>
            <div className="form-container">
              <input
                className="input"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{ borderColor: pawGreen }}
              />
              <input
                className="input"
                placeholder="Breed"
                value={form.breed}
                onChange={(e) => setForm({ ...form, breed: e.target.value })}
                style={{ borderColor: pawGreen }}
              />
              <input
                className="input"
                type="date"
                placeholder="Birthdate"
                value={form.birthDate}
                max={getTodayISOString()}
                onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
                style={{ borderColor: pawGreen }}
              />
              <input
                className="input"
                placeholder="Token URI"
                value={form.tokenURI}
                onChange={(e) => setForm({ ...form, tokenURI: e.target.value })}
                style={{ borderColor: pawGreen }}
              />
              <button
                className={`button ${isPending || isConfirming ? 'button-disabled' : ''}`}
                style={{
                  maxWidth: 180,
                  width: '100%',
                  minWidth: 100,
                  alignSelf: 'flex-end',
                  background: `linear-gradient(90deg, ${pawOrange} 0%, ${pawPink} 100%)`,
                  color: pawDark,
                  fontWeight: 700,
                  border: `2px solid ${pawBlue}`,
                  boxShadow: `0 2px 8px ${pawOrange}22`
                }}
                onClick={handleRegister}
                disabled={isPending || isConfirming}
              >
                {isPending ? 'Submitting...' : isConfirming ? 'Confirming...' : 'Register Pet'}
              </button>
              {isSuccess && <p className="success-message" style={{ color: pawGreen }}>✅ Pet registered successfully!</p>}
            </div>
          </div>

          {/* View Pet Info Section */}
          <div
            className="section"
            style={{
              maxWidth: 380,
              marginLeft: '2vw',
              marginRight: 0,
              width: '100%',
              display: 'inline-block',
              verticalAlign: 'top',
              background: "#fff",
              border: `2px solid ${pawPink}`,
              boxShadow: `0 2px 16px ${pawPink}11`
            }}
          >
            <h2 className="section-title" style={{ color: pawPink }}>View Pet Info</h2>
            <input
              className="input"
              placeholder="Pet Token ID"
              value={tokenId}
              onChange={(e) => {
                const value = e.target.value;
                if (!isNaN(Number(value))) {
                  setTokenId(value);
                }
              }}
              style={{ borderColor: pawBlue }}
            />
            {isFetchingPetInfo ? (
              <p className="loading-message" style={{ color: pawBlue }}>Loading pet information...</p>
            ) : petInfo ? (
              <div className="pet-info" style={{
                background: pawGreen,
                borderRadius: 8,
                padding: 16,
                marginTop: 8,
                fontSize: 16,
                color: pawDark
              }}>
                <p className="pet-info-item"><strong>Name:</strong> {petInfo[0]}</p>
                <p className="pet-info-item"><strong>Breed:</strong> {petInfo[1]}</p>
                <p className="pet-info-item"><strong>Birthdate:</strong> {new Date(Number(petInfo[2]) * 1000).toLocaleDateString()}</p>
                <p className="pet-info-item"><strong>Lost:</strong> {petInfo[3] ? 'Yes' : 'No'}</p>
              </div>
            ) : (
              <p className="error-message" style={{ color: pawOrange }}>No pet information found for this Token ID.</p>
            )}
          </div>
        </>
      )}
      <Footer />
    </main>
  );
}