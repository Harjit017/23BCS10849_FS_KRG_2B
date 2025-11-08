import { useState } from 'react';
import { FileText, Download, Edit, Share2, Plus, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const documentTemplates = [
  {
    id: 'DOC001',
    name: 'Business Registration Form',
    category: 'Business Registration',
    description: 'Register your craft business legally',
    timeToGenerate: '5 minutes',
    icon: '📄',
  },
  {
    id: 'DOC002',
    name: 'GST Registration Application',
    category: 'Tax Documents',
    description: 'Apply for GST registration',
    timeToGenerate: '10 minutes',
    icon: '💰',
  },
  {
    id: 'DOC003',
    name: 'Buyer-Seller Agreement',
    category: 'Legal Agreements',
    description: 'Legal contract for sales transactions',
    timeToGenerate: '8 minutes',
    icon: '📝',
  },
  {
    id: 'DOC004',
    name: 'Product Catalog Template',
    category: 'Marketing Materials',
    description: 'Professional product catalog',
    timeToGenerate: '7 minutes',
    icon: '📊',
  },
  {
    id: 'DOC005',
    name: 'Sales Invoice Template',
    category: 'Tax Documents',
    description: 'Generate sales invoices',
    timeToGenerate: '3 minutes',
    icon: '🧾',
  },
  {
    id: 'DOC006',
    name: 'Partnership Deed',
    category: 'Legal Agreements',
    description: 'Create partnership agreements',
    timeToGenerate: '15 minutes',
    icon: '🤝',
  },
];

const myDocuments = [
  {
    id: 'MY001',
    name: 'Business Registration Form',
    category: 'Business Registration',
    date: '2024-06-10',
    status: 'Draft',
    type: 'DOC',
  },
  {
    id: 'MY002',
    name: 'GST Registration Application',
    category: 'Tax Documents',
    date: '2024-06-05',
    status: 'Final',
    type: 'PDF',
  },
  {
    id: 'MY003',
    name: 'Buyer Agreement - ABC Corp',
    category: 'Legal Agreements',
    date: '2024-05-28',
    status: 'Final',
    type: 'PDF',
  },
];

export default function Documents() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'Business Registration', 'Legal Agreements', 'Tax Documents', 'Marketing Materials'];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-heading font-bold text-text mb-2">Smart Document Generator</h1>
        <p className="text-gray-600">Generate legal documents in minutes with AI assistance</p>
      </div>

      {/* Storage Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-green to-primary-green-light rounded-xl p-6 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-sm mb-1">Storage Used</p>
            <p className="text-2xl font-bold">2.5 GB / 5 GB</p>
          </div>
          <div className="w-48">
            <div className="w-full bg-white/20 rounded-full h-3">
              <div className="bg-white h-3 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Document Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-primary-green text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search documents..."
          className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
        />
      </div>

      {/* Templates Section */}
      <div>
        <h2 className="text-xl font-heading font-semibold mb-4 text-text">Document Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documentTemplates
            .filter(
              (doc) =>
                (selectedCategory === 'all' || doc.category === selectedCategory) &&
                doc.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-2 border-transparent hover:border-primary-green"
              >
                <div className="text-4xl mb-3">{template.icon}</div>
                <h3 className="text-lg font-semibold text-text mb-2">{template.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">⏱️ {template.timeToGenerate}</span>
                  <button className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-primary-green-light transition-colors text-sm font-semibold">
                    Generate
                  </button>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* My Documents */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-heading font-semibold text-text">My Documents</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-primary-green-light transition-colors font-semibold">
            <Plus className="w-4 h-4" />
            New Document
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Document Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {myDocuments.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary-green" />
                      <div>
                        <p className="text-sm font-medium text-text">{doc.name}</p>
                        <p className="text-xs text-gray-500">{doc.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{doc.category}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{doc.date}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        doc.status === 'Final'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button className="text-primary-green hover:text-primary-green-light">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-700">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-700">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

