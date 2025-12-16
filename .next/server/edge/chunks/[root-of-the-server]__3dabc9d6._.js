(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__3dabc9d6._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/ [middleware-edge] (unsupported edge import 'crypto', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`crypto`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'stream', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`stream`));
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[project]/ [middleware-edge] (unsupported edge import 'process', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`process`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'net', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`net`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'tls', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`tls`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'timers', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`timers`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'string_decoder', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`string_decoder`));
}),
"[project]/ [middleware-edge] (unsupported edge import 'zlib', ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.n(__import_unsupported(`zlib`));
}),
"[project]/Downloads/bissbay-new-main/bissbay-new-main/src/lib/db.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeConnection",
    ()=>closeConnection,
    "createConnection",
    ()=>createConnection,
    "query",
    ()=>query
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$mysql2$2f$promise$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/mysql2/promise.js [middleware-edge] (ecmascript)");
;
let pool;
// Create connection pool for better performance
const getPool = ()=>{
    if (!pool) {
        pool = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$mysql2$2f$promise$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].createPool({
            host: process.env.DATABASE_HOST || 'srv689.hstgr.io',
            user: process.env.DATABASE_USER || 'u541369012_admin',
            password: process.env.DATABASE_PASSWORD || 'x~!*U^7Z&R7&OkAB1f*R9',
            database: process.env.DATABASE_NAME || 'u541369012_bissbay_2025',
            port: 3306,
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10,
            idleTimeout: 60000,
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0
        });
    }
    return pool;
};
const createConnection = async ()=>{
    try {
        const pool = getPool();
        return await pool.getConnection();
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
};
const query = async (sql, params)=>{
    try {
        const pool = getPool();
        return await pool.execute(sql, params);
    } catch (error) {
        console.error('Database query failed:', error);
        throw error;
    }
};
const closeConnection = async ()=>{
    if (pool) {
        await pool.end();
        pool = null;
    }
};
}),
"[project]/Downloads/bissbay-new-main/bissbay-new-main/lib/auth-simple.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PASSWORD_POLICY",
    ()=>PASSWORD_POLICY,
    "authenticateUser",
    ()=>authenticateUser,
    "createUser",
    ()=>createUser,
    "generateJWT",
    ()=>generateJWT,
    "generateSecureToken",
    ()=>generateSecureToken,
    "hashPassword",
    ()=>hashPassword,
    "logoutUser",
    ()=>logoutUser,
    "validatePassword",
    ()=>validatePassword,
    "validateSession",
    ()=>validateSession,
    "verifyJWT",
    ()=>verifyJWT,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/bcryptjs/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/jsonwebtoken/index.js [middleware-edge] (ecmascript)");
// Using Web Crypto API for Edge Runtime compatibility
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$lib$2f$db$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/src/lib/db.js [middleware-edge] (ecmascript)");
;
;
;
const PASSWORD_POLICY = {
    minLength: 12,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
    specialChars: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};
