# Lanyard Component Setup Guide

## Overview
The Lanyard component is a 3D interactive physics-based component that displays a hanging ID card with realistic rope physics. Users can drag and interact with the card, and it responds with realistic physics simulation.

## Files Restored

### Components
- `src/components/Lanyard.tsx` - Main Lanyard component with 3D physics
- `src/components/LanyardExample.tsx` - Example usage component

### Assets Directory
- `src/assets/lanyard/` - Directory for required asset files
- `src/assets/lanyard/README.md` - Instructions for asset files
- `src/assets/lanyard/placeholder.txt` - Placeholder file

### Configuration Files
- `src/global.d.ts` - TypeScript declarations for meshline and assets
- `src/vite-env.d.ts` - Vite environment type declarations
- `vite.config.ts` - Vite configuration with GLB asset support

## Required Assets (Missing)

You need to add these files to `src/assets/lanyard/`:

1. **card.glb** - 3D model file for the ID card
2. **lanyard.png** - Texture image for the lanyard band

## Dependencies

The following dependencies are already installed in your project:
- `@react-three/fiber` - React Three.js renderer
- `@react-three/drei` - Three.js helpers
- `@react-three/rapier` - Physics engine
- `meshline` - Line geometry for the lanyard rope
- `three` - Three.js 3D library

## Usage

### Basic Usage
```tsx
import Lanyard from './components/Lanyard'

<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
```

### With Custom Parameters
```tsx
<Lanyard 
  position={[2, 0, 15]} 
  gravity={[0, -30, 0]} 
  fov={20}
  transparent={true}
/>
```

### Props
- `position?: [number, number, number]` - Camera position (default: [0, 0, 30])
- `gravity?: [number, number, number]` - Physics gravity (default: [0, -40, 0])
- `fov?: number` - Camera field of view (default: 20)
- `transparent?: boolean` - Canvas transparency (default: true)

## Current Integration

The Lanyard component is currently integrated into the HeroSection:
- Positioned in the top right corner
- Uses `position={[2, 0, 15]}` and `gravity={[0, -30, 0]}`
- Set to `pointer-events-none` to not interfere with other UI

## Features

- **Interactive 3D Physics** - Drag and drop the ID card
- **Realistic Rope Simulation** - Physics-based rope joints
- **Responsive Design** - Adapts to screen size
- **Smooth Animations** - 60fps physics simulation
- **Customizable Parameters** - Position, gravity, camera settings

## Asset Customization

### Editing the Card (card.glb)
1. Use the online GLB editor: https://modelviewer.dev/editor/
2. Upload your card.glb file
3. Modify textures, materials, or geometry
4. Download the updated file

### Editing the Lanyard Texture (lanyard.png)
1. Open the PNG file in any image editor
2. Modify colors, patterns, or branding
3. Save as PNG format
4. Replace the file in `src/assets/lanyard/`

## Troubleshooting

### Component Not Visible
- Check that asset files (card.glb, lanyard.png) are in the correct directory
- Verify the import paths in Lanyard.tsx
- Ensure the component is properly positioned

### Physics Issues
- Adjust gravity values for different effects
- Modify drag factors for sensitivity
- Check that Rapier physics is properly initialized

### Performance Issues
- Reduce physics timeStep for better performance
- Adjust canvas resolution for mobile devices
- Consider disabling physics on low-end devices

## Next Steps

1. **Add Asset Files**: Download or create the required card.glb and lanyard.png files
2. **Test Integration**: Verify the component works in your HeroSection
3. **Customize Assets**: Modify the 3D model and texture to match your branding
4. **Optimize Performance**: Adjust settings for your target devices

## File Structure
```
src/
├── components/
│   ├── Lanyard.tsx
│   ├── LanyardExample.tsx
│   └── HeroSection.tsx (integrated)
├── assets/
│   └── lanyard/
│       ├── card.glb (REQUIRED - missing)
│       ├── lanyard.png (REQUIRED - missing)
│       ├── README.md
│       └── placeholder.txt
├── global.d.ts
└── vite-env.d.ts
```