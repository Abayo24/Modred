import { DollarSign, FileText, AlertTriangle } from 'lucide-react';

export const statsData = [
  {
    title: 'Total Revenue',
    value: '$12,450',
    subtitle: '+15% from last month',
    icon: DollarSign,
    gradient: 'from-green-600 to-emerald-700'
  },
  {
    title: 'Active Assets',
    value: '24',
    subtitle: '3 new this week',
    icon: FileText,
    gradient: 'from-blue-600 to-purple-700'
  },
  {
    title: 'Active Disputes',
    value: '2',
    subtitle: '1 resolved today',
    icon: AlertTriangle,
    gradient: 'from-orange-600 to-red-700'
  }
];
