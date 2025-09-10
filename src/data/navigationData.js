import { Shield, Users, Eye, Gavel } from 'lucide-react';

export const navigationTabs = [
  { id: 'register', label: 'Register IP', icon: Shield },
  { id: 'dashboard', label: 'Dashboard', icon: Users },
  { id: 'monitor', label: 'Monitor', icon: Eye },
  { id: 'disputes', label: 'Disputes', icon: Gavel }
];

// ===========================================

// src/data/assetTypes.js
export const assetTypes = [
  'Image/Artwork',
  'Music/Audio',
  'Video',
  'Text/Literature',
  'Software Code',
  'AI Training Data'
];