export const disputeTypes = [
  'Unauthorized Usage',
  'Improper Registration',
  'License Violation', 
  'Plagiarism',
  'Copyright Infringement',
  'Trademark Violation'
];

export const activeDisputes = [
  {
    id: '1247',
    title: 'Dispute #1247',
    description: 'Unauthorized usage of "Digital Art Collection"',
    status: 'Under Review',
    timeAgo: '2 days ago',
    statusColor: 'bg-yellow-900 text-yellow-300',
    priority: 'High',
    estimatedResolution: '5-7 days'
  },
  {
    id: '1246',
    title: 'Dispute #1246', 
    description: 'License violation claim resolved in your favor',
    status: 'Resolved',
    timeAgo: '1 week ago',
    statusColor: 'bg-green-900 text-green-300',
    priority: 'Medium',
    resolution: 'Infringer ordered to pay $2,500 in damages'
  },
  {
    id: '1245',
    title: 'Dispute #1245',
    description: 'Plagiarism claim against software code', 
    status: 'Evidence Review',
    timeAgo: '4 days ago',
    statusColor: 'bg-blue-900 text-blue-300',
    priority: 'Medium',
    estimatedResolution: '3-5 days'
  }
];