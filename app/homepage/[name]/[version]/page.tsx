import React from 'react';
import Link from 'next/link';
const CratePage = () => {
    // Other code

    return (
        <div>
            {/* Existing header and search */}
            <header className="bg-white shadow p-4">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold flex flex-col items-start space-y-1">
                        <div className="flex items-center space-x-1">
                            <span>open</span>
                            <span className="text-green-500">/</span>
                            <span>source</span>
                            <span className="text-green-500">/</span>
                            <span>insights</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-15">
                            <span>tokio</span>
                            <div className="relative">
                                <button className="flex items-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
                                    1.41.1
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {/* 这里可以添加版本选择的下拉菜单 */}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search..."
                        />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                            Search
                        </button>
                    </div>
                </div>

                <nav className="mt-4">
                    <ul className="flex space-x-4 text-gray-500 relative">
                        <li className="cursor-pointer relative">
                            <Link href="/homepage/search/ad">
                                <div className="block py-2 relative z-10">Overview</div>
                            </Link>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
                        </li>
                        <li className="cursor-pointer relative">
                            <Link href="/homepage/search/ad/dependencies">
                                <div className="block py-2 relative z-10">Dependencies</div>
                            </Link>

                        </li>
                        <li className="cursor-pointer relative">
                            <a href="#" className="block py-2 relative z-10">Dependents</a>
                        </li>
                        <li className="cursor-pointer relative">
                            <a href="#" className="block py-2 relative z-10">Compare</a>
                        </li>
                        <li className="cursor-pointer relative">
                            <a href="#" className="block py-2 relative z-10">Versions</a>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* cve */}
            <div className="container mx-auto my-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                    {/* Security Advisories */}
                    <div className="bg-white shadow rounded-lg p-4">
                        <h2 className="text-lg font-bold mb-2">Security Advisories</h2>
                        <p>No advisories detected.</p>
                    </div>
                    {/* Licenses */}
                    <div className="bg-white shadow rounded-lg p-4">
                        <h2 className="text-lg font-bold mb-2">Licenses</h2>
                        <div className="mb-2">
                            <span className="font-bold">LICENSES:</span> MIT
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">DEPENDENCY LICENSES:</span>
                            <ul className="list-disc pl-6">
                                <li>Apache-2.0 OR MIT (116)</li>
                                <li>MIT (27)</li>
                                <li>MIT OR Uniclicense (7)</li>
                                {/* Add more dependency licenses */}
                            </ul>
                        </div>
                    </div>
                    {/* Dependencies */}
                    <div className="bg-white shadow rounded-lg p-4">
                        <h2 className="text-lg font-bold mb-2">Dependencies</h2>
                        <div className="mb-2">
                            <span className="font-bold">Direct:</span> 23
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">Indirect:</span> 139
                        </div>
                        <a href="#" className="text-blue-500 hover:underline">
                            View all dependencies
                        </a>
                    </div>
                    {/* Dependents */}
                    <div className="bg-white shadow rounded-lg p-4">
                        <h2 className="text-lg font-bold mb-2">Dependents</h2>
                        <div className="mb-2">
                            <span className="font-bold">Direct:</span> 23
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">Indirect:</span> 139
                        </div>
                        <a href="#" className="text-blue-500 hover:underline">
                            View all dependencies
                        </a>
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-lg font-bold mb-2">OpenSSF scorecard</h2>
                    <p>The Open Source Security Foundation is a cross-industry collaboration to improve the security of open source software (OSS). The Scorecard provides security health metrics for open source projects.</p>
                    <a href="#" className="text-blue-500 hover:underline">
                        View information about checks and how to fix failures.
                    </a>
                    <div className="flex items-center justify-between mt-4">
                        <div className="text-3xl font-bold">8.3/10</div>
                        <div className="text-sm text-gray-500">Scorecard as of November 11, 2024.</div>
                    </div>
                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between">
                            <span>Code-Review</span>
                            <span>10/10</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Maintained</span>
                            <span>10/10</span>
                        </div>
                        <div className="flex justify-between">
                            <span>CI/Best-Practices</span>
                            <span>0/10</span>
                        </div>
                        <div className="flex justify-between">
                            <span>License</span>
                            <span>10/10</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Dangerous-Workflow</span>
                            <span>10/10</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Security-Policy</span>
                            <span>10/10</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Token-Permissions</span>
                            <span>10/10</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Binary-Artifacts</span>
                            <span>10/10</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Pinned-Dependencies</span>
                            <span>0/10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CratePage;