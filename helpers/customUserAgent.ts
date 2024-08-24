export const detectDeviceType = (userAgent:any) => {
    // Regex patterns to match mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    return isMobile ? 'Mobile' : 'Desktop';
  };