import React from "react";
import { cn } from "@/utils/cn";
import NavItem from "@/components/molecules/NavItem";
import ApperIcon from "@/components/ApperIcon";

const Sidebar = ({ isOpen, onClose, className }) => {
  const navItems = [
    { to: "/", icon: "BarChart3", label: "Dashboard" },
    { to: "/inventory", icon: "Package", label: "Inventory" },
    { to: "/receive", icon: "TruckIcon", label: "Receive Vaccines" },
    { to: "/administer", icon: "Syringe", label: "Record Administration" },
    { to: "/reports", icon: "FileText", label: "Reports" },
    { to: "/settings", icon: "Settings", label: "Settings" }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200 min-h-screen",
        className
      )}>
<div className="flex items-center px-6 py-4 border-b border-gray-200">
          <div className="flex flex-col items-center w-full">
            <img 
              src="https://pediatricshouston.com/wp-content/uploads/2025/08/1751496694247-300finallogomobile.png" 
              alt="Pediatrics Houston Logo" 
              className="h-12 rounded-lg object-contain"
            />
          </div>
        </div>
        
        <nav className="flex-1 py-4">
          {navItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </nav>
        
<div className="px-4 py-4 border-t border-gray-200">
<div className="flex items-center text-sm text-gray-600">
<ApperIcon name="Shield" className="h-4 w-4 mr-2" />
            <span>Pediatrics Houston, PA</span>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
<div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex flex-col items-center w-full">
            <img 
              src="https://pediatricshouston.com/wp-content/uploads/2025/08/1751496694247-300finallogomobile.png" 
              alt="Pediatrics Houston Logo" 
              className="h-12 rounded-lg object-contain"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ApperIcon name="X" className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="flex-1 py-4">
          {navItems.map((item) => (
            <NavItem key={item.to} {...item} onClick={onClose} />
          ))}
        </nav>
        
<div className="px-4 py-4 border-t border-gray-200">
<div className="flex items-center text-sm text-gray-600">
<ApperIcon name="Shield" className="h-4 w-4 mr-2" />
            <span>Pediatrics Houston, PA</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;