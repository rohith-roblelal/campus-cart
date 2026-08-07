module.exports = [
"[project]/frontend/src/app/print/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrintServicePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable react/no-unescaped-entities */ /* eslint-disable @next/next/no-img-element */ "use client";
;
;
;
function PrintServicePage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileBase64, setFileBase64] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [pages, setPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [copies, setCopies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [colorMode, setColorMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("B&W");
    // Payment States
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("COD");
    const [transactionId, setTransactionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cardDetails, setCardDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        number: "",
        expiry: "",
        cvv: ""
    });
    const [selectedUpiApp, setSelectedUpiApp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [qrVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Date.now());
    // Detailed Address States
    const [accommodationType, setAccommodationType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Hostel"); // "Hostel", "PG"
    const [collegeName, setCollegeName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [roomNo, setRoomNo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [addressDetails, setAddressDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [pincode, setPincode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [additionalPhone, setAdditionalPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        type: "",
        text: ""
    });
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Pricing Constants
    const rateBW = 1.50;
    const rateColor = 10.00;
    // Derived State
    const pricePerPage = colorMode === "Color" ? rateColor : rateBW;
    const totalPrice = pages * copies * pricePerPage;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Fetch User Profile to pre-fill address
        fetch("/api/user/profile").then((res)=>{
            if (!res.ok) throw new Error("Unauthorized");
            return res.json();
        }).then((data)=>{
            if (data.accommodationType) setAccommodationType(data.accommodationType);
            if (data.phone) setAdditionalPhone(data.phone);
            setLoading(false);
        }).catch(()=>router.push("/login"));
    }, [
        router
    ]);
    const handleFileChange = (e)=>{
        const selectedFile = e.target.files?.[0];
        handleNewFile(selectedFile);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        const droppedFile = e.dataTransfer.files?.[0];
        handleNewFile(droppedFile);
    };
    const handleNewFile = (selectedFile)=>{
        if (!selectedFile) return;
        // Validation
        if (selectedFile.type !== "application/pdf") {
            setMessage({
                type: "error",
                text: "Please upload a valid PDF file."
            });
            return;
        }
        // 25MB Limit Check (25 * 1024 * 1024)
        if (selectedFile.size > 25 * 1024 * 1024) {
            setMessage({
                type: "error",
                text: "File is too large. Maximum size is 25MB."
            });
            return;
        }
        setFile(selectedFile);
        setMessage({
            type: "",
            text: ""
        });
        // Convert to Base64
        const reader = new FileReader();
        reader.onloadend = ()=>{
            setFileBase64(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setSubmitting(true);
        setMessage({
            type: "",
            text: ""
        });
        if (!file || !fileBase64) {
            setMessage({
                type: "error",
                text: "Please upload a PDF document to proceed."
            });
            setSubmitting(false);
            return;
        }
        if (!roomNo || !addressDetails || !pincode) {
            setMessage({
                type: "error",
                text: "Please fill in all the required address fields (Room No, Address, Pincode)."
            });
            setSubmitting(false);
            return;
        }
        if (accommodationType === "Hostel" && !collegeName) {
            setMessage({
                type: "error",
                text: "Please select a college for hostel accommodation."
            });
            setSubmitting(false);
            return;
        }
        if (paymentMethod === "UPI" && transactionId.trim().length < 6) {
            setMessage({
                type: "error",
                text: "Please secure a valid UPI UTR Transaction ID to proceed."
            });
            setSubmitting(false);
            return;
        }
        if (paymentMethod === "CARD" && (!cardDetails.name || !cardDetails.number || !cardDetails.expiry || !cardDetails.cvv)) {
            setMessage({
                type: "error",
                text: "Please complete all secure card details to proceed."
            });
            setSubmitting(false);
            return;
        }
        let builtAddress = `${accommodationType} - `;
        if (accommodationType === "Hostel") {
            builtAddress += `${collegeName}, `;
        }
        builtAddress += `Room/Flat: ${roomNo}, ${addressDetails}, Pincode: ${pincode}`;
        if (additionalPhone) {
            builtAddress += `, Alt Phone: ${additionalPhone}`;
        }
        const address = builtAddress;
        try {
            const res = await fetch("/api/print-orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fileData: fileBase64,
                    fileName: file.name,
                    totalPages: pages,
                    copies,
                    colorMode,
                    pricePerPage,
                    totalPrice,
                    address,
                    paymentMethod,
                    transactionId: paymentMethod === "UPI" ? transactionId : null
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setMessage({
                    type: "error",
                    text: data.error || "Failed to place print order"
                });
            } else {
                setMessage({
                    type: "success",
                    text: "Print Order placed successfully! Redirecting..."
                });
                setTimeout(()=>router.push("/dashboard"), 1500);
            }
        } catch (err) {
            setMessage({
                type: "error",
                text: "Network error occurred while submitting order."
            });
        } finally{
            if (!message.text.includes("Redirecting")) {
                setSubmitting(false);
            }
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        style: {
            padding: "80px",
            textAlign: "center"
        },
        children: "Initializing Print Service..."
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/print/page.tsx",
        lineNumber: 179,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container animate-fade-in",
        style: {
            padding: "40px 24px",
            maxWidth: "900px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "40px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-gradient",
                        style: {
                            fontSize: "3rem",
                            marginBottom: "16px"
                        },
                        children: "PDF Print Service"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/print/page.tsx",
                        lineNumber: 185,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "var(--muted)",
                            fontSize: "1.1rem",
                            maxWidth: "600px",
                            margin: "0 auto"
                        },
                        children: "Upload your assignments or notes, select print settings, and we'll deliver the printed copies directly to your room!"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/print/page.tsx",
                        lineNumber: 186,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/print/page.tsx",
                lineNumber: 184,
                columnNumber: 13
            }, this),
            message.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "16px",
                    borderRadius: "8px",
                    marginBottom: "32px",
                    background: message.type === "error" ? "rgba(255,0,0,0.1)" : "rgba(0,255,100,0.1)",
                    color: message.type === "error" ? "#ff8080" : "#4ade80",
                    border: `1px solid ${message.type === "error" ? "rgba(255,0,0,0.3)" : "rgba(0,255,100,0.3)"}`
                },
                children: message.text
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/print/page.tsx",
                lineNumber: 192,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card",
                        style: {
                            padding: "32px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "1.2rem",
                                    marginBottom: "24px",
                                    borderBottom: "1px solid var(--border)",
                                    paddingBottom: "12px",
                                    color: "var(--primary)"
                                },
                                children: "1. Document Upload"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 201,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onDragOver: (e)=>e.preventDefault(),
                                onDrop: handleDrop,
                                style: {
                                    border: "2px dashed rgba(0,255,204,0.3)",
                                    borderRadius: "12px",
                                    padding: "40px 20px",
                                    textAlign: "center",
                                    background: "rgba(0,255,204,0.02)",
                                    cursor: "pointer",
                                    transition: "all 0.3s"
                                },
                                onClick: ()=>fileInputRef.current?.click(),
                                className: "hover-glow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "application/pdf",
                                        name: "pdfDocument",
                                        ref: fileInputRef,
                                        style: {
                                            display: "none"
                                        },
                                        onChange: handleFileChange
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "3rem",
                                            marginBottom: "16px"
                                        },
                                        children: "📄"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 25
                                    }, this),
                                    file ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    color: "#fff",
                                                    margin: "0 0 8px 0"
                                                },
                                                children: file.name
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "var(--primary)",
                                                    margin: 0,
                                                    fontSize: "0.9rem"
                                                },
                                                children: [
                                                    (file.size / 1024 / 1024).toFixed(2),
                                                    " MB • Ready to print"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    color: "#fff",
                                                    margin: "0 0 8px 0"
                                                },
                                                children: "Click to Upload or Drag & Drop"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 234,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "var(--muted)",
                                                    margin: 0,
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Maximum file size: 25MB (.pdf only)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 203,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/print/page.tsx",
                        lineNumber: 200,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card",
                        style: {
                            padding: "32px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "1.2rem",
                                    marginBottom: "24px",
                                    borderBottom: "1px solid var(--border)",
                                    paddingBottom: "12px",
                                    color: "var(--primary)"
                                },
                                children: "2. Print Configuration"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 243,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                    gap: "24px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Total Pages in Document"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "number",
                                                min: "1",
                                                className: "input-field",
                                                value: pages,
                                                onChange: (e)=>setPages(parseInt(e.target.value) || 1)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Number of Copies"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "number",
                                                min: "1",
                                                className: "input-field",
                                                value: copies,
                                                onChange: (e)=>setCopies(parseInt(e.target.value) || 1)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Color Mode"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "input-field",
                                                value: colorMode,
                                                onChange: (e)=>setColorMode(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "B&W",
                                                        style: {
                                                            color: "#000"
                                                        },
                                                        children: "Black & White (₹1.50/page)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Color",
                                                        style: {
                                                            color: "#000"
                                                        },
                                                        children: "Color (₹10.00/page)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 270,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 245,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/print/page.tsx",
                        lineNumber: 242,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card",
                        style: {
                            padding: "32px",
                            border: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "1.2rem",
                                    marginBottom: "24px",
                                    borderBottom: "1px solid var(--border)",
                                    paddingBottom: "12px",
                                    color: "var(--primary)"
                                },
                                children: "3. Delivery Destination"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 284,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "16px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "16px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    cursor: "pointer",
                                                    color: "#fff"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        name: "accType",
                                                        value: "Hostel",
                                                        checked: accommodationType === "Hostel",
                                                        onChange: ()=>setAccommodationType("Hostel"),
                                                        style: {
                                                            accentColor: "var(--primary)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 33
                                                    }, this),
                                                    "Hostel"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 288,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    cursor: "pointer",
                                                    color: "#fff"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        name: "accType",
                                                        value: "PG",
                                                        checked: accommodationType === "PG",
                                                        onChange: ()=>setAccommodationType("PG"),
                                                        style: {
                                                            accentColor: "var(--primary)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 33
                                                    }, this),
                                                    "PG"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 25
                                    }, this),
                                    accommodationType === "Hostel" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem",
                                                    marginBottom: "4px"
                                                },
                                                children: "Enter your College Name *"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: collegeName,
                                                onChange: (e)=>setCollegeName(e.target.value),
                                                placeholder: "e.g. CUSAT or Rajagiri",
                                                style: {
                                                    width: "100%",
                                                    padding: "12px 16px",
                                                    borderRadius: "8px",
                                                    background: "var(--background)",
                                                    border: "1px solid var(--border)",
                                                    color: "#fff",
                                                    outline: "none"
                                                },
                                                required: accommodationType === "Hostel"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "16px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            display: "block",
                                                            color: "var(--muted)",
                                                            fontSize: "0.9rem",
                                                            marginBottom: "4px"
                                                        },
                                                        children: "Room / Flat No. *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: roomNo,
                                                        onChange: (e)=>setRoomNo(e.target.value),
                                                        placeholder: "e.g. 402 or B-12",
                                                        required: true,
                                                        style: {
                                                            width: "100%",
                                                            padding: "12px 16px",
                                                            borderRadius: "8px",
                                                            background: "var(--background)",
                                                            border: "1px solid var(--border)",
                                                            color: "#fff",
                                                            outline: "none"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 313,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            display: "block",
                                                            color: "var(--muted)",
                                                            fontSize: "0.9rem",
                                                            marginBottom: "4px"
                                                        },
                                                        children: "Pincode *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: pincode,
                                                        onChange: (e)=>setPincode(e.target.value),
                                                        placeholder: "e.g. 682022",
                                                        required: true,
                                                        style: {
                                                            width: "100%",
                                                            padding: "12px 16px",
                                                            borderRadius: "8px",
                                                            background: "var(--background)",
                                                            border: "1px solid var(--border)",
                                                            color: "#fff",
                                                            outline: "none"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem",
                                                    marginBottom: "4px"
                                                },
                                                children: "Hostel Block / Address Details *"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: addressDetails,
                                                onChange: (e)=>setAddressDetails(e.target.value),
                                                placeholder: accommodationType === "Hostel" ? "e.g. Sahara Hostel, Block A" : "e.g. Green Valley PG, InfoPark Road",
                                                required: true,
                                                style: {
                                                    width: "100%",
                                                    padding: "12px 16px",
                                                    borderRadius: "8px",
                                                    background: "var(--background)",
                                                    border: "1px solid var(--border)",
                                                    color: "#fff",
                                                    outline: "none"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem",
                                                    marginBottom: "4px"
                                                },
                                                children: "Additional Phone Number (Optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                value: additionalPhone,
                                                onChange: (e)=>setAdditionalPhone(e.target.value),
                                                placeholder: "e.g. +91 9876543210",
                                                style: {
                                                    width: "100%",
                                                    padding: "12px 16px",
                                                    borderRadius: "8px",
                                                    background: "var(--background)",
                                                    border: "1px solid var(--border)",
                                                    color: "#fff",
                                                    outline: "none"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 330,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 286,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/print/page.tsx",
                        lineNumber: 283,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "32px",
                            borderTop: "1px solid var(--border)",
                            marginTop: "16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "1.2rem",
                                    marginBottom: "24px",
                                    color: "var(--primary)"
                                },
                                children: "4. Payment Method"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 337,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card",
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    overflow: "hidden",
                                    border: "1px solid var(--border)",
                                    borderRadius: "12px",
                                    padding: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            padding: "20px 24px",
                                            display: "flex",
                                            flexDirection: "column",
                                            cursor: "pointer",
                                            borderBottom: "1px solid var(--border)",
                                            background: paymentMethod === 'COD' ? 'rgba(255,255,255,0.05)' : 'transparent',
                                            transition: "all 0.2s ease"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "16px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "paymentMethod",
                                                    value: "COD",
                                                    checked: paymentMethod === 'COD',
                                                    onChange: ()=>setPaymentMethod('COD'),
                                                    style: {
                                                        accentColor: "var(--primary)",
                                                        transform: "scale(1.2)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/print/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            style: {
                                                                margin: 0,
                                                                fontSize: "1.05rem",
                                                                fontWeight: paymentMethod === 'COD' ? 'bold' : 'normal',
                                                                color: paymentMethod === 'COD' ? 'var(--primary)' : '#fff'
                                                            },
                                                            children: "Cash on Delivery"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/print/page.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: "4px 0 0 0",
                                                                fontSize: "0.85rem",
                                                                color: "var(--muted)"
                                                            },
                                                            children: "Pay when your document is delivered."
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/print/page.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/print/page.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/print/page.tsx",
                                            lineNumber: 341,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            padding: "20px 24px",
                                            display: "flex",
                                            flexDirection: "column",
                                            cursor: "pointer",
                                            borderBottom: "1px solid var(--border)",
                                            background: paymentMethod === 'UPI' ? 'rgba(255,255,255,0.05)' : 'transparent',
                                            transition: "all 0.2s ease"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "16px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        name: "paymentMethod",
                                                        value: "UPI",
                                                        checked: paymentMethod === 'UPI',
                                                        onChange: ()=>setPaymentMethod('UPI'),
                                                        style: {
                                                            accentColor: "var(--primary)",
                                                            transform: "scale(1.2)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                style: {
                                                                    margin: 0,
                                                                    fontSize: "1.05rem",
                                                                    fontWeight: paymentMethod === 'UPI' ? 'bold' : 'normal',
                                                                    color: paymentMethod === 'UPI' ? 'var(--primary)' : '#fff'
                                                                },
                                                                children: "UPI Payment"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    margin: "4px 0 0 0",
                                                                    fontSize: "0.85rem",
                                                                    color: "var(--muted)"
                                                                },
                                                                children: "Google Pay, PhonePe, Paytm, and more."
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 352,
                                                columnNumber: 29
                                            }, this),
                                            paymentMethod === 'UPI' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingLeft: "36px",
                                                    marginTop: "20px",
                                                    animation: "fadeIn 0.3s ease",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "16px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: "0.95rem",
                                                            color: "#e0e0e0",
                                                            margin: "0",
                                                            fontWeight: "bold"
                                                        },
                                                        children: "1. Select your UPI App:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            gap: "12px",
                                                            flexWrap: "wrap",
                                                            marginBottom: "8px"
                                                        },
                                                        children: [
                                                            'Google Pay',
                                                            'PhonePe',
                                                            'Paytm',
                                                            'Other App'
                                                        ].map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    setSelectedUpiApp(app);
                                                                },
                                                                style: {
                                                                    padding: "10px 16px",
                                                                    background: selectedUpiApp === app ? "var(--primary)" : "rgba(255,255,255,0.05)",
                                                                    borderRadius: "8px",
                                                                    color: selectedUpiApp === app ? "#000" : "white",
                                                                    border: `1px solid ${selectedUpiApp === app ? "var(--primary)" : "rgba(255,255,255,0.2)"}`,
                                                                    cursor: "pointer",
                                                                    fontWeight: selectedUpiApp === app ? "bold" : "normal",
                                                                    transition: "all 0.2s"
                                                                },
                                                                children: app
                                                            }, app, false, {
                                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 45
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 37
                                                    }, this),
                                                    selectedUpiApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            gap: "24px",
                                                            alignItems: "flex-start",
                                                            flexWrap: "wrap",
                                                            marginTop: "8px",
                                                            padding: "20px",
                                                            background: "rgba(0,0,0,0.2)",
                                                            borderRadius: "12px",
                                                            border: "1px dashed rgba(255,255,255,0.2)",
                                                            animation: "fadeIn 0.3s ease"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    flex: "1 1 150px",
                                                                    maxWidth: "180px",
                                                                    background: "white",
                                                                    padding: "12px",
                                                                    borderRadius: "12px",
                                                                    border: "2px solid var(--primary)"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: `/images/upi-qr.png?v=${qrVersion}`,
                                                                    alt: "UPI QR Code",
                                                                    style: {
                                                                        width: "100%",
                                                                        height: "auto",
                                                                        display: "block"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                    lineNumber: 387,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                lineNumber: 386,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    flex: "2 1 200px",
                                                                    display: "flex",
                                                                    flexDirection: "column"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        style: {
                                                                            fontSize: "0.95rem",
                                                                            color: "#e0e0e0",
                                                                            margin: "0 0 16px 0",
                                                                            fontWeight: "bold"
                                                                        },
                                                                        children: [
                                                                            "2. Scan QR Code using ",
                                                                            selectedUpiApp
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                        lineNumber: 390,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "upi://pay?pa=campuscart@upi&pn=CampusCart&cu=INR",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        style: {
                                                                            alignSelf: "flex-start",
                                                                            padding: "10px 20px",
                                                                            background: "rgba(255,255,255,0.1)",
                                                                            borderRadius: "8px",
                                                                            color: "white",
                                                                            textDecoration: "none",
                                                                            fontSize: "0.9rem",
                                                                            border: "1px solid rgba(255,255,255,0.2)",
                                                                            marginBottom: "24px",
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            gap: "8px"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "Open ",
                                                                                selectedUpiApp,
                                                                                " Directly"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                            lineNumber: 393,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                        lineNumber: 392,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        style: {
                                                                            fontSize: "0.95rem",
                                                                            color: "#e0e0e0",
                                                                            margin: "0 0 8px 0",
                                                                            fontWeight: "bold"
                                                                        },
                                                                        children: "3. Enter the 12-digit UTR Transaction ID:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                        lineNumber: 396,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        placeholder: "e.g. 312345678901",
                                                                        value: transactionId,
                                                                        onChange: (e)=>setTransactionId(e.target.value),
                                                                        style: {
                                                                            width: "100%",
                                                                            padding: "12px 16px",
                                                                            borderRadius: "8px",
                                                                            background: "rgba(0,0,0,0.3)",
                                                                            border: "1px solid var(--border)",
                                                                            color: "#fff",
                                                                            outline: "none",
                                                                            fontFamily: "monospace",
                                                                            letterSpacing: "1px"
                                                                        },
                                                                        required: paymentMethod === 'UPI'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                        lineNumber: 397,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 360,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 351,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            padding: "20px 24px",
                                            display: "flex",
                                            flexDirection: "column",
                                            cursor: "pointer",
                                            background: paymentMethod === 'CARD' ? 'rgba(255,255,255,0.05)' : 'transparent',
                                            transition: "all 0.2s ease"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "16px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        name: "paymentMethod",
                                                        value: "CARD",
                                                        checked: paymentMethod === 'CARD',
                                                        onChange: ()=>setPaymentMethod('CARD'),
                                                        style: {
                                                            accentColor: "var(--primary)",
                                                            transform: "scale(1.2)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                style: {
                                                                    margin: 0,
                                                                    fontSize: "1.05rem",
                                                                    fontWeight: paymentMethod === 'CARD' ? 'bold' : 'normal',
                                                                    color: paymentMethod === 'CARD' ? 'var(--primary)' : '#fff'
                                                                },
                                                                children: "Credit / Debit Card"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    margin: "4px 0 0 0",
                                                                    fontSize: "0.85rem",
                                                                    color: "var(--muted)"
                                                                },
                                                                children: "Securely pay with Visa, Mastercard, or RuPay."
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 414,
                                                columnNumber: 29
                                            }, this),
                                            paymentMethod === 'CARD' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    paddingLeft: "36px",
                                                    marginTop: "20px",
                                                    animation: "fadeIn 0.3s ease"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "16px",
                                                        maxWidth: "400px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Cardholder Name",
                                                            required: paymentMethod === 'CARD',
                                                            value: cardDetails.name,
                                                            onChange: (e)=>setCardDetails({
                                                                    ...cardDetails,
                                                                    name: e.target.value
                                                                }),
                                                            style: {
                                                                padding: "12px 16px",
                                                                borderRadius: "8px",
                                                                background: "rgba(0,0,0,0.3)",
                                                                border: "1px solid var(--border)",
                                                                color: "#fff",
                                                                outline: "none"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/print/page.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Card Number (0000 0000 0000 0000)",
                                                            maxLength: 19,
                                                            required: paymentMethod === 'CARD',
                                                            value: cardDetails.number,
                                                            onChange: (e)=>setCardDetails({
                                                                    ...cardDetails,
                                                                    number: e.target.value
                                                                }),
                                                            style: {
                                                                padding: "12px 16px",
                                                                borderRadius: "8px",
                                                                background: "rgba(0,0,0,0.3)",
                                                                border: "1px solid var(--border)",
                                                                color: "#fff",
                                                                outline: "none",
                                                                fontFamily: "monospace"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/print/page.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                gap: "16px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "MM/YY",
                                                                    maxLength: 5,
                                                                    required: paymentMethod === 'CARD',
                                                                    value: cardDetails.expiry,
                                                                    onChange: (e)=>setCardDetails({
                                                                            ...cardDetails,
                                                                            expiry: e.target.value
                                                                        }),
                                                                    style: {
                                                                        flex: 1,
                                                                        padding: "12px 16px",
                                                                        borderRadius: "8px",
                                                                        background: "rgba(0,0,0,0.3)",
                                                                        border: "1px solid var(--border)",
                                                                        color: "#fff",
                                                                        outline: "none",
                                                                        fontFamily: "monospace"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "password",
                                                                    placeholder: "CVV",
                                                                    maxLength: 4,
                                                                    required: paymentMethod === 'CARD',
                                                                    value: cardDetails.cvv,
                                                                    onChange: (e)=>setCardDetails({
                                                                            ...cardDetails,
                                                                            cvv: e.target.value
                                                                        }),
                                                                    style: {
                                                                        flex: 1,
                                                                        padding: "12px 16px",
                                                                        borderRadius: "8px",
                                                                        background: "rgba(0,0,0,0.3)",
                                                                        border: "1px solid var(--border)",
                                                                        color: "#fff",
                                                                        outline: "none",
                                                                        fontFamily: "monospace"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/print/page.tsx",
                                                                    lineNumber: 428,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/print/page.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/print/page.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                                lineNumber: 422,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 413,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 338,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/print/page.tsx",
                        lineNumber: 336,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card",
                        style: {
                            padding: "32px",
                            border: "1px solid rgba(0,255,204,0.3)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "1.5rem",
                                    marginBottom: "24px",
                                    color: "#fff"
                                },
                                children: "Order Summary"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 439,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "12px",
                                    color: "var(--muted)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Rate (",
                                            colorMode,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 442,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "₹",
                                            pricePerPage.toFixed(2),
                                            " per page"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 441,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "12px",
                                    color: "var(--muted)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Math Breakdown"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 446,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            pages,
                                            " pages × ",
                                            copies,
                                            " copies × ₹",
                                            pricePerPage.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 445,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: "24px",
                                    paddingTop: "24px",
                                    borderTop: "1px solid rgba(255,255,255,0.1)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "1.2rem",
                                            color: "#fff"
                                        },
                                        children: "Total Price"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "2rem",
                                            color: "var(--primary)",
                                            fontWeight: "bold"
                                        },
                                        children: [
                                            "₹",
                                            totalPrice.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/print/page.tsx",
                                        lineNumber: 452,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 450,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    textAlign: "right",
                                    color: "var(--muted)",
                                    fontSize: "0.9rem",
                                    marginTop: "8px"
                                },
                                children: [
                                    "Payment via: ",
                                    paymentMethod === "COD" ? "Cash on Delivery" : paymentMethod === "UPI" ? "UPI Payment" : "Credit/Debit Card"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 455,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn btn-primary",
                                style: {
                                    width: "100%",
                                    marginTop: "32px",
                                    padding: "16px",
                                    fontSize: "1.1rem"
                                },
                                disabled: submitting,
                                children: submitting ? "Processing Document..." : "Place Print Order"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/print/page.tsx",
                                lineNumber: 459,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/print/page.tsx",
                        lineNumber: 438,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/print/page.tsx",
                lineNumber: 197,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/print/page.tsx",
        lineNumber: 182,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=frontend_src_app_print_page_tsx_80b4854e._.js.map