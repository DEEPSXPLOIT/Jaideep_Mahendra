import { FaNetworkWired, FaServer, FaCogs, FaDatabase, FaPython, FaTruck, FaFileInvoiceDollar, FaHandsHelping, FaCubes } from 'react-icons/fa';
import { SiCisco, SiSap, SiPostgresql, SiMysql, SiPython, SiPostman, SiMicrosoftazure } from 'react-icons/si';
import { MdInventory, MdSupportAgent, MdSyncAlt } from 'react-icons/md';

export const skillCategories = [
    {
        title: 'IT Operations & Support',
        description: 'Managing technology assets, overseeing network infrastructure, and ensuring seamless IT services to support business operations.',
        icon: '💻',
        skills: [
            { name: 'Asset Management', icon: FaCubes, level: 95, color: '#4CAF50' },
            { name: 'ERP Systems', icon: SiSap, level: 90, color: '#008FD3' },
            { name: 'Tech Support', icon: MdSupportAgent, level: 95, color: '#2196F3' },
            { name: 'Vendor Mgmt', icon: FaHandsHelping, level: 85, color: '#FF9800' },
            { name: 'Infrastructure', icon: FaServer, level: 85, color: '#9C27B0' },
        ],
    },
    {
        title: 'Networking & Infrastructure',
        description: 'Cisco Networking, TCP/IP, Protocols',
        icon: '🌐',
        skills: [
            { name: 'Cisco Routing', icon: SiCisco, level: 80, color: '#1BA0D7' },
            { name: 'Switching', icon: FaNetworkWired, level: 85, color: '#00BCD4' },
            { name: 'Troubleshooting', icon: FaCogs, level: 90, color: '#607D8B' },
            { name: 'Cloud Basics', icon: SiMicrosoftazure, level: 70, color: '#0089D6' },
        ],
    },
    {
        title: 'Data & Systems Integration',
        description: 'Leveraging SQL, Python, and API integrations to automate reporting, connect disparate systems, and drive data-backed decisions.',
        icon: '🔌',
        skills: [
            { name: 'Python', icon: SiPython, level: 80, color: '#3776AB' },
            { name: 'SQL', icon: FaDatabase, level: 90, color: '#336791' },
            { name: 'API Integrations', icon: MdSyncAlt, level: 95, color: '#E91E63' },
            { name: 'API Testing', icon: SiPostman, level: 85, color: '#FF6C37' },
        ],
    },
    {
        title: 'Supply Chain & Logistics',
        description: 'Optimizing inventory management, coordinating with vendors, and streamlining logistics workflows for maximum efficiency.',
        icon: '📦',
        skills: [
            { name: 'Logistics', icon: FaTruck, level: 85, color: '#795548' },
            { name: 'Inventory Mgmt', icon: MdInventory, level: 90, color: '#8BC34A' },
            { name: 'Billing Systems', icon: FaFileInvoiceDollar, level: 95, color: '#F44336' },
            { name: 'Procurement', icon: FaHandsHelping, level: 80, color: '#009688' },
        ],
    },
];

