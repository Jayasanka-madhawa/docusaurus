**nervoscan-js-sdk v1.0.5**

***

![nervotec.png](_media/nervotec.png)

# NervoScan JS SDK

[![npm version](https://img.shields.io/npm/v/nervoscan-js-sdk)](https://www.npmjs.com/package/nervoscan-js-sdk)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)

## Overview

The **NervoScan JS SDK** is a comprehensive JavaScript/TypeScript library that enables seamless integration with the NervoScan contactless health analysis platform. This SDK provides real-time video streaming capabilities, live health metric results, and robust error handling for building sophisticated health monitoring applications.

### Key Features

- 🎥 **Real-time Video Streaming** - Stream video directly from webcam using WebRTC
- 📊 **Live Results** - Receive health metrics in real-time via Firebase
- 🔄 **Dual Processing Modes** - Support for both batch video upload and live streaming
- 🏗️ **Multiple Backend Types** - Server and serverless deployment options
- 🛡️ **Type-Safe** - Full TypeScript support with comprehensive type definitions
- 🎯 **Smart Error Handling** - Detailed error classes for face positioning and scan quality
- ⚡ **Framework Agnostic** - Works with React, Vue, Angular, or vanilla JS
- 📦 **Multiple Module Formats** - ESM, CommonJS, and UMD builds included

---

## Installation

```bash
npm install nervoscan-js-sdk
```

Or with yarn:
```bash
yarn add nervoscan-js-sdk
```

---

## Quick Start

### Basic Video Upload

```typescript
import { Client } from 'nervoscan-js-sdk';

const client = Client.getInstance();

// Initialize with credentials
await client.initialize('username', 'password');

// Upload a video file
const videoBlob = new Blob([videoData], { type: 'video/mp4' });
const jobId = await client.uploadVideo(videoBlob);

console.log('Video uploaded! Job ID:', jobId);
```

### Real-time Streaming with Live Results

```typescript
import { Client } from 'nervoscan-js-sdk';

const client = Client.getInstance();

async function startHealthMonitoring() {
  // Initialize client
  await client.initialize('username', 'password');
  
  // Set up result callbacks
  client.setOnWindowResults((results) => {
    console.log('New window results:', results);
    // Update UI with real-time metrics
  });
  
  client.setOnFinalResults((results) => {
    console.log('Final averaged results:', results);
    // Display final health report
  });
  
  client.setOnError((error) => {
    console.error('Scan error:', error);
    // Handle scanning errors
  });
  
  // Get webcam stream
  const stream = await navigator.mediaDevices.getUserMedia({ 
    video: { width: 1280, height: 720 } 
  });
  
  // Initialize streaming
  const videoElement = document.getElementById('video') as HTMLVideoElement;
  client.initializeStreaming(stream, videoElement);
  
  // Start streaming
  const jobId = await client.startStreaming();
  console.log('Streaming started! Job ID:', jobId);
}
```

---

## API Reference

### Client Class

The `Client` class follows a singleton pattern to ensure consistent state management across your application.

#### Getting the Instance

```typescript
const client = Client.getInstance();
```

#### Core Methods

##### `initialize(username: string, password: string, serverType?: string): void`
Initializes the client with authentication credentials.

- `username` - Your NervoScan account username
- `password` - Your NervoScan account password  
- `serverType` - Backend type: `'server'` (default) or `'serverless'`

##### `uploadVideo(videoBlob: Blob): Promise<string>`
Uploads a video for processing and returns the job ID.

- `videoBlob` - Video file as a Blob object
- Returns: Promise resolving to the job ID string

##### `initializeStreaming(videoStream: MediaStream, videoElement: HTMLVideoElement): void`
Sets up real-time video streaming.

- `videoStream` - MediaStream from getUserMedia
- `videoElement` - HTML video element for preview

##### `startStreaming(): Promise<string>`
Begins streaming video to the server for real-time analysis.

- Returns: Promise resolving to the job ID string

##### `stopStreaming(): void`
Stops the active streaming session.

#### Callback Methods

##### `setOnWindowResults(callback: (results: any) => void): void`
Sets callback for receiving real-time window-based results.

##### `setOnFinalResults(callback: (results: any) => void): void`
Sets callback for receiving final averaged results.

##### `setOnError(callback: (error: any) => void): void`
Sets callback for handling scan errors.

##### `setOnDisconnection(callback: () => void): void`
Sets callback for handling connection loss.

#### Deprecated Methods

⚠️ The following methods are deprecated and will be removed in future versions:

- `checkResults(jobID: string)` - Use callback methods instead
- `getResults(jobID: string)` - Use callback methods instead

---

## Error Handling

The SDK provides comprehensive error classes for granular error control:

### Authentication Errors
```typescript
try {
  await client.initialize('username', 'password');
} catch (error) {
  if (error instanceof Errors.InvalidUsernameError) {
    console.error('Invalid username');
  } else if (error instanceof Errors.InvalidPasswordError) {
    console.error('Invalid password');
  }
}
```

### Scan Quality Errors
```typescript
client.setOnError((error) => {
  if (error instanceof Errors.FaceTooFarError) {
    showMessage('Please move closer to the camera');
  } else if (error instanceof Errors.FaceTooCloseError) {
    showMessage('Please move further from the camera');
  } else if (error instanceof Errors.FaceNotCenteredError) {
    showMessage('Please center your face in the frame');
  } else if (error instanceof Errors.LowFPSError) {
    showMessage('Poor video quality - check your lighting');
  }
});
```

### Complete Error Reference

| Error Class | Description |
|-------------|-------------|
| `NotInitializedError` | Client not initialized |
| `EmptyVideoError` | Video blob is empty |
| `VideoTypeError` | Invalid video type |
| `InvalidUsernameError` | Invalid username |
| `InvalidPasswordError` | Invalid password |
| `InvalidAccessTokenError` | Invalid or expired token |
| `NoScansAvailableError` | No scans left in plan |
| `NoScanDataError` | No data for job ID |
| `InvalidServerTypeError` | Invalid server type |
| `LowFPSError` | Video FPS too low |
| `FaceNotCenteredError` | Face not centered |
| `FaceTooFarError` | Face too far away |
| `FaceTooCloseError` | Face too close |
| `FaceLookingLeftError` | Face turned left |
| `FaceLookingRightError` | Face turned right |
| `UnhandledScanError` | Other scan errors |

---

## Real-World Examples

### React Component with Live Monitoring

```typescript
import React, { useEffect, useRef, useState } from 'react';
import { Client, Errors } from 'nervoscan-js-sdk';

function HealthMonitor() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [heartRate, setHeartRate] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  
  const client = Client.getInstance();
  
  useEffect(() => {
    // Setup callbacks
    client.setOnWindowResults((results) => {
      setHeartRate(results.heartRate);
    });
    
    client.setOnError((error) => {
      if (error instanceof Errors.FaceNotCenteredError) {
        setMessage('Center your face in the frame');
      }
    });
    
    return () => {
      client.stopStreaming();
    };
  }, []);
  
  const startScan = async () => {
    try {
      await client.initialize('user@example.com', 'password');
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' } 
      });
      
      if (videoRef.current) {
        client.initializeStreaming(stream, videoRef.current);
        await client.startStreaming();
        setIsScanning(true);
      }
    } catch (error) {
      console.error('Failed to start scan:', error);
    }
  };
  
  return (
    <div>
      <video ref={videoRef} autoPlay playsInline />
      {heartRate && <p>Heart Rate: {heartRate} BPM</p>}
      <p>{message}</p>
      <button onClick={startScan} disabled={isScanning}>
        {isScanning ? 'Scanning...' : 'Start Scan'}
      </button>
    </div>
  );
}
```

### Vue 3 Composition API Example

```typescript
<template>
  <div>
    <video ref="videoEl" autoplay playsinline></video>
    <div v-if="metrics">
      <p>Heart Rate: {{ metrics.heartRate }} BPM</p>
      <p>Stress Level: {{ metrics.stressLevel }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Client } from 'nervoscan-js-sdk';

const videoEl = ref<HTMLVideoElement>();
const metrics = ref(null);

const client = Client.getInstance();

onMounted(async () => {
  await client.initialize(import.meta.env.VITE_NERVO_USER, 
                         import.meta.env.VITE_NERVO_PASS);
  
  client.setOnFinalResults((results) => {
    metrics.value = results;
  });
  
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  if (videoEl.value) {
    client.initializeStreaming(stream, videoEl.value);
    await client.startStreaming();
  }
});

onUnmounted(() => {
  client.stopStreaming();
});
</script>
```

---

## Requirements

- **Node.js**: v14 or higher
- **Browser Support**: Chrome 80+, Safari 14+, Firefox 78+, Edge 80+
- **Network**: Stable internet connection for streaming
- **Camera**: HD webcam (720p or higher recommended)
- **NervoScan Account**: Valid credentials with active subscription

---

## TypeScript Support

The SDK is written in TypeScript and includes comprehensive type definitions:

```typescript
import { Client, Errors, NervoscanError } from 'nervoscan-js-sdk';

// All methods are fully typed
const client: Client = Client.getInstance();

// Error types are available
function handleError(error: unknown) {
  if (error instanceof NervoscanError) {
    // Handle NervoScan specific errors
  }
}
```

---

Built and maintained by the NervoScan team
