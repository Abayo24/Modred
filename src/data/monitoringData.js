import { Globe, Lock, AlertTriangle, Eye } from 'lucide-react';

export const monitoringData = [
  {
    icon: Globe,
    title: 'Internet Monitoring',
    description: 'AI-powered scanning across platforms to detect unauthorized use of your IP.',
    status: 'Active',
    metric: '✓ 15 scans today',
    borderColor: 'border-blue-700',
    bgColor: 'bg-blue-900/20',
    iconColor: 'text-blue-400'
  },
  {
    icon: Lock,
    title: 'Blockchain Monitoring', 
    description: 'Real-time tracking of your IP usage across EVM-compatible blockchains.',
    status: 'Active',
    metric: '✓ 847 blocks scanned',
    borderColor: 'border-purple-700',
    bgColor: 'bg-purple-900/20',
    iconColor: 'text-purple-400'
  }
];

export const recentDetections = [
  {
    title: 'Unauthorized Usage Detected',
    asset: 'Digital Art Collection #3',
    icon: AlertTriangle,
    iconColor: 'text-red-400',
    bgColor: 'bg-red-900/20',
    borderColor: 'border-red-700'
  },
  {
    title: 'License Verification Pending',
    asset: 'Music Track - Synthwave Dreams', 
    icon: Eye,
    iconColor: 'text-yellow-400',
    bgColor: 'bg-yellow-900/20',
    borderColor: 'border-yellow-700'
  }
];