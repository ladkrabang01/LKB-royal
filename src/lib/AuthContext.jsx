import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // สร้างสถานะจำลองว่าใช้งานได้ปกติ
  const [user, setUser] = useState({ name: 'Guest' });
  const [isAuthenticated, setIsAuthenticated] = useState(true); // ปรับเป็น true เพื่อให้เว็บแสดงผลได้
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [authChecked, setAuthChecked] = useState(true);
  const [appPublicSettings, setAppPublicSettings] = useState({ id: 'local' });

  const logout = () => { setUser(null); setIsAuthenticated(false); };
  const navigateToLogin = () => { console.log('Login navigated'); };
  const checkUserAuth = async () => { setIsLoadingAuth(false); };
  const checkAppState = async () => { setIsLoadingPublicSettings(false); };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      authChecked,
      logout,
      navigateToLogin,
      checkUserAuth,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
