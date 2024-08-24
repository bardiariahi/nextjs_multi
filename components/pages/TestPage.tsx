'use client'
import { detectDeviceType } from '@/helpers/customUserAgent';
import React from 'react'
import { useEffect, useState } from "react";


const TestPage = () => {
    const [deviceType, setDeviceType] = useState('');
    useEffect(() => {
      // This runs only on the client side
      const ua = navigator.userAgent;
      const detectedDeviceType = detectDeviceType(ua);
      setDeviceType(detectedDeviceType);

    }, []);
  return (
    <div>{deviceType}</div>
  )
}

export default TestPage