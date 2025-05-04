import { useState } from 'react';
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { useRouter } from 'next/router';
import { healthRegistryAddress, healthRegistryAbi } from './ABI/healthRegistryABI';
import Footer from './footer';

const pawBlue = "#2ec4f1";
const pawGreen = "#7be495";
const pawPink = "#ff5fa2";
const pawDark = "#1a2233";
const pawOrange = "#ffb347";

type Record = {
    timestamp: bigint;
    details: string;
    vet: string;
};

export default function HealthRegistryPage() {
    const router = useRouter();
    const { address, isConnected } = useAccount();

    // Separate variables for each card's token id
    const [viewTokenId, setViewTokenId] = useState('');
    const [addTokenId, setAddTokenId] = useState('');
    const [details, setDetails] = useState('');
    const [txHash, setTxHash] = useState<`0x${string}` | undefined>(undefined);

    // Read health records
    const { data: records, isLoading: isLoadingRecords, refetch } = useReadContract({
        address: healthRegistryAddress,
        abi: healthRegistryAbi,
        functionName: 'getHealthRecords',
        args: viewTokenId ? [BigInt(viewTokenId)] : undefined,
        query: { enabled: !!viewTokenId },
    });

    // Write contract
    const { writeContract, isPending } = useWriteContract();
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash: txHash,
        query: { enabled: !!txHash },
    });

    // Add health record
    const handleAddRecord = () => {
        if (!addTokenId || !details) return;
        writeContract(
            {
                address: healthRegistryAddress,
                abi: healthRegistryAbi,
                functionName: 'addHealthRecord',
                args: [BigInt(addTokenId), details],
            },
            {
                onSuccess: (data) => {
                    setTxHash(data);
                    setDetails('');
                    setTimeout(() => refetch(), 2000);
                },
            }
        );
    };

    return (
        <main className="main-container" style={{ background: "#f9fafb", minHeight: "100vh", margin: 0, padding: 0, boxSizing: "border-box" }}>
            <header style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem 1rem',
                background: pawDark,
                borderBottom: `4px solid ${pawBlue}`,
                marginBottom: 24
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <img
                        src="/logo.jpg"
                        alt="PawChain Logo"
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 10,
                            objectFit: 'cover',
                            boxShadow: `0 2px 8px ${pawBlue}55`
                        }}
                    />
                    <span style={{
                        fontWeight: 700,
                        fontSize: 24,
                        color: pawBlue,
                        letterSpacing: 1,
                        textShadow: `1px 1px 0 ${pawGreen}, 2px 2px 0 ${pawPink}`
                    }}>
                        Health Registry
                    </span>
                </div>
                <button
                    className="button"
                    style={{
                        maxWidth: 160,
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
                justifyContent: 'center',
                width: '100%',
                padding: '0 32px'
            }}>
                {/* View Health Records Card */}
                <div style={{
                    maxWidth: 420,
                    minWidth: 320,
                    width: 380,
                    minHeight: 320,
                    background: "#fff",
                    border: `2px solid ${pawBlue}`,
                    borderRadius: 10,
                    boxShadow: `0 2px 16px ${pawBlue}11`,
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                    marginBottom: 0
                }}>
                    <h2 className="section-title" style={{ color: pawBlue }}>View Health Records</h2>
                    <input
                        className="input"
                        placeholder="Pet Token ID"
                        value={viewTokenId}
                        onChange={e => setViewTokenId(e.target.value)}
                        style={{ borderColor: pawGreen, marginBottom: 12 }}
                    />
                    <button
                        className="button"
                        style={{
                            maxWidth: 140,
                            marginBottom: 18,
                            background: `linear-gradient(90deg, ${pawBlue} 0%, ${pawGreen} 100%)`,
                            color: pawDark,
                            fontWeight: 700,
                            border: `2px solid ${pawPink}`,
                            boxShadow: `0 2px 8px ${pawPink}22`
                        }}
                        onClick={() => refetch()}
                    >
                        Load Records
                    </button>
                    {isLoadingRecords ? (
                        <p className="loading-message" style={{ color: pawBlue }}>Loading records...</p>
                    ) : records && (records as Record[]).length > 0 ? (
                        <div style={{ marginTop: 12 }}>
                            {(records as Record[]).map((rec, idx) => (
                                <div key={idx} style={{
                                    background: pawGreen,
                                    borderRadius: 8,
                                    padding: 12,
                                    marginBottom: 10,
                                    color: pawDark
                                }}>
                                    <div><strong>Date:</strong> {new Date(Number(rec.timestamp) * 1000).toLocaleString()}</div>
                                    <div><strong>Vet:</strong> {rec.vet.slice(0, 5)}...{rec.vet.slice(-5)}</div>
                                    <div><strong>Details:</strong> {rec.details}</div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="error-message" style={{ color: pawOrange }}>No records found.</p>
                    )}
                </div>

                {/* Add Health Record Card */}
                <div style={{
                    maxWidth: 420,
                    minWidth: 320,
                    width: 380,
                    minHeight: 320,
                    background: "#fff",
                    border: `2px solid ${pawPink}`,
                    borderRadius: 10,
                    boxShadow: `0 2px 16px ${pawPink}11`,
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                    marginBottom: 0
                }}>
                    <h2 className="section-title" style={{ color: pawPink }}>Add Health Record</h2>
                    <input
                        className="input"
                        placeholder="Pet Token ID"
                        value={addTokenId}
                        onChange={e => setAddTokenId(e.target.value)}
                        style={{ borderColor: pawBlue, marginBottom: 10 }}
                    />
                    <textarea
                        className="input"
                        placeholder="Health Details"
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                        style={{ borderColor: pawPink, minHeight: 80, marginBottom: 10 }}
                    />
                    <button
                        className="button"
                        style={{
                            maxWidth: 180,
                            alignSelf: 'flex-end',
                            background: `linear-gradient(90deg, ${pawPink} 0%, ${pawGreen} 100%)`,
                            color: pawDark,
                            fontWeight: 700,
                            border: `2px solid ${pawBlue}`,
                            boxShadow: `0 2px 8px ${pawPink}22`
                        }}
                        onClick={handleAddRecord}
                        disabled={isPending || isConfirming}
                    >
                        {isPending ? 'Submitting...' : isConfirming ? 'Confirming...' : 'Add Record'}
                    </button>
                    {isSuccess && <p className="success-message" style={{ color: pawGreen }}>✅ Record added!</p>}
                </div>
            </div>
            <Footer />
        </main>
    );
}