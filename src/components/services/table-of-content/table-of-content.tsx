// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './table-of-content.css';

// // Local dummy helper to satisfy compiler since the module doesn't exist
// const getTableOfContents = (serviceId: string): string[] => {
//   if (!serviceId) return [];
//   return ['OVERVIEW', 'SERVICES', 'INDUSTRIES', 'CAPABILITIES', 'FAQ'];
// };

// const TableOfContents: React.FC = () => {
//   const { serviceId } = useParams<{ serviceId?: string }>();
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTocItem, setActiveTocItem] = useState<string>('');

//   // Normalize serviceId and fallback to front-end
//   const currentServiceId = serviceId && (serviceId === 'front-end' || serviceId === 'ux-design' || serviceId === 'backend') ? serviceId : 'front-end';
//   const items = getTableOfContents(currentServiceId);

//   // Sync active Table of Contents item when service ID changes
//   useEffect(() => {
//     if (items.length > 0) {
//       setActiveTocItem(items[0]);
//     }
//   }, [currentServiceId]);

//   const handleTocItemClick = (item: string) => {
//     setActiveTocItem(item);
//   };

//   return (
//     <>
//       {/* Floating Table of Contents Toggle Button */}
//       <div 
//         className="toc-floating-trigger"
//         style={{
//           position: 'fixed',
//           left: '0',
//           top: '50%',
//           transform: 'translateY(-50%)',
//           zIndex: 99,
//         }}
//       >
//         <button
//           type="button"
//           onClick={() => setIsOpen(true)}
//           className="d-flex align-items-center gap-2 px-3 py-3 shadow-lg"
//           style={{
//             backgroundColor: 'var(--color-primary)',
//             color: '#ffffff',
//             border: 'none',
//             borderRadius: '0 8px 8px 0',
//             cursor: 'pointer',
//             writingMode: 'vertical-lr',
//             textTransform: 'uppercase',
//             fontSize: '0.78rem',
//             letterSpacing: '0.1em',
//             fontWeight: 700,
//             transition: 'all 0.2s ease',
//             boxShadow: '4px 0 15px rgba(255, 100, 51, 0.4)'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
//             e.currentTarget.style.paddingLeft = '1.25rem';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = 'var(--color-primary)';
//             e.currentTarget.style.paddingLeft = '1rem';
//           }}
//         >
//           <span style={{ transform: 'rotate(90deg)', display: 'inline-block' }}>☰</span>
//           Table of Contents
//         </button>
//       </div>

//       {/* Backdrop overlay */}
//       <div 
//         className={`toc-backdrop ${isOpen ? 'show' : ''}`} 
//         onClick={() => setIsOpen(false)}
//       />

//       {/* Drawer panel */}
//       <div className={`toc-drawer ${isOpen ? 'open' : ''}`}>
//         <div className="toc-header d-flex justify-content-between align-items-center p-3 border-bottom">
//           <div className="toc-title-wrapper d-flex align-items-center gap-2">
//             <span className="toc-bar-icon">☰</span>
//             <h5 className="toc-heading mb-0 fw-bold">Table of Contents</h5>
//           </div>
//           <button 
//             type="button" 
//             className="toc-close-btn d-flex align-items-center justify-content-center"
//             onClick={() => setIsOpen(false)}
//             aria-label="Close Table of Contents"
//           >
//             <span className="close-x">✕</span>
//           </button>
//         </div>

//         <div className="toc-body p-3">
//           <ul className="toc-list list-unstyled mb-0">
//             {items.map((item: any, idx: any) => {
//               const isHeader = item === item.toUpperCase(); // uppercase items act as main section headers
//               const isActive = activeTocItem === item;

//               return (
//                 <li 
//                   key={idx} 
//                   className={`toc-item ${isHeader ? 'toc-item-header' : ''} ${isActive ? 'active' : ''}`}
//                 >
//                   <button
//                     type="button"
//                     className="toc-link-btn"
//                     onClick={() => {
//                       handleTocItemClick(item);
//                       setIsOpen(false);
//                     }}
//                   >
//                     <span className="toc-bullet">•</span>
//                     <span className="toc-item-text">{item}</span>
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TableOfContents;