function validatePassword(password) {
    const errors = [];
    if (password.length < PASSWORD_POLICY.minLength) {
        errors.push(`Password must be at least ${PASSWORD_POLICY.minLength} characters long`);
    }
    if (PASSWORD_POLICY.requireUppercase && !/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
    }
    if (PASSWORD_POLICY.requireLowercase && !/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
    }
    if (PASSWORD_POLICY.requireNumbers && !/\d/.test(password)) {
        errors.push('Password must contain at least one number');
    }
    if (PASSWORD_POLICY.requireSpecialChars) {
        const specialCharsRegex = new RegExp(`[${PASSWORD_POLICY.specialChars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`);
        if (!specialCharsRegex.test(password)) {
            errors.push('Password must contain at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)');
        }
    }
    return {
        isValid: errors.length === 0,
        errors
    };
}
async function hashPassword(password) {
    const saltRounds = 12;
    const salt = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].genSalt(saltRounds);
    const hash = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].hash(password, salt);
    return {
        hash,
        salt
    };
}
async function verifyPassword(password, hash, salt) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].compare(password, hash);
    } catch (error) {
        console.error('Password verification error:', error);
        return false;
    }
}
function generateJWT(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '45m',
        issuer: 'bissbay-admin',
        audience: 'bissbay-admin-panel'
    });
}
function verifyJWT(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].verify(token, process.env.JWT_SECRET, {
            issuer: 'bissbay-admin',
            audience: 'bissbay-admin-panel'
        });
    } catch (error) {
        console.error('JWT verification error:', error);
        return null;
    }
}
function generateSecureToken() {
    const array = new Uint8Array(64);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        __turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'crypto', ecmascript)").randomFillSync(array);
    }
    return Array.from(array, (byte)=>byte.toString(16).padStart(2, '0')).join('');
}
async function createUser(username, password) {
    const connection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$lib$2f$db$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createConnection"])();
    try {
        // Validate input
        if (!username || !password) {
            throw new Error('Username and password are required');
        }
        if (username.length < 3 || username.length > 50) {
            throw new Error('Username must be between 3 and 50 characters');
        }
        // Validate username format (alphanumeric + underscore only)
        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            throw new Error('Username can only contain letters, numbers, and underscores');
        }
        // Validate password
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            throw new Error(`Password validation failed: ${passwordValidation.errors.join(', ')}`);
        }
        // Check if user already exists
        const [existingUser] = await connection.execute('SELECT id FROM admin_users WHERE username = ?', [
            username
        ]);
        if (existingUser.length > 0) {
            throw new Error('Username already exists');
        }
        // Hash password
        const { hash, salt } = await hashPassword(password);
        // Create user
        const [result] = await connection.execute(`INSERT INTO admin_users (username, password_hash, salt, password_changed_at) 
       VALUES (?, ?, ?, NOW())`, [
            username,
            hash,
            salt
        ]);
        return {
            id: result.insertId,
            username,
            created: true
        };
    } finally{
        connection.release();
    }
}
async function authenticateUser(username, password, ipAddress, userAgent) {
    const connection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$lib$2f$db$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createConnection"])();
    try {
        const now = new Date();
        console.log('Auth attempt - IP:', ipAddress, 'UserAgent:', userAgent);
        // Get user with lock check
        const [users] = await connection.execute(`SELECT id, username, password_hash, salt, failed_attempts, locked_until, is_active
       FROM admin_users 
       WHERE username = ? AND is_active = TRUE`, [
            username
        ]);
        if (users.length === 0) {
            // Log failed attempt
            await logLoginAttempt(connection, username, ipAddress, false, 'User not found', userAgent);
            throw new Error('Invalid credentials');
        }
        const user = users[0];
        // Check if account is locked
        if (user.locked_until && new Date(user.locked_until) > now) {
            await logLoginAttempt(connection, username, ipAddress, false, 'Account locked', userAgent);
            const lockTimeRemaining = Math.ceil((new Date(user.locked_until) - now) / (1000 * 60));
            throw new Error(`Account is locked. Try again in ${lockTimeRemaining} minutes.`);
        }
        // Verify password
        const isValidPassword = await verifyPassword(password, user.password_hash, user.salt);
        if (!isValidPassword) {
            // Increment failed attempts
            const newFailedAttempts = user.failed_attempts + 1;
            const maxAttempts = parseInt(process.env.ADMIN_MAX_FAILED_ATTEMPTS) || 3;
            const lockoutDuration = parseInt(process.env.ADMIN_LOCKOUT_DURATION) || 3600; // 1 hour in seconds
            let lockUntil = null;
            if (newFailedAttempts >= maxAttempts) {
                lockUntil = new Date(now.getTime() + lockoutDuration * 1000);
            }
            await connection.execute('UPDATE admin_users SET failed_attempts = ?, locked_until = ? WHERE id = ?', [
                newFailedAttempts,
                lockUntil,
                user.id
            ]);
            await logLoginAttempt(connection, username, ipAddress, false, 'Invalid password', userAgent);
            if (lockUntil) {
                throw new Error('Too many failed attempts. Account has been locked for 1 hour.');
            } else {
                const remainingAttempts = maxAttempts - newFailedAttempts;
                throw new Error(`Invalid credentials. ${remainingAttempts} attempts remaining.`);
            }
        }
        // Successful login - reset failed attempts and update last login
        await connection.execute('UPDATE admin_users SET failed_attempts = 0, locked_until = NULL, last_login = NOW() WHERE id = ?', [
            user.id
        ]);
        // Log successful login
        await logLoginAttempt(connection, username, ipAddress, true, null, userAgent);
        // Create session
        const sessionToken = generateSecureToken();
        const expiresAt = new Date(now.getTime() + (parseInt(process.env.SESSION_MAX_AGE) || 2700) * 1000);
        await connection.execute(`INSERT INTO admin_sessions (user_id, session_token, expires_at, ip_address, user_agent)
       VALUES (?, ?, ?, ?, ?)`, [
            user.id,
            sessionToken,
            expiresAt,
            ipAddress,
            userAgent
        ]);
        // Generate JWT
        const jwtPayload = {
            userId: user.id,
            username: user.username,
            sessionToken
        };
        const token = generateJWT(jwtPayload);
        return {
            success: true,
            user: {
                id: user.id,
                username: user.username
            },
            token,
            sessionToken,
            expiresAt
        };
    } finally{
        connection.release();
    }
}
async function validateSession(sessionToken) {
    if (!sessionToken) return null;
    const connection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$lib$2f$db$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createConnection"])();
    try {
        const [sessions] = await connection.execute(`SELECT s.*, u.username, u.is_active as user_active
       FROM admin_sessions s
       JOIN admin_users u ON s.user_id = u.id
       WHERE s.session_token = ? AND s.expires_at > NOW() AND s.is_active = TRUE AND u.is_active = TRUE`, [
            sessionToken
        ]);
        if (sessions.length === 0) {
            return null;
        }
        const session = sessions[0];
        // Session is valid, no need to update anything since admin_sessions doesn't have updated_at
        // The session validation is sufficient
        return {
            userId: session.user_id,
            username: session.username,
            sessionId: session.id
        };
    } finally{
        connection.release();
    }
}
async function logoutUser(sessionToken) {
    if (!sessionToken) return;
    const connection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$src$2f$lib$2f$db$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createConnection"])();
    try {
        await connection.execute('UPDATE admin_sessions SET is_active = FALSE WHERE session_token = ?', [
            sessionToken
        ]);
    } finally{
        connection.release();
    }
}
async function logLoginAttempt(connection, username, ipAddress, success, failureReason, userAgent) {
    try {
        await connection.execute(`INSERT INTO admin_login_attempts (username, ip_address, success, failure_reason, user_agent)
       VALUES (?, ?, ?, ?, ?)`, [
            username,
            ipAddress,
            success,
            failureReason,
            userAgent
        ]);
    } catch (error) {
        console.error('Failed to log login attempt:', error);
    }
}
}),
"[project]/Downloads/bissbay-new-main/bissbay-new-main/middleware.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$lib$2f$auth$2d$simple$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/bissbay-new-main/bissbay-new-main/lib/auth-simple.js [middleware-edge] (ecmascript)");
;
;
async function middleware(request) {
    const { pathname } = request.nextUrl;
    // Security headers for all requests
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    // Set security headers
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    // Content Security Policy
    const csp = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https:",
        "connect-src 'self' https://www.google.com",
        "frame-src 'self' https://www.google.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'"
    ].join('; ');
    response.headers.set('Content-Security-Policy', csp);
    // Check if this is an admin route
    if (pathname.startsWith('/admin')) {
        // Allow login page and API routes to pass through - middleware shouldn't interfere with API routes
        if (pathname === '/admin' || pathname.startsWith('/api/admin/')) {
            return response;
        }
        // For all other admin routes, verify authentication
        try {
            const sessionToken = request.cookies.get('admin-session')?.value;
            if (!sessionToken) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/admin', request.url));
            }
            // Validate session
            const sessionData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$lib$2f$auth$2d$simple$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["validateSession"])(sessionToken);
            if (!sessionData) {
                // Clear invalid cookie and redirect
                const redirectResponse = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/admin', request.url));
                redirectResponse.cookies.set('admin-session', '', {
                    httpOnly: true,
                    secure: ("TURBOPACK compile-time value", "development") === 'production',
                    sameSite: 'strict',
                    maxAge: 0,
                    path: '/admin'
                });
                return redirectResponse;
            }
            // Add user info to request headers for use in components
            response.headers.set('X-Admin-User-Id', sessionData.userId.toString());
            response.headers.set('X-Admin-Username', sessionData.username);
        } catch (error) {
            console.error('Middleware session validation error:', error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$bissbay$2d$new$2d$main$2f$bissbay$2d$new$2d$main$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/admin', request.url));
        }
    }
    return response;
}
const config = {
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */ '/((?!_next/static|_next/image|favicon.ico|public/).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__3dabc9d6._.js.map