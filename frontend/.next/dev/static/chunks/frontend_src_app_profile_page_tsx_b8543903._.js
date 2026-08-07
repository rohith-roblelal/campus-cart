(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/app/profile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/* eslint-disable @next/next/no-img-element */ "use client";
;
;
function ProfilePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        accommodationType: "",
        addressDetails: "",
        collegeName: "",
        course: "",
        year: "",
        avatar: ""
    });
    const [passwords, setPasswords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: "",
        text: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            fetch("/api/user/profile").then({
                "ProfilePage.useEffect": (res)=>{
                    if (!res.ok) throw new Error("Unauthorized");
                    return res.json();
                }
            }["ProfilePage.useEffect"]).then({
                "ProfilePage.useEffect": (data)=>{
                    // Handle nulls gracefully
                    setProfile({
                        name: data.name || "",
                        email: data.email || "",
                        phone: data.phone || "",
                        accommodationType: data.accommodationType || "",
                        addressDetails: data.addressDetails || "",
                        collegeName: data.collegeName || "",
                        course: data.course || "",
                        year: data.year || "",
                        avatar: data.avatar || ""
                    });
                    setLoading(false);
                }
            }["ProfilePage.useEffect"]).catch({
                "ProfilePage.useEffect": ()=>router.push("/login")
            }["ProfilePage.useEffect"]);
        }
    }["ProfilePage.useEffect"], [
        router
    ]);
    const handleProfileChange = (e)=>{
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    };
    const handlePasswordChange = (e)=>{
        setPasswords({
            ...passwords,
            [e.target.name]: e.target.value
        });
    };
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        // Ensure file is an image
        if (!file.type.startsWith('image/')) {
            setMessage({
                type: "error",
                text: "Please select a valid image file (JPG, PNG)."
            });
            return;
        }
        // 5MB Limit Check
        if (file.size > 5 * 1024 * 1024) {
            setMessage({
                type: "error",
                text: "Image is too large. Maximum size is 5MB."
            });
            return;
        }
        const reader = new FileReader();
        reader.onloadend = ()=>{
            setProfile({
                ...profile,
                avatar: reader.result
            });
        };
        reader.readAsDataURL(file);
    };
    const handleSave = async (e)=>{
        e.preventDefault();
        setSaving(true);
        setMessage({
            type: "",
            text: ""
        });
        // Client-side validations
        if (passwords.newPassword && passwords.newPassword !== passwords.confirmPassword) {
            setMessage({
                type: "error",
                text: "New passwords do not match"
            });
            setSaving(false);
            return;
        }
        if (passwords.newPassword && !passwords.currentPassword) {
            setMessage({
                type: "error",
                text: "Current password is required to set a new password"
            });
            setSaving(false);
            return;
        }
        try {
            const res = await fetch("/api/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...profile,
                    ...passwords.newPassword ? {
                        currentPassword: passwords.currentPassword,
                        newPassword: passwords.newPassword
                    } : {}
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setMessage({
                    type: "error",
                    text: data.error || "Failed to save profile"
                });
            } else {
                setMessage({
                    type: "success",
                    text: "Profile updated successfully!"
                });
                setPasswords({
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: ""
                }); // Clear security fields
            }
        } catch  {
            setMessage({
                type: "error",
                text: "Network error occurred"
            });
        } finally{
            setSaving(false);
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        style: {
            padding: "80px",
            textAlign: "center"
        },
        children: "Loading Profile..."
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/profile/page.tsx",
        lineNumber: 125,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container animate-fade-in",
        style: {
            padding: "40px 24px",
            maxWidth: "900px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                    marginBottom: "40px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            background: "linear-gradient(45deg, var(--primary), var(--secondary))",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "2.5rem",
                            color: "#000",
                            fontWeight: "bold",
                            overflow: "hidden",
                            border: "3px solid var(--border)"
                        },
                        children: profile.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: profile.avatar,
                            alt: "Profile Avatar",
                            style: {
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                            lineNumber: 133,
                            columnNumber: 25
                        }, this) : profile.name.charAt(0).toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                        lineNumber: 131,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-gradient",
                                style: {
                                    fontSize: "2.5rem",
                                    marginBottom: "8px",
                                    lineHeight: "1.2"
                                },
                                children: "My Profile"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 137,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    cursor: "pointer",
                                    display: "inline-block",
                                    background: "rgba(255,255,255,0.1)",
                                    padding: "8px 16px",
                                    borderRadius: "8px",
                                    fontSize: "0.9rem",
                                    color: "#fff",
                                    transition: "0.2s"
                                },
                                className: "hover-glow",
                                children: [
                                    "Update Photo",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/png, image/jpeg, image/jpg",
                                        style: {
                                            display: "none"
                                        },
                                        onChange: handleImageUpload
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/profile/page.tsx",
                lineNumber: 130,
                columnNumber: 13
            }, this),
            message.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                fileName: "[project]/frontend/src/app/profile/page.tsx",
                lineNumber: 146,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSave,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card",
                        style: {
                            padding: "32px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "1.2rem",
                                    marginBottom: "24px",
                                    borderBottom: "1px solid var(--border)",
                                    paddingBottom: "12px",
                                    color: "var(--primary)"
                                },
                                children: "Personal Information"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 155,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                    gap: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Full Name"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "text",
                                                name: "name",
                                                className: "input-field",
                                                value: profile.name,
                                                onChange: handleProfileChange
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Email Address"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "email",
                                                name: "email",
                                                className: "input-field",
                                                value: profile.email,
                                                disabled: true,
                                                style: {
                                                    opacity: 0.6,
                                                    cursor: "not-allowed"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Phone Number"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                name: "phone",
                                                className: "input-field",
                                                value: profile.phone,
                                                onChange: handleProfileChange,
                                                placeholder: "+91 xxxxxxxxxx"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 156,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                        lineNumber: 154,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card",
                        style: {
                            padding: "32px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "1.2rem",
                                    marginBottom: "24px",
                                    borderBottom: "1px solid var(--border)",
                                    paddingBottom: "12px",
                                    color: "var(--primary)"
                                },
                                children: "Delivery Address"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 174,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                    gap: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Accommodation Type"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "accommodationType",
                                                className: "input-field",
                                                value: profile.accommodationType,
                                                onChange: handleProfileChange,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        style: {
                                                            color: "#000"
                                                        },
                                                        children: "Select Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Hostel",
                                                        style: {
                                                            color: "#000"
                                                        },
                                                        children: "College Hostel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "PG",
                                                        style: {
                                                            color: "#000"
                                                        },
                                                        children: "Paying Guest (PG)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Apartment",
                                                        style: {
                                                            color: "#000"
                                                        },
                                                        children: "Private Apartment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            gridColumn: "1 / -1"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Room Number & Building/Block"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "addressDetails",
                                                className: "input-field",
                                                value: profile.addressDetails,
                                                onChange: handleProfileChange,
                                                placeholder: "e.g. Room 402, Block A, Men's Hostel"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 175,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                        lineNumber: 173,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card",
                        style: {
                            padding: "32px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "1.2rem",
                                    marginBottom: "24px",
                                    borderBottom: "1px solid var(--border)",
                                    paddingBottom: "12px",
                                    color: "var(--primary)"
                                },
                                children: "Student Information"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 194,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                    gap: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "College Name"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "collegeName",
                                                className: "input-field",
                                                value: profile.collegeName,
                                                onChange: handleProfileChange
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Course / Major"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "course",
                                                className: "input-field",
                                                value: profile.course,
                                                onChange: handleProfileChange,
                                                placeholder: "e.g. B.Tech Computer Science"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Current Year"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "year",
                                                className: "input-field",
                                                value: profile.year,
                                                onChange: handleProfileChange,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        style: {
                                                            color: "#000"
                                                        },
                                                        children: "Select Year"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "1st Year",
                                                        style: {
                                                            color: "#000"
                                                        },
                                                        children: "1st Year"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "2nd Year",
                                                        style: {
                                                            color: "#000"
                                                        },
                                                        children: "2nd Year"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "3rd Year",
                                                        style: {
                                                            color: "#000"
                                                        },
                                                        children: "3rd Year"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "4th Year",
                                                        style: {
                                                            color: "#000"
                                                        },
                                                        children: "4th Year"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Masters",
                                                        style: {
                                                            color: "#000"
                                                        },
                                                        children: "Masters / Postgrad"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 195,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                        lineNumber: 193,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card",
                        style: {
                            padding: "32px",
                            border: "1px solid rgba(255,255,255,0.1)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "1.2rem",
                                    marginBottom: "24px",
                                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                                    paddingBottom: "12px",
                                    color: "#ccc"
                                },
                                children: "Account Security"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 220,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "var(--muted)",
                                    fontSize: "0.85rem",
                                    marginBottom: "24px"
                                },
                                children: "Leave these fields empty if you do not wish to change your password."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 221,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                    gap: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Current Password"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                name: "currentPassword",
                                                className: "input-field",
                                                value: passwords.currentPassword,
                                                onChange: handlePasswordChange,
                                                placeholder: "••••••••"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "New Password"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                name: "newPassword",
                                                className: "input-field",
                                                value: passwords.newPassword,
                                                onChange: handlePasswordChange,
                                                placeholder: "••••••••"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    color: "var(--muted)",
                                                    fontSize: "0.9rem"
                                                },
                                                children: "Confirm New Password"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                name: "confirmPassword",
                                                className: "input-field",
                                                value: passwords.confirmPassword,
                                                onChange: handlePasswordChange,
                                                placeholder: "••••••••"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                        lineNumber: 219,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: "16px",
                            marginTop: "16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn btn-ghost",
                                onClick: ()=>router.push("/dashboard"),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 240,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn btn-primary",
                                disabled: saving,
                                children: saving ? "Saving Changes..." : "Save Profile"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 241,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                        lineNumber: 239,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/profile/page.tsx",
                lineNumber: 151,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/profile/page.tsx",
        lineNumber: 128,
        columnNumber: 9
    }, this);
}
_s(ProfilePage, "RDYJ9KDHmZHOMvZq32adk0IBJQM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProfilePage;
var _c;
__turbopack_context__.k.register(_c, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_app_profile_page_tsx_b8543903._.js.map