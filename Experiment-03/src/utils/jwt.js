export function generateToken(user) {
    const payload = {
      email: user.email,
      role: user.role,
      exp: Date.now() + 60 * 60 * 1000 // 1 hour expiry
    };
  
    return btoa(JSON.stringify(payload));
  }
  
  export function decodeToken(token) {
    return JSON.parse(atob(token));
  }